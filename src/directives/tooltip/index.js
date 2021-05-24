import tooltip from './tooltip'

const install = function(Vue) {
    Vue.directive('tooltip', tooltip)
}

if (window.Vue) {
    window['tooltip'] = tooltip
    Vue.use(install); // eslint-disable-line
}

tooltip.install = install
export default tooltip
