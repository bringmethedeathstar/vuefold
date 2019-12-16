<script>
export default {
  name: 'VueFold',

  props: {
    options: Object,
    disconnect: {
      type: Boolean,
      default: true,
    },
  },

  data: () => ({
    default: { rootMargin: '-20% -20% -20% -20%' },
    intersection: {},
    visible: false,
    seen: false,
  }),

  methods: {
    callback(visible) {
      if (!this.seen && visible) {
        this.$emit('seen');
        this.seen = true;
      }

      this.visible = visible;
      this.$emit('visible', visible);
    },
  },

  mounted() {
    this.intersection = { ...this.default, ...(this.options || {}) };
  },
};
</script>

<template>
  <div v-observe-visibility="{ callback, intersection, once: disconnect }">
    <slot v-bind:vuefold="{ visible, seen }" />
  </div>
</template>
