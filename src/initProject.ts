import fs from "fs"
import path from "path"
import { copyTemplateFiles, execCmd, gitInit, installDeps, npmInit } from "./commands"
import { templates } from "./templates"

export default async function initProject(name: string) {
    const dest = path.join(process.cwd(), name)

    const template = templates.default

    if (fs.existsSync(dest)) {
        console.error(`Directory ${name} already exists`)
        process.exit(1)
    }

    try {
        await copyTemplateFiles(template.dir, dest)
        
        // Change the working directory to the new project directory
        const options = { cwd: dest };

        await npmInit(name, template.scripts, options)
        await installDeps(template.packages, options)
        await gitInit(template.gitignore, options)
    } catch (err) {
        console.error("Error initializing project:\n\n")
        console.error(err)
        process.exit(1)
    }
}