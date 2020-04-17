export const truncate = (s, limit, suffix = '') => {
  if (typeof s !== 'string') return ''
  if (s.length > limit) {
    s = s.substring(0, limit - suffix.length) + suffix
  }
  return s
}

export const uppercase = s => {
  if (typeof s !== 'string') return ''
  return s.toUpperCase()
}

export const lowercase = s => {
  if (typeof s !== 'string') return ''
  return s.toLowerCase()
}

export const capitalize = s => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export const slugify = s => {
  let text = String(s).toString()
  text = text.replace(/^\s+|\s+$/g, '') // trim
  text = text.toLowerCase()
  return text
}
