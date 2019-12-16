# VueFold

# BIG WIP

> ignore most of this readme :eyes:

VueFold is an opinionated wrapper around [vue-observe-visibility](https://github.com/Akryum/vue-observe-visibility).

It provides a `VueFold` component which uses the `v-observe-visibility` directive to detect when an element is becoming visible or hidden on the page.

## Getting started

```bash
npm install vuefold
```

## Usage

### Import VueFold into your Vue application

Import locally

```JavaScript
import VueFold from 'vuefold';

export default {
  //...
  components: { VueFold },
  //...
}
```

Or import globally

```JavaScript
//
```

### xxx

Use VueFold events

```HTML
<template>
  <VueFold @visible="visibleHandler()" @seen="seenHandler()">
    <!-- sweet -->
  </VueFold>
</template>
```

Or use [Scoped Slots](https://vuejs.org/v2/guide/components-slots.html#Scoped-Slots) to receive prop data from VueFold

```HTML
<template>
  <VueFold v-slot="{ vuefold }">
    <pre>
      {{ vuefold }}
    </pre>
  </VueFold>
</template>
```

## Config

By default, VueFold will disconnect it's watcher once it becomes active. Pass `disconnect` as `false` to keep the watcher alive.

When `disconnect` is `false`, VueFold will emit an `visible` event and prop.

```HTML
<template>
  <VueFold :disconnect="false">
    <!-- nice -->
  </VueFold>
</template>
```

## Examples

Use [Vue transitions](https://vuejs.org/v2/guide/transitions.html) with VueFold to animate content as it appears on screen.

```
import VueFold from 'vuefold';

export default {
  components: { VueFold },
}

<template>
  <div class="push">
    scroll down coward
  </div>

  <VueFold :options="{ rootMargin: '20% 0px 20% 0px' }"  v-slot="{ vuefold }">
    <transition name="fade">
      <img v-show="vuefold.seen" src="https://placeimg.com/640/480/animals" />
    </transition name="fade">
  </VueFold>
</template>

<style scoped>
.push {
  background: pink;
  height: 100vh;
}

img {
  display: block;
  margin: 0 auto;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
```

## Roadmap

- Better readme
- More emoji
- Ability to disconnect the watcher
- Demo

## Contribute

### Project setup

```
npm install
```

#### Compiles and hot-reloads for development

```
npm run serve
```

#### Compiles and minifies for production

```
npm run build
```

#### Lints and fixes files

```
npm run lint
```
