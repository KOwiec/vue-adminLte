<template>
    <div class="card"
         :class="[cardTheme, open, outline, cardType]"
         :style="styleObject"
         :id="id">

        <div v-if="isHeader"
             class="card-header"
             :class="[borderStatus, headerType]">

           <template  v-if="isCardTool">
              <h3 class="card-title"
                  :class="[titleTheme, titleType]">

                  <i :class="[icon, iconType]"></i>

                  {{ title}}<small>{{desc}}</small>
              </h3>

              <slot name="cardTitle"></slot>

              <div v-if="!widgetType.default" class="card-tools">
                  {{cardToolTitle}}

                  <slot name="beforeWidget"></slot>

                  <button v-if="widgetType"
                          type="button"
                          class="btn btn-tool"
                          :class="`btn-${btnType}`"
                          :data-card-widget="widgetType"
                          :data-toggle="toggle"
                          :title="widgetType">

                      <i :class="btnIcon"></i>
                  </button>

                  <button v-else-if="widgetSet"
                        v-for="button in btnSet(widgetSet)"
                        type="button" class="btn btn-tool" :class="`btn-${btnType}`"
                        :data-card-widget="button.name"
                        :data-toggle="toggle"
                        :title="button.text">

                      <i :class="button.icon"></i>
                  </button>

                  <slot name="afterWidget"></slot>

              </div>
              <!-- /.card-tools -->
           </template>

            <!--  without card-tools-->
            <div v-else class="d-flex justify-content-between">
                <h3 class="card-title"
                    :class="[titleTheme, titleType]">

                    <i :class="[icon, iconType]"></i>

                    {{ title}}<small>{{desc}}</small>
                </h3>

                <slot name="contentHeader"></slot>
            </div>

        </div>
        <!-- /.card-header -->
        <div v-if="$slots.content"
             class="card-body"
             :class="content"
             :id="id">
            <slot name="content"></slot>
        </div>
        <!-- /.card-body -->
        <div v-if="$slots.footer"
             class="card-footer"
             :class="[footerTheme, footerText, fcontent]">

            <slot name="footer"></slot>
        </div>
        <!-- Loading (remove the following to stop the loading)-->
        <div v-if="loading" :class="getLoading">
            <i :class="loadingIcon"></i>
        </div>
    </div>
    <!-- /.card -->
</template>

<script>
    export default {
        name: "Card",
        props: {

            id: { type: String },

            styleObject: { type: Object },

            isHeader: {  type: Boolean, default: true },

            isBorder: {  type: Boolean, default: true },

            isCardTool: { type: Boolean, default: true },

            widgetType: { type: String,  default:'' },

            widgetSet: { type: String, default: '' },

            title: { type: String, default:'' },

            titleColor: { type: String, default:'' },

            footerColor: { type: String, default:'#adb5bd' },

            cardToolTitle: { type: String, default:'' },

            desc: {  type: String, default:'' },

            icon: {  type: String, default: ''},

            iconType: {type: String, default: ''},

            content: { type: String, default: '' },

            theme: { type: String, default: 'default' },

            cardType: { type: String, default: '' },

            isGradient: { type: Boolean, default: false },

            isOpen: { type: Boolean, default: true },

            isTransparent: { type: Boolean, default: false },

            flocation: {type: String, default: ''},

            fcontent: {type: String, default: ''},

            loading: { type: String, default: '' },

            isOutline: { type: Boolean, default: false },

            isBgColor: { type: Boolean, default: false },

            btnType: { type: String, default: '' },

            toggle: { type: String, default: 'tooltip' },

            headerType: { type: String, default: '' },

            titleType: { type: String, default: '' },

        },

        computed: {
            cardTheme () {
                if (this.isGradient) {
                    return `bg-gradient-${this.theme}`
                }
                else if (this.isBgColor ) {
                    return `bg-${this.theme}`
                }
                return `card-${this.theme}`
            },
            titleTheme() {
                return `text-${this.titleColor}`
            },
            borderStatus () {
                return this.isBorder ? '' : 'border-transparent'
            },
            footerTheme() {
                return this.isTransparent ? 'bg-transparent' : this.footerColor
            },
            footerText() {
                return  `text-${this.flocation}`
            },
            open () {
                return this.isOpen?'expanded-card':'collapsed-card'
            },
            outline () {
               return this.isOutline?'card-outline':''
            },
            btnIcon () {
                if (this.widgetType === 'collapse') {
                    return this.isOpen ? 'fa fa-minus' : 'fa fa-plus'
                } else if (this.widgetType === 'remove') {
                    return 'fa fa-times'
                } else if (this.widgetType === 'maximize') {
                    return 'fas fa-expand'
                } else if (this.widgetType === 'card-refresh') {
                    return 'fas fa-sync-alt'
                }
                return ''
            },
            getLoading () {
                if (this.loading === 'default') {
                    return 'overlay'
                } else if (this.loading === 'dark') {
                    return 'overlay dark'
                }
            },
            loadingIcon () {
                return this.loading ==='default' ? "fa fa-refresh fa-spin" : "fas fa-2x fa-sync-alt"
            }
        },
        data () {
            return {
                buttons: [
                    {
                        name: 'refresh',
                        text: 'Refresh',
                        icon: 'fas fa-sync-alt'
                    },
                    {
                       name: 'maximize',
                       text: 'Maximize',
                       icon: 'fas fa-expand'
                    },
                    {
                       name: 'collapse',
                       text: 'Collapse',
                       icon: 'fa fa-minus'
                    },
                    {
                       name: 'remove',
                       text: 'Remove',
                       icon: 'fa fa-times'
                    },

                ],
                sets: [ 'all', 'default', '+max']
            }
        },
        methods: {
            btnSet (set) {
                let btns = [];
                if (set === this.sets[0]) {
                    return this.buttons
                }
                else if (set === this.sets[1]) {
                    btns.push(this.buttons[2], this.buttons[3]);
                    return btns;
                }
                else if (set === this.sets[2]) {
                    btns.push(this.buttons[1], this.buttons[2], this.buttons[3]);
                    return btns;
                }
                return ''
            }
        }
    }
</script>

<style lang="scss" scoped>
    .card-footer {
        padding: 0.75rem 1.25rem;
        background-color: rgba(0, 0, 0, 0.03);
        border-top: 0 solid rgba(0, 0, 0, 0.125);
    }

    .card-footer:last-child {
        border-radius: 0 0 calc(0.25rem - 0) calc(0.25rem - 0);
    }

</style>