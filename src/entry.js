import VueFold from './VueFold.vue';

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('VueFold', VueFold);
}

const plugin = {
  install,
};

let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
}

VueFold.install = install;

export default VueFold;
