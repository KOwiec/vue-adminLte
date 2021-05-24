<template>
    <transition :name="transitionName">
       <a v-show="visible"
          href="javascript:void(0);"
          @click="backToTop"
          class="btn"
          :class="[ btnTheme, 'back-to-top']"
          :style="{ 'background-color': customTheme ? customTheme : '',
                    'bottom': bottom,
                    'right': right
                  }"
          role="button"
          title="Back to top"
          aria-label="Scroll to top"
       >

          <i :class="icon"></i>
       </a>
    </transition>
</template>

<script>
    export default {
        name: "BackToTop",
        props: {
            theme: {  type: String, default: 'primary' },

            icon: { type: String,  default: 'fas fa-chevron-up' },

            isOutline: { type: Boolean, default: false },

            isGradient: { type: Boolean, default: false },

            isCustomTheme: { type: Boolean, default: true },

            transitionName: { type: String, default: 'fade-top' },

            right: { type: String, default: '30px' },

            bottom: { type: String, default: '49px' },

            visibilityHeight: { type:  Number, default: 400 },

            backPosition: { type:  Number, default: 0 },
        },
        data() {
            return {
                visible: false,
                interval: null,
                isMoving: false
            }
        },
        computed: {
            btnTheme () {
                if (this.isOutline && this.theme !=='default') {
                    return `btn-outline-${this.theme}`
                }
                else if (this.isOutline) {
                    return 'btn-outline-primary'
                }
                else if (this.isGradient && this.theme !=='default') {
                    return `bg-gradient-${this.theme}`
                }
                else if (this.isGradient) {
                    return 'bg-gradient-primary'
                }
                return `btn-${this.theme}`
            },

            customTheme() {
                if(!this.isCustomTheme) return
                return this.$store.state.theme.customTheme
            }
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll)
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.handleScroll)
            if (this.interval) {
                clearInterval(this.interval)
            }
        },
        methods: {
            handleScroll() {
                this.visible = window.pageYOffset > this.visibilityHeight
            },
            backToTop() {
                if (this.isMoving) return;
                const start = window.pageYOffset;
                let i = 0;
                this.isMoving = true;
                this.interval = setInterval(() => {
                    const next = Math.floor(this.easeInOutQuad(10 * i, start, -start, 500));
                    if (next <= this.backPosition) {
                        window.scrollTo(0, this.backPosition);
                        clearInterval(this.interval);
                        this.isMoving = false
                    } else {
                        window.scrollTo(0, next)
                    }
                    i++
                }, 16.7)
            },
            easeInOutQuad(t, b, c, d) {
                if ((t /= d / 2) < 1) return c / 2 * t * t + b
                return -c / 2 * (--t * (t - 2) - 1) + b
            }
        }
    }
</script>
