export async function joinDeps(deps: [string, string][]) {
    return deps.map(dep => {
        if (dep[1]) {
            return `${dep[0]}@${dep[1]}`
        }
        return dep[0]
    }).join(" ")
}