import Vue from 'vue'
import Form from './src/Form.vue';
import FormGroup from './src/FormGroup.vue';

// register globally

Vue.component('va-form', Form);
Vue.component('va-form-group',  FormGroup);

export default {Form, FormGroup} ;