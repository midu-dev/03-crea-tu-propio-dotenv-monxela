const fs = require('node:fs')

function config (options = {}) {
  const filePath = options?.path ?? './.env'

  if (fs.existsSync(filePath)) {
    const text = fs.readFileSync(filePath, 'utf-8')
    const lines = text.split('\n')

    lines.forEach(line => {
      const parts = line.split('=')

      if (parts.length > 0) {
        const key = parts[0]
        const value = parts[1]?.replace(/["']/g, '') ?? ''
        process.env[key] = value
      }
    })
  }
}

module.exports = { config }
