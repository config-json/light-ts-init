import path from "path"

/**
 * Specify the version if needed in the second element of the array
 */
export type Dependency = [string, string?]

export type Template = {
    dir: string,
    scripts: Record<string, string>,
    packages: {
        deps: Dependency[],
        dev: Dependency[]
    }
    gitignore: string[]
    husky?: Record<string, string>
}

export const templates: Record<string, Template> = {
    default: {
        dir: path.join(__dirname, "..", "template"),
        packages: {
            deps: [],
            dev: [
                ["@types/node"],
                ["eslint"],
                ["typescript-eslint"],
                ["husky"],
                ["lint-staged"],
                ["prettier"],
                ["vitest"],
                ["ts-node"],
                ["tsc-alias"],
                ["tsconfig-paths"],
                ["typescript"]
            ]
        },
        scripts: {
            dev: "ts-node -r tsconfig-paths/register src/index.ts",
            build: "rm -rf build && tsc -p tsconfig.json && tsc-alias -p tsconfig.json",
            start: "node build/index.js",
            test: "vitest",
            lint: "eslint ./ --max-warnings 0",
            format: "prettier --write .",
            precommit: "lint-staged",
        },
        gitignore: [
            "node_modules",
            "build",
            "coverage",
            ".env",
        ],
        husky: {
            'pre-commit': 'npm run precommit'
        }
    }
}
