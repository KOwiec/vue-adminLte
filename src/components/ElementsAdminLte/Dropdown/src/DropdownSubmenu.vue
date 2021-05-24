<template>
    <!-- Level two dropdown-->
    <li class="dropdown-submenu dropdown-hover">

        <a :id="index"
           href="#"
           role="button"
           data-toggle="dropdown"
           aria-haspopup="true"
           aria-expanded="false"
           class="dropdown-item dropdown-toggle">

            <slot name="dropdownHover"></slot>

        </a>

        <ul :aria-labelledby="index" class="dropdown-menu border-0 shadow">
            <slot/>
        </ul>

    </li>
</template>

<script>
    export default {
        name: "VaDropdownSubmenu",
        props: {
            index: {
                type: String,
                //required: true
            },
        },

    }
</script>

