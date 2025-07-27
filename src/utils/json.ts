import { readFileSync, writeFileSync } from "fs"

export const readJsonFile = (filePath: string) => {
    return JSON.parse(readFileSync(filePath, "utf-8"))
}

export const writeJsonfile = (filePath: string, data: any) => {
    const jsonData = JSON.stringify(data, null, 2)
    writeFileSync(filePath, jsonData)
}