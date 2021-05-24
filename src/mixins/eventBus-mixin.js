export default {
    data() {
        return {
            number: 0
        }
    },
    methods: {
        increment() { this.number++; }
    },
    created() {
        // listen for the 'updated-content' event and react accordingly
        this.$bus.$on('updated-content', this.increment);
    },
    beforeDestroy() {
        // Clean up
        this.$bus.$off('updated-content', this.increment);
    }
}

/*
mounted: function() {
    //Update the element in the slot every second,
    //  and emit an "updated-content" event
    setInterval(function(){
        this.$bus.$emit('updated-content');
    }.bind(this), 1000);
}
*/
