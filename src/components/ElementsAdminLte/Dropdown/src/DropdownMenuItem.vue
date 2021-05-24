<template>
    <li v-if="rootDropdownMenu.isNested && item.isDivider" class="dropdown-divider"></li>

    <li v-else-if="rootDropdownMenu.isNested" class="dropdown-item">
          <slot></slot>
    </li>

    <div v-else>
        <div v-if="item.isDivider" class="dropdown-divider"></div>

        <span v-else-if="item.isHeader" class="dropdown-item dropdown-header">{{item.text}}</span>

        <slot></slot>

    </div>
</template>

<script>

    export default {
        name: "VaDropdownMenuItem",
        inject: ['rootDropdownMenu'],

        props: {
            // item menu object
            item: { type: Object },
        },
    }
</script>

