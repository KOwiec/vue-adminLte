<template>
    <div>
        <span v-if="title" class="sr-only">{{title}}</span>
        <va-dropdown-menu
                :location="location"
                :size="size"
                :isNested="isNested"
                :id="id">
            <va-dropdown-item v-for="(item, index) in dropdownList"
                              :key="index"
                              :item="item"
                              :parent="rootName"
                              @click.native="handleItemClick(item)"
            />
        </va-dropdown-menu>
    </div>
</template>

<script>
    export default {
        name: "VaDropdown",
        componentName: 'VaDropdown',
        provide() {
            return {
                rootDropdown: this
            }
        },
        data() {
            return {
                rootName: 'VaDropdown'
            }
        },
        props: {
            id: { type: String, default: '' },

            title: { type: String },

            dropdownList: { type: Array, default: [] },

            location: {  type: String,  default: 'right' },

            size: {  type: String,  default: 'sm' },

            isNested: { type: Boolean, default: false },
        },
        methods: {
            handleItemClick(item) {
                if (item.name && !item.active) {
                    //console.log('item click: ' +item.name)
                    this.$emit('dropdown-item-click', item.name);
                }
            },
        },
        mounted() {
            this.$on('submenu-item-click', this.handleItemClick);
        }
    }
</script>

