<script>
export default {
  name: 'VueFold',

  props: ['options'],

  data: () => ({
    default: { rootMargin: '-10% -10% -10% -10%' },
    inFold: false,
    seen: false,
  }),

  methods: {
    run(entries) {
      if (entries[0].intersectionRatio > 0) {
        this.$emit('inFold', true);
        this.$emit('seen');

        this.inFold = true;
        this.seen = true;

        // this.watch.disconnect();
      } else {
        this.$emit('inFold', false);
        this.inFold = false;
      }
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
