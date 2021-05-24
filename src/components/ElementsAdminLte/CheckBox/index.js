import Vue from 'vue'
import CheckBox from './src/CheckBox.vue';
import CheckBoxGroup from './src/CheckBoxGroup.vue';

// register globally

Vue.component('va-check-box', CheckBox);
Vue.component('va-check-box-group', CheckBoxGroup);

export default  { CheckBox, CheckBoxGroup} ;