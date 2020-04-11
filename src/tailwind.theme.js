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
    base: 'font-bold py-2 px-4 rounded-lg items-center justify-center',
    block: 'block w-full',
    inline: 'inline-flex',
    variants: {
      root: {
        fill: 'border border-transparent',
        outline: 'border bg-transparent hover:border-transparent',
        link: 'border-none bg-transparent',
        disabled: 'opacity-50 cursor-not-allowed'
      },
      blue: {
        fill: 'bg-blue-500 hover:bg-blue-700 text-white',
        outline:
          'border-blue-500 text-blue-700 hover:bg-blue-500 hover:text-white',
        link: 'text-blue-700 hover:text-blue-500',
        disabled: 'bg-blue-300'
      },
      dark: {
        fill: 'bg-gray-500 hover:bg-gray-700 text-white',
        outline:
          'border-gray-500 text-gray-700 hover:bg-gray-500 hover:text-white',
        link: 'text-gray-700 hover:text-gray-500',
        disabled: 'bg-gray-300'
      }
    },
    // icon classes
    leadingIcon: 'fill-current w-4 h-4',
    trailingIcon: 'fill-current w-4 h-4'
  }
}
