import { getConfig } from "../config"

export const truncate = (s, limit, suffix = "") => {
  if (typeof s !== "string") return ""
  if (s.length > limit) {
    s = s.substring(0, limit - suffix.length) + suffix
  }
  return s
}

export const uppercase = s => {
  if (typeof s !== "string") return ""
  return s.toUpperCase()
}

export const lowercase = s => {
  if (typeof s !== "string") return ""
  return s.toLowerCase()
}

export const capitalize = s => {
  if (typeof s !== "string") return ""
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export const filesize = (size, locale = null, custom = false) => {
  // Credits to : https://github.com/sindresorhus/pretty-bytes
  if (typeof size !== "number" || isNaN(size)) {
    throw new TypeError("Expected a number")
  }

  var exponent
  var unit
  var units
  var neg = size < 0
  // locale provided ? else use global locale
  const localeToUse = locale || getConfig().locale
  if (localeToUse.startsWith("fr")) {
    units = ["o", "Ko", "Mo", "Go", "To", "Po", "Eo", "Zo", "Yo"]
  } else {
    units = ["B", "kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
  }

  if (neg) {
    size = -size
  }

  if (size < 1) {
    return (neg ? "-" : "") + size + " B"
  }

  exponent = Math.min(
    Math.floor(Math.log(size) / Math.log(1000)),
    units.length - 1,
  )
  size = (size / Math.pow(1000, exponent)).toFixed(2) * 1
  unit = units[exponent]
  const sizeDisplay = (neg ? "-" : "") + size
  return custom ? { size: sizeDisplay, unit } : sizeDisplay + " " + unit
}
