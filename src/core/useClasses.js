import { getConfig } from "../config"
import _ from "lodash"
// TODO: use lodash.mergewith if exists to reduce size bundles

export default (props, themeKey) => {
  const config = getConfig()
  // complete styling of component can be disabled locally (first) or globally
  const styling = props.noStyling ? false : config.styling
  if (!styling) {
    return {
      styling,
      componentClasses: {},
      setElementClasses: () => {},
    }
  }
  // eslint-disable-next-line no-unused-vars
  function customizer (objValue, srcValue, key, object, source) {
    if (typeof objValue === "string") {
      return srcValue + " " + objValue
    } else {
      return undefined
    }
  }
  // _.get(object, 'a[0].b.c');
  // check if theme is fully overriden or not
  const componentClasses = props.override
    ? props.classes
    : _.mergeWith({}, config.theme[themeKey], props.classes, customizer)

  // check if locale overrides have been provided
  if (Object.keys(props.classesOverride).length > 0) {
    // no customizer provided here means that source will override destination
    _.mergeWith(componentClasses, props.classesOverride)
  }

  const setElementClasses = (elementKey, baseKey, mapping = {}) => {
    const _classes = [componentClasses[elementKey][baseKey]]
    for (const [propKey, propValue] of Object.entries(mapping)) {
      if (propValue) {
        _classes.push(componentClasses[elementKey][propKey])
      }
    }
    return styling ? _classes.join(" ") : ""
  }
  return {
    styling,
    componentClasses,
    setElementClasses,
  }
}
