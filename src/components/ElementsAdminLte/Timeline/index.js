import Vue from 'vue'
import Timeline from './src/Timeline.vue';
import TimelineDaily from './src/TimelineDaily.vue';

Vue.component('va-timeline', Timeline);
Vue.component('va-timeline-daily', TimelineDaily);

export default  { Timeline, TimelineDaily } ;