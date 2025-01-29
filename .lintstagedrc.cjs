const path = require('path')

const buildCommand = (filenames) => {
  const files = filenames.map((file) => path.relative(process.cwd(), file))
  return [
    `npx prettier --write ${files.join(' --file')}`,
    `npx eslint --fix ${files.join(' ')}`,
    `npm test -- --findRelatedTests ${files.join(' ')}`
  ]
}

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildCommand]
}
