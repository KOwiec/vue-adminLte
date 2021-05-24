import Vue from 'vue'
import Radio from './src/Radio.vue';
import RadioGroup from './src/RadioGroup.vue';

// register globally

Vue.component('va-radio', Radio,  );
Vue.component('va-radio-group', RadioGroup  );

export default  { Radio, RadioGroup } ;