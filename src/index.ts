#!/usr/bin/env ts-node

import initProject from "./initProject"

const projectName = process.argv[2]

if (!projectName) {
  console.error("Usage: ts-init <project-name>")
  process.exit(1)
}

initProject(projectName)