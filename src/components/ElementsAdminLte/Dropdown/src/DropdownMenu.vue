<template>
    <!-- Dropdown menu-->
    <ul v-if="isNested"
            class="dropdown-menu border-0 shadow"
            :aria-labelledby="id">
        <slot></slot>
    </ul>
    <div v-else class="dropdown-menu"
                :class="[`dropdown-menu-${size}`, `dropdown-menu-${location}` ]"
                role="menu">
        <slot></slot>
    </div>
</template>

<script>

    export default {
        name: "VaDropdownMenu",
        componentName: 'VaDropdownMenu',
        provide() {
            return {
                rootDropdownMenu: this
            }
        },
        data() {
            return {
                rootName: 'VaDropdownMenu'
            }
        },
        props:  {
            id: { type: String, default: '' },

            location: {  type: String,  default: 'right' },

            size: {  type: String,  default: 'sm' },

            isNested: { type: Boolean, default: false },
        },
    }
</script>
