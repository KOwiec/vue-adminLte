<template>
    <transition :name="name" :mode="mode">
       <li class="nav-item dropdown" :class="className">
         <a class="nav-link"
           :class="[`bg-${navColor}`,
                      isRounded ? 'rounded' : '',
                      isToggle ?'dropdown-toggle' : ''
                   ]"
           :id="id"
           data-toggle="dropdown"
           aria-haspopup="true"
           aria-expanded="false"
           :title="isTooltip ? title : ''"
           href="javascript:void(0);"
         >
            <i v-if="icon" :class="[icon, iconFaSize]"></i>
            {{getTitle}}
            <span v-if="badge && badge.data"
                  class="badge"
                  :class="`badge-${badge.theme} navbar-badge`">
                    {{badge.data}}
            </span>

            <template v-if="image">
                <img :src="image.src" class="user-image img-circle elevation-2" :alt="image.alt">
                <span class="d-none d-md-inline">{{image.text}}</span>
            </template>

         </a>
            <slot></slot>
       </li>
    </transition>
</template>

<script>
    //fa-xs, fa-sm, fa-lg, fa-2x, fa-3x, fa-5x, fa-7x, fa-10x
    // https://fontawesome.com/how-to-use/on-the-web/styling/sizing-icons
    export default {
        name: "VaNavDropdownItem",
           props:  {
                id: { type: String, default: '' },

                title: { type: String,  default: '' },

                className: { type: String,  default: '' },

                name: { type: String,  default: 'fade' },

                mode: { type: String,  default: 'out-in' },

                isTooltip: { type: Boolean, default: true },

                icon: { type: String, default: '' },

                iconFaSize: { type: String, default: 'fa-lg' },

                isRounded: { type: Boolean, default: true },

                isToggle: {  type: Boolean, default: false  },

                navColor: {  type: String, default: '' },

                badge: {  type: Object },

                image: { type: Object },
        },
        computed: {
            getTitle() {
                 return this.isTooltip ? '' : this.title;
            }
        }
    }
</script>

