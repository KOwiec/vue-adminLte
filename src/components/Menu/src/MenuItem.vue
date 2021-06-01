<template>
    <li v-if="isLiHeader(index)"
           class="nav-header"
           :style="headerStyle">

        {{generateTitle(item.meta.title)}}
    </li>

    <li v-else-if="!showLabel"
        class="nav-item"
        tabindex="-1"
        :class="{ 'active': active }"
        :style="{ colorBackground }"
        @click="handleClick"
        @mouseenter="onMouseEnter"
        @focus="onMouseEnter"
        @blur="onMouseLeave"
        @mouseleave="onMouseLeave"
        :title="isTooltip">

        <el-tooltip
                v-if="rootMenu.collapse && item.meta && item.meta.title && rootMenu.showTooltip"
                effect="dark"
                placement="right"
                :content="generateTitle(item.meta.title)"
        >
                <div>
                    <slot></slot>
                </div>
        </el-tooltip>

        <slot v-else></slot>
    </li>

</template>

<script>
    import { isHeader, isLabel } from '@/utils/validate'
    import Menu from './menu-mixin';
    import Emitter from '@/mixins/emitter-mixin';
    import { generateTitle } from '@/utils/i18n'

    export default {
        name: "MenuItem",
        componentName: 'MenuItem',
        mixins: [Menu, Emitter],
        props: {
            index: {
                default: null,
                validator: val => typeof val === 'string' || val === null
            },
            item: { type: Object }
        },
        computed: {
            showLabel() {
                return this.rootMenu.collapse && isLabel(this.index)
            },
            active() {
                return this.index === this.rootMenu.activeIndex;
            },
            isNested() {
                return this.parentMenu !== this.rootMenu;
            },
            isTooltip () {
                return this.rootMenu.collapse && this.item.meta && this.item.meta.title && !this.rootMenu.showTooltip
                       ? this.item.meta.title
                       : ''
            },
            hoverBackground() {
                return this.rootMenu.hoverBackground;
            },
            colorBackground() {
                return this.rootMenu.onlyHover ? this.rootMenu.menuColor : this.rootMenu.menuItemColor;
            },
            activeTextColor() {
                return this.rootMenu.activeTextColor || '';
            },
            textColor() {
               return this.rootMenu.textColor || '';
            },
            headerStyle() {
                return { color: this.rootMenu.isDarkCustom || this.rootMenu.isLightCustom ? this.activeTextColor : '' }
            },
            isSidebarColor() {
                return this.rootMenu.isSidebarColor;
            },

        },
        watch: {
            isSidebarColor(val) {
                if (val) return;
                this.$el.style.backgroundColor = ''
            }
        },
        methods: {
            generateTitle,
            handleClick() {
                    this.dispatch( 'Menu', 'item-click', this);
                    this.$emit('click', this);
            },
            isLiHeader(url) {
                return isHeader(url)
            },
            onMouseEnter() {
                if (!this.isNested || !this.rootMenu.isHoverEffect) return;
                this.$el.style.backgroundColor = this.isSidebarColor ? this.hoverBackground : '';
                this.$el.style.borderRadius = this.isSidebarColor ? '5px' : '';
            },
            onMouseLeave() {
                if (!this.isNested || !this.rootMenu.isHoverEffect) return;
                this.$el.style.backgroundColor = this.isSidebarColor ? this.colorBackground : '';
            },
        },
        mounted() {
            this.parentMenu.addItem(this);
            this.rootMenu.addItem(this);
        },
        beforeDestroy() {
            this.parentMenu.removeItem(this);
            this.rootMenu.removeItem(this);
        }
    }
</script>

