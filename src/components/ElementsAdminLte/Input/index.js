import Vue from 'vue'
import Input from './src/Input.vue';
import InputGroup from './src/InputGroup.vue';
import InputFile from './src/InputFile.vue';

// register globally
Vue.component('va-input', Input);
Vue.component('va-input-group', InputGroup)
Vue.component('va-input-file', InputFile)

export default { Input, InputGroup, InputFile };