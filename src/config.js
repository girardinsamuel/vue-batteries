import merge from 'lodash.merge'

import tailwind from './tailwind.theme'
import icons from './resources/icons'

const DEFAULT_CONFIG = {
  // defaultMessage: `{_field_} is not valid.`,
  styling: false,
  prefix: 'Cell',
  theme: tailwind,
  icons: icons,
  statuses: ['default', 'error', 'warning', 'success', 'info'],
  statusIcons: {
    error: 'close-circle',
    success: 'check-circle'
  },
  // utils
  copy: false,
  // filters
  filters: {
    truncate: false,
    uppercase: false,
    lowercase: false,
    capitalize: false,
    slugify: false
  }
}

export let currentConfig = { ...DEFAULT_CONFIG }

export const getConfig = () => currentConfig

export const configure = newConf => {
  // TODO: validate config for different keywords
  // TODO: ensure that both theme and extendTheme are not defined at the same time (or not ??)
  // TODO: think to other required validations of configuration

  // check if theme is extended
  const { theme, extendTheme, ...confWithoutTheme } = newConf
  let newTheme = tailwind
  if (extendTheme) {
    newTheme = merge(newTheme, extendTheme)
  } else if (theme) {
    newTheme = theme
  }
  currentConfig = {
    ...currentConfig,
    ...confWithoutTheme,
    theme: newTheme
  }
}
