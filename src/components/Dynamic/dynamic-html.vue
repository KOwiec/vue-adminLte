<script>
    // this component will dynamically compile the html into a vue component
    // see: https://stackoverflow.com/questions/57277705/how-can-i-add-a-vue-component-within-some-html-to-another-vue-component
    import Vue from 'vue'
    export default {
        name: "dynamic-html",
        props: ["html"],
        computed: {
            template() {
                if(this.html)
                    return Vue.compile(this.html).render;
                return null;
            }
        },
        render() {
            if(this.template)
                return this.template();
            return null;
        }
    }
</script>
