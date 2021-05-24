<template>
    <div>
      <ul v-if="!vertical"
          class="nav"
          :class="[`nav-${navClass}`, getData, role]"
      >
          <li class="nav-item" v-for="(tab, index) in tabList"  :data="tab" :key="index">
              <a class="nav-link"
                 :class="[index === selectedIndex ? 'active' : '', tab.isDisabled ? 'disabled' : '']"
                 :href="`#${tab.id}`"
                 :id="`${tab.id}-tab`"
                 :data-toggle="navClass === 'tabs' ? 'pill' : 'tab'"
                 :role="navClass === 'tabs' ? 'tab' : 'pill'"
                 :title="tab.name"
                 @click="selectTab(index)"
              >
                   <i :class="tab.icon"></i>
                   {{tab.title}}
              </a>
          </li>

          <slot name="tabNav"></slot>

      </ul>
      <div v-else>
        <div class="nav flex-column"
              :class="[`nav-${navClass}`,  navData, role] "
        >
            <a class="nav-link" v-for="(tab, index) in tabList"
               :class="[index === selectedIndex ? 'active' : '', tab.isDisabled ? 'disabled' : '']"
               :href="`#${tab.id}`"
               :id="`${tab.id}-tab`"
               :data-toggle="navClass === 'tabs' ? 'pill' : 'tab'"
               :role="navClass === 'tabs' ? 'tab' : 'pill'"
               :title="tab.name"
               @click="selectTab(index)"
            >
                <i :class="tab.icon"></i>
                {{tab.title}}
            </a>
        </div>
      </div>

      <slot></slot>

      <div v-if="!cardHeaderTabs || !vertical" class="tab-content">
          <slot name="tabContent"></slot>
      </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        name: "VaNavTabs",
        props: {
            navClass: { type: String,  default: 'tabs' },

            navData: { type: String,  default: '' },

            controlSidebar: { type: Boolean, default: false },

            role: { type: String, default: 'tablist' },

            activeTab: { type: String },

            refresh: { type: Number },

            isDisabled: { type: Boolean, default: false },

            cardHeaderTabs: { type: Boolean, default: true },

            vertical: { type: Boolean, default: false },

            side: { type: String, default: 'left' },
        },
        data () {
            return {
                selectedIndex: 0, // the index of the selected tab,
                tabList: [],
            }
        },
        computed: {
            getData() {
                return this.controlSidebar ? 'nav-justified' : this.navData;
            }
        },
        created () {
            this.tabList = this.getTabsContent()
        },
        mounted () {
            if (this.activeTab) {
                var i = Number( this.activeTab );
                this.selectTab(i);
            } else {
                this.selectTab(0);
            }
        },
        watch: {
            refresh() {
                this.$nextTick(() => {
                    // re-render
                    this.selectTab(0);
                })
            }
        },
        methods: {
            ...mapActions({
                toggleTabActive: 'app/toggleTabActive'
            }),
            getTabsContent() {
                if (this.cardHeaderTabs || this.vertical) {
                    const children = this.$parent.$children
                    this.side.default ? children.splice(0, 1) : children.pop();

                    return children
                } else
                    return this.$children
            },
            selectTab(i) {
                this.selectedIndex = i;
                // loop over all the tabs
                this.tabList.forEach((tab, index) => {
                    tab.isActive = (index === i)
                    //this.$emit('tab-click', tab.id);
                });
                if (this.controlSidebar) this.toggleTabActive(i);

            }
        }
    }
</script>
