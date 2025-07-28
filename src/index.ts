#!/usr/bin/env ts-node

import { existsSync } from "fs"
import { initProject } from "./init-project"
import { projectPath } from "./utils"

const projectName = process.argv[2]

if (!projectName) {
  console.error("Usage: light-ts-init <project-name>")
  process.exit(1)
}

if (existsSync(projectPath(projectName))) {
  console.error(`Directory ${projectName} already exists`)
  process.exit(1)
}

initProject(projectName)
