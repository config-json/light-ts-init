import { Template } from "@/templates"
import { execCommand, joinDeps } from "@/utils"

export async function installDeps(packages: Template['packages']) {
    const joinedDeps = joinDeps(packages.deps)
    const joinDevDeps = joinDeps(packages.dev)

    await execCommand(`npm install ${joinedDeps}`)
    await execCommand(`npm install -D ${joinDevDeps}`)
}