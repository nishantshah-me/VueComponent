import * as components from './components';

const componentsList = components?.default;
const NComponents = {
  install(Vue) {
    Object.keys(componentsList).forEach(name => {
      Vue.component(name, componentsList[name]);
    })
  },
};
export default NComponents;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(NComponents);
}