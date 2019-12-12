# VueFold

VueFold uses [The Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) to determine if an element is in the fold.

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
  <VueFold @inFold="inFoldHandler()" @seen="seenHandler()">
    <!-- content -->
  </VueFold>
</template>
```

Or use [Scoped Slots](https://vuejs.org/v2/guide/components-slots.html#Scoped-Slots) to receive prop data from VueFold

```HTML
<template>
  <VueFold>
    <template v-slot="vuefold">
      <pre>
        {{ vuefold }}
      </pre>
    </template>
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

  <VueFold :options="{ rootMargin: '20%px 0px 20% 0px' }">
    <template v-slot="vuefold">
      <transition name="fade">
        <img v-show="vuefold.seen" src="https://placeimg.com/640/480/animals" />
      </transition name="fade">
    </template>
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
