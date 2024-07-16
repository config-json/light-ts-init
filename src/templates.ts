import path from "path"



export type Template = {
    dir: string,
    scripts: Record<string, string>,
    /**
     * Specify the version if needed in the second element of the array
     */
    packages: {
        deps: [string, string][],
        dev: [string, string][]
    }
    gitignore: string[]
}

export const templates: Record<string, Template> = {
    default: {
        dir: path.join(__dirname, "..", "template"),
        packages: {
            deps: [],
            dev: [
                ["@types/node", ""],
                ["@typescript-eslint/parser", ""],
                ["eslint", ""],
                ["eslint-config-prettier", ""],
                ["eslint-plugin-prettier", ""],
                ["eslint-plugin-unused-imports", "^3.2.0"],
                ["husky", ""],
                ["lint-staged", ""],
                ["prettier", ""],
                ["ts-jest", ""],
                ["ts-node", ""],
                ["tsc-alias", ""],
                ["tsconfig-paths", ""],
                ["typescript", ""]
            ]
        },
        scripts: {
            dev: "ts-node -r tsconfig-paths/register src/index.ts",
            build: "rm -rf build/ && tsc -p tsconfig.json && tsc-alias -p tsconfig.json",
            start: "ts-node build/index.js",
            test: "jest --coverage",
            lint: "eslint src/**/*.ts --fix",
            format: "prettier --write .",
            precommit: "tsc && lint-staged",
        },
        gitignore: [
            "node_modules",
            "build",
            ".env",
            // Jest coverage
            "/coverage",
        ]
    }
}
