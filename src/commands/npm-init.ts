import { execCommand, projectPath, readJsonFile, writeJsonfile } from "@/utils"

export const npmInit = async (name: string, scripts: Record<string, string>) => {
    await execCommand("npm init -y")

    const packageJsonPath = projectPath("package.json")
    const packageJson = readJsonFile(packageJsonPath)

    packageJson.name = name
    packageJson.scripts = scripts
    packageJson.main = "build/index.js"
    packageJson.type = "module"

    writeJsonfile(packageJsonPath, packageJson)
}