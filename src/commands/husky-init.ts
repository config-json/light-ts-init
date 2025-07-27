import { writeFileSync } from "fs"
import { Template } from "@/templates"
import { execCommand, projectPath } from "@/utils"

export const huskyInit = async (hooks: Template['husky']) => {
    await execCommand('npx husky init')
    
    if (hooks) {
        for (const [hook, command] of Object.entries(hooks)) {
            writeFileSync(projectPath(`.husky/${hook}`), command)
        }
    }
}