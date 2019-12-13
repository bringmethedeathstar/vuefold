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
    inFold: false,
    seen: false,
    watch: null,
  }),

  methods: {
    run(entries) {
      if (entries[0].intersectionRatio > 0) {
        this.$emit('seen');
        this.seen = true;

        if (this.disconnect) {
          this.watch.disconnect();
        } else {
          this.fold(true);
        }
      } else {
        this.fold(false);
      }
    },

    fold(val) {
      this.$emit('inFold', val);
      this.inFold = val;
    },
  },

  mounted() {
    this.watch = new IntersectionObserver(this.run, {
      ...this.default,
      ...(this.options || {}),
    });

    this.watch.observe(this.$refs['vuefold']);
  },
};
</script>

<template>
  <div ref="vuefold">
    <slot v-bind:vuefold="{ inFold, seen }" />
  </div>
</template>
