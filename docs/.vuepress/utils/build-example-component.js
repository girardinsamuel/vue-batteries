const parseExampleArgs = require('./parse-example-args')
const parseExample = require('./parse-example')
const buildExampleAttrs = require('./build-example-attrs')

module.exports = function buildExampleComponent(args) {
  const { fileBaseName, title, preview, attrs } = parseExampleArgs(args)
  const example = parseExample(fileBaseName)
  const exampleArgs = buildExampleAttrs(fileBaseName, preview, example, attrs)
  return `<previewer ${exampleArgs}><template #title>${title}</template></previewer>`
}
