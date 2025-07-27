import { exec, ExecOptions } from "child_process";

type ExecCommandArgs = ExecOptions & {
    enableStdout?: boolean
}

// FIXME: implement logger
export const execCommand = async (command: string, options?: ExecCommandArgs) => {
    const { enableStdout, ...execOptions } = options || { };

    return new Promise<void>((res, rej) => {
        exec(command, execOptions, (error, stdout, stderr) => {
            if (error) {
                console.error(stderr)
                return rej(error)
            }

            if (enableStdout) {
                console.log(stdout)
            }

            return res()
        })
    })
}