import { ncp } from "ncp"
import { exec } from "child_process"
import path from "path"
import fs from "fs"
import { joinDeps } from "./utils"

export async function execCmd(cmd: string, options?: { cwd: string }, noStdOut?: boolean): Promise<void> {
    return new Promise((res, rej) => {
        exec(cmd, options, (err, stdout, stderr) => {
            if (err) {
                console.log(stderr)
                rej(err)
            } else {
                !noStdOut && console.log(stdout)
                res()
            }
        })
    })
}

export async function copyTemplateFiles(src: string, dest: string): Promise<void> {
    return new Promise((res, rej) => {
        ncp(src, dest, (err) => {
            if (err) {
                rej(err)
            } else {
                res()
            }
        })
    })
}

export async function npmInit(name: string, scripts: Record<string, string>, options: { cwd: string }): Promise<void> {
    await execCmd("npm init -y", options, true)

    // Get the package.json file and edit it
    const packagePath = path.join(process.cwd(), `/${name}/package.json`)
    const packageJson = JSON.parse(fs.readFileSync(packagePath, "utf-8"))

    packageJson.name = name
    packageJson.scripts = scripts
    packageJson.main = "src/index.ts"

    fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
}

export async function installDeps(packages: { deps: [string, string][], dev: [string, string][] }, options?: { cwd: string }): Promise<void> {
    const { deps, dev } = packages
    
    const joinedDeps = await joinDeps(deps)
    const joinDevDeps = await joinDeps(dev)

    await execCmd(`npm install ${joinedDeps}`, options)
    await execCmd(`npm install --save-dev ${joinDevDeps}`, options)
}

export async function gitInit(gitignore: string[], options: { cwd: string }): Promise<void> {

    const _gitignore = gitignore.join("\n")

    // The .gitignore file won't be included in build
    fs.writeFileSync(path.join(options.cwd, ".gitignore"), _gitignore)

    await execCmd("git init && git add . && git commit -m 'init with light-ts-init'", options, true)
}