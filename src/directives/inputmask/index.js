import inputmask from './inputmask'

const install = function(Vue) {
  Vue.directive('inputmask', inputmask)
}

if (window.Vue) {
  window['inputmask'] = inputmask
  Vue.use(install); // eslint-disable-line
}

inputmask.install = install
export default inputmask
