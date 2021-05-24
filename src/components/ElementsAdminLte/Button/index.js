import Vue from 'vue'
import Button from './src/Button.vue';
import ButtonGroup from './src/ButtonGroup.vue';
import RadioButton from './src/RadioButton.vue';
import AppButton from './src/AppButton.vue';

// register globally
Vue.component('va-button', Button);
Vue.component('va-button-group', ButtonGroup)
Vue.component('va-radio-button', RadioButton)
Vue.component('va-app-button', AppButton)

export default { Button, ButtonGroup, RadioButton, AppButton };