---
tags:
  - install
  - cdn
  - npm
  - umd
---

# Installation

## Direct Download / CDN

https://unpkg.com/vue-batteries/dist/vue-batteries

[unpkg.com](https://unpkg.com) provides NPM-based CDN links. The above link will always point to the latest release on NPM. You can also use a specific version/tag via URLs like https://unpkg.com/vue-batteries@{{ \$version }}/dist/vue-batteries.js

Include vue-batteries after Vue and it will install itself automatically:

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-batteries/dist/vue-batteries.js"></script>
```

## NPM

```sh
$ npm install vue-batteries
```

## Yarn

```sh
$ yarn add vue-batteries
```

When used with a module system, you must explicitly install the `vue-batteries` via `Vue.use()`:

```javascript
import Vue from 'vue'
import vue-batteries from 'vue-batteries'

Vue.use(vue-batteries)
```

You don't need to do this when using global script tags.

## Dev Build

### H3 title

test

You will have to clone directly from GitHub and build `vue-batteries` yourself if
you want to use the latest dev build.

```sh
$ git clone https://github.com//vue-batteries.git node_modules/vue-batteries
$ cd node_modules/vue-batteries
$ npm install
$ npm run build
```
