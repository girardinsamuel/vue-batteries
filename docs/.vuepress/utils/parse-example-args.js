module.exports = function parseExampleArgs(args) {
  // const fileBaseName = args.match(/^([^,]+)(\s*,)?/)[1].trim()
  // const attrsMatch = args.match(/^[^,]+\s*,\s*(.+?)$/)
  // const attrs = attrsMatch ? attrsMatch[1].trim() : ''
  const tokens = args.split(',').map(s => s.trim())
  const fileBaseName = tokens[0]
  const title = tokens[1]
  let preview = fileBaseName
  if (tokens.length > 2) {
    preview = tokens[2]
  }
  const attrs = tokens.slice(3).join(', ')

  return { fileBaseName, title, preview, attrs }
}
