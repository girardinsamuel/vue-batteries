export default {
  alert: {
    container: {
      base: 'relative p-3 border rounded-lg',
      error: 'bg-red-200 text-red-600 border-red-700',
      success: 'bg-green-200 text-green-600 border-green-700'
    },
    content: 'text-left',
    close: 'absolute inset-y-0 right-0 flex items-center pl-3'
  },
  button: {
    base:
      'inline-flex items-center justify-center py-3 text-lg font-medium leading-6 transition duration-150 ease-in-out rounded-lg',
    leadingIcon: 'fill-current w-4 h-4 mr-2',
    trailingIcon: 'fill-current w-4 h-4 ml-2'
  }
}
