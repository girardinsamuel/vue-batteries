export default textToCopy => {
  var textarea = document.createElement("textarea")
  const id = "vuebatteriescopy0123456789-hidden"
  textarea.id = id
  // Place in top-left corner of screen regardless of scroll position.
  textarea.style.position = "fixed"
  textarea.style.top = 0
  textarea.style.left = 0

  // Ensure it has a small width and height. Setting to 1px / 1em
  // doesn't work as this gives a negative w/h on some browsers.
  textarea.style.width = "1px"
  textarea.style.height = "1px"

  // We don't need padding, reducing the size if it does flash render.
  textarea.style.padding = 0

  // Clean up any borders.
  textarea.style.border = "none"
  textarea.style.outline = "none"
  textarea.style.boxShadow = "none"

  // Avoid flash of white box if rendered for any reason.
  textarea.style.background = "transparent"
  document.body.appendChild(textarea)
  const fakeElement = document.getElementById(id)
  /* Set text to copy and select it */
  fakeElement.value = textToCopy
  fakeElement.select()
  fakeElement.setSelectionRange(0, 99999) /* For mobile devices */
  /* Copy the text inside the text field */

  try {
    const status = document.execCommand("copy")
    document.body.removeChild(textarea)
    return status
  } catch (err) {
    document.body.removeChild(textarea)
    console.error(err)
    return false
  }
}
