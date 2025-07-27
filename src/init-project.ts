import { gitInit, installDeps, npmInit } from "./commands"
import { templates } from "./templates"
import { projectPath } from "./utils"
import { copyFiles } from "./utils/copy-files"

export const initProject = async (name: string, templateName?: string) => {
    const dest = projectPath(name)
    const template = templates[templateName || 'default']

    try {
        await copyFiles(template.dir, dest)
        process.chdir(dest)

        await npmInit(name, template.scripts)
        await installDeps(template.packages)
        await gitInit(template.gitignore)
    } catch (err) {
        // FIXME: implement logger
        console.error("Error initializing project:\n\n")
        console.error(err)
        process.exit(1)
    }
}