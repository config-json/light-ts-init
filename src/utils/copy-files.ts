import { ncp } from "ncp"

export const copyFiles = async (src: string, dest: string) => {
    return new Promise<void>((res, rej) => {
        ncp(src, dest, (error) => {
            if (error) {
                rej(error)
            } else {
                res()
            }
        })
    })
}