import path from "path"

export const projectPath = (name: string) => {
    return path.join(process.cwd(), name)
}