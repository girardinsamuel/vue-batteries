export default {
  alert: {
    container: {
      base:
        "flex items-center justify-between px-3 py-2 border rounded-lg text-sm",
      error: "bg-red-200 text-red-600 border-red-700",
      success: "bg-green-200 text-green-600 border-green-700",
    },
    content: "text-left",
    close: "text-sm",
  },
  button: {
    base: "font-bold py-2 px-4 rounded-lg items-center justify-center",
    block: "block w-full",
    inline: "inline-flex",
    variants: {
      root: {
        fill: "border border-transparent",
        outline: "border bg-transparent hover:border-transparent",
        link: "border-none bg-transparent",
        disabled: "opacity-50 cursor-not-allowed",
      },
      blue: {
        fill: "bg-blue-500 hover:bg-blue-700 text-white",
        outline:
          "border-blue-500 text-blue-700 hover:bg-blue-500 hover:text-white",
        link: "text-blue-700 hover:text-blue-500",
        disabled: "bg-blue-300",
      },
      dark: {
        fill: "bg-gray-500 hover:bg-gray-700 text-white",
        outline:
          "border-gray-500 text-gray-700 hover:bg-gray-500 hover:text-white",
        link: "text-gray-700 hover:text-gray-500",
        disabled: "bg-gray-300",
      },
    },
    // icon classes
    leadingIcon: "fill-current w-4 h-4",
    trailingIcon: "fill-current w-4 h-4",
  },
  input: {
    root: "",
    container: "relative",
    input: {
      base: "form-input block w-full",
      error:
        "border border-red-500 text-red-600 placeholder-red-300 focus:border-red-500 focus:shadow-outline-red",
      warning: "",
      info: "",
      success: "",
      disabled: "text-gray-500",
      readonly: "bg-gray-200",
    },
    label: {
      base: "block text-sm text-left font-medium leading-5",
      error: "text-red-600",
      warning: "",
      info: "",
      success: "",
      disabled: "",
    },
    leadingIcon: {
      base: "h-4 w-4 fill-current",
      container:
        "absolute inset-y-0 left-0 flex items-center pointer-events-none px-2",
      error: "text-red-600",
      warning: "",
      info: "",
      success: "",
      disabled: "text-gray-500",
    },
    trailingIcon: {
      base: "h-4 w-4 fill-current",
      container: "absolute inset-y-0 right-0 flex items-center px-2",
      error: "text-red-600",
      warning: "",
      info: "",
      success: "text-green-600",
      disabled: "text-gray-500",
    },
    help: {
      base: "block text-sm mt-1 text-left font-medium leading-5 text-gray-600",
      error: "text-red-600",
      warning: "text-yellow-800",
      info: "",
      success: "",
    },
  },
  textarea: {
    root: "",
    textarea: {
      base:
        "w-full border px-4 py-2 text-lg leading-tight border-0 rounded-lg shadow-none appearance-none",
      error:
        "border border-red-500 text-red-600 placeholder-red-300 focus:border-red-500 focus:shadow-outline-red",
      warning: "",
      info: "",
      success: "",
      disabled: "text-gray-500",
      readonly: "bg-gray-200",
    },
  },
  switch: {
    root: "",
    label: {
      base: "font-medium leading-5 flex items-center",
      error: "text-red-600",
      warning: "",
      info: "",
      success: "",
      disabled: "text-gray-300",
    },
    back: {
      base:
        "relative inline-block flex-shrink-0 h-6 w-12 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline",
      checked: "bg-green-600",
      unchecked: "bg-gray-300",
      disabled: "opacity-50",
    },
    front: {
      base:
        "inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200",
      checked: "translate-x-3",
      unchecked: "-translate-x-3",
      disabled: "bg-gray-100",
    },
    help: {
      base: "block text-sm mt-1 text-left font-medium leading-5",
      default: "text-gray-600",
      error: "text-red-600",
      warning: "text-yellow-800",
      info: "",
      success: "",
      disabled: "text-gray-200",
    },
  },
  select: {
    root: "",
    container: "relative",
    input: {
      base: "form-select block w-full",
      base_multiple: "form-multiselect block w-full",
      error:
        "border border-red-500 text-red-600 placeholder-red-300 focus:border-red-500 focus:shadow-outline-red",
      warning: "",
      info: "",
      success: "",
      disabled: "text-gray-500",
      readonly: "bg-gray-200",
    },
    label: {
      base: "block text-sm text-left font-medium leading-5",
      error: "text-red-600",
      warning: "",
      info: "",
      success: "",
      disabled: "",
    },
    leadingIcon: {
      base: "h-4 w-4 fill-current",
      container:
        "absolute inset-y-0 left-0 flex items-center pointer-events-none px-2",
      error: "text-red-600",
      warning: "",
      info: "",
      success: "",
      disabled: "text-gray-500",
    },
    help: {
      base: "block text-sm mt-1 text-left font-medium leading-5 text-gray-600",
      error: "text-red-600",
      warning: "text-yellow-800",
      info: "",
      success: "",
    },
  },
  checkbox: {
    container: "flex items-center",
    input: {
      base: "form-checkbox",
      error: "text-red-600",
      warning: "",
      info: "",
      success: "",
      disabled: "text-gray-500",
      readonly: "",
    },
    label: {
      base: "ml-2",
      error: "text-red-600",
      warning: "",
      info: "",
      success: "",
      disabled: "",
    },
  },
  radio: {
    container: "flex items-center",
    input: {
      base: "form-radio",
      error: "text-red-600",
      warning: "",
      info: "",
      success: "",
      disabled: "text-gray-500",
      readonly: "",
    },
    label: {
      base: "ml-2",
      error: "text-red-600",
      warning: "",
      info: "",
      success: "",
      disabled: "",
    },
  },
  group: {
    root: "mb-5",
    container: "block",
    label: {
      base: "block text-sm text-left font-medium leading-5",
    },
    help: "",
  },
}
