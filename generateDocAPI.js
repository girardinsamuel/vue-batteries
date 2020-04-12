const vuedoc = require('@vuedoc/md')
const path = require('path')
const fs = require('fs')
const { readdirSync, statSync } = require('fs')

const sourceDir = path.join(__dirname, 'src/components/')
const outputDir = 'docs/components/'

const baseOptions = {
  level: 3,
  features: ['props', 'slots', 'events'],
  section: 'API'
}

//joining path of directory
const getComponentNames = p =>
  readdirSync(p).filter(f => statSync(path.join(p, f)).isDirectory())

const findSectionNode = section => node => {
  return node.type === 'Header' && toString(node) === section
}
const prepare = options => component => {
  options.filename = path.join(sourceDir, component, 'props.js')
  const outputFile = path.join(outputDir, component + '.md')
  const ast = require('markdown-to-ast')
  const output = fs.readFileSync(outputFile, 'utf8')

  const target = ast.parse(output.toString())

  const localNode = target.children.find(findSectionNode(options.section))

  if (localNode && !options.level) {
    options.level = localNode.depth + 1
  }

  vuedoc
    .md(options)
    .then(generatedDoc => {
      const ast = require('markdown-to-ast')
      const toMarkdown = require('ast-to-markdown')
      const inject = require('md-node-inject')
      const docs = { children: [] }
      ast.parse(generatedDoc).children.forEach(node => docs.children.push(node))
      const tree = inject(options.section, target, docs)
      const doc = toMarkdown(tree)
      fs.writeFileSync(outputFile, doc)
    })
    .catch(error => {
      console.error('Error during generation')
    })
}

// SCRIPT
const processComponentsAPI = options => {
  options.filenames = getComponentNames(sourceDir)
  const callback = prepare(options)
  const processes = options.filenames.map(callback)
  return Promise.all(processes)
}

processComponentsAPI(baseOptions)
