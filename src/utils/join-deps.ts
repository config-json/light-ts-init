import { Dependency } from "@/templates"

export const joinDeps = (deps: Dependency[]) => {
    return deps.map((dep) => {
        if (dep[1]) {
            return `${dep[0]}@${dep[1]}`
        }
        return dep[0]
    }).join(" ")
}