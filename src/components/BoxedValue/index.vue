<template>
    <div>
        <slot :item="boxedItem"></slot>
    </div>
</template>

<script>
    export default {
        name: "BoxedValue",
        props: {
            array: {
                type: Array,
                required: true
            },
            index: {
                type: Number,
                required: true
            }
        },
        data() {
            return {
                boxedItem: {value: this.array[this.index]}
            }
        },
        watch: {
            'boxedItem.value': function(oldValue, newValue) {
                // console.log('Array item at index ' + this.index + ' value changed from ' + oldValue + ' to ' + newValue)
                this.array[this.index] = newValue
            }
        },
    }
    /**
     * Component that boxes the value at each array index into an object that can be referenced within it's slot.
     * It then reacts to the data-changing by updating the array at the specified index via a watcher.
     * @author Jamie Pearcey
     * @see https://stackoverflow.com/questions/43014016/why-v-model-doesnt-work-with-an-array-and-v-for-loop
     * @example
     *   <div v-for="(name, index) in primitiveValues" :key="index">
     *       <boxed-value :array="primitiveValues" :index="index">
     *         <template slot-scope="{item}">
     *              <el-input v-model="item.value"></el-input>
     *         </template>
     *       </boxed-value>
     *   </div>
     */
</script>
