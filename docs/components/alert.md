# Alert

This component is a simple alert box which can be closed and display different status.

## Installation

## Configuration

## Examples

@[example](Alert1, Simple alert)

@[example](Alert2, Alert with v-model)

@[example](Alert3, Alert with icons)

@[example](Alert4, Alert with status)

The following is an alert with style disabled. Even if styling is enabled globally, it can be overriden locally. All classes defined in the theme for alert component won't be used. You can still use
`classes` prop to style the component (as shown in the second example)

@[example](Alert5, Alert non-styled and redesigned locally)

Finally for complete control over html structure and better reusability it is advised to create a
wrapper component, and use `CellAlert` as a renderless component.

@[example](Alert6, Alert as renderless component)

The power coming from this plugin and Vue 3 above all, is the ability to have a real
renderless component by using composition API to get only the functionalities of
the component without the opiniated html structure (you can still benefit from the theming
system though if it has an interest for you or you can throw it out.)

@[example](Alert7, Completely custom alert, MyAlert)

## API

### props

- `closable` **_Boolean_** (_optional_) `default: true`

  This Boolean property indicates that the user cannot interact with the control.

- `status` **_String_** (_optional_) `default: null`

- `classes` **_Object_** (_optional_) `default: [object Object]`

- `v-model` **_Boolean_** (_optional_) `default: true`

  Use this directive to create two-way data bindings with the component.
  It automatically picks the correct way to update the element based on the input type.
