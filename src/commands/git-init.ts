import { writeFileSync } from "fs"
import { execCommand, projectPath } from "../utils"
import { Template } from "@/templates"

export async function gitInit(gitignore: Template['gitignore']) {
    const formattedGitignore = gitignore.join("\n")
    writeFileSync(projectPath(".gitignore"), formattedGitignore)

    await execCommand("git init && git add . && git commit -m 'init with light-ts-init'")
}