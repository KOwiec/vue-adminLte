<template>
    <div class="col-sm-4 col-md-2">
        <div class="color-palette-set">
            <div :class="[ activeMode, 'color-palette' ]"><span>{{color}} - {{ colorSet[color].hex }}</span></div>
            <div :class="[ activeMode, 'disabled', 'color-palette' ]"><span> Disabled</span></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "VaColorPaletteSet",
        props: {
            color: {
                type: String,
                default: 'Primary'
            }
        },
        data () {
            return {
                colorSet: {
                    Primary: { className: 'bg-primary', hex: '#007bff' },

                    Secondary: { className: 'bg-secondary', hex: '#6c757d' },

                    Info: { className: 'bg-info', hex: '#17a2b8' },

                    Success: { className: 'bg-success', hex: '#28a745' },

                    Warning: { className: 'bg-warning', hex: '#ffc107' },

                    Danger: { className: 'bg-danger', hex: '#dc3545' },

                    Black: { className: 'bg-black', hex: '#000000' },

                    Gray_Dark: { className: 'bg-gray-dark', hex: '#343a40' },

                    Gray: { className: 'bg-gray', hex: '#adb5bd' },

                    Light: { className: 'bg-light', hex: '#adb5bd' },

                    Indigo: { className: 'bg-indigo', hex: '#6610f2' },

                    Lightblue: { className: 'bg-lightblue', hex: '#3c8dbc' },

                    Navy: { className: 'bg-navy', hex: '#001f3f' },

                    Purple: { className: 'bg-purple', hex: '#605ca8' },

                    Fuchsia: { className: 'bg-fuchsia', hex: '#f012be' },

                    Pink: { className: 'bg-pink', hex: '#e83e8c' },

                    Maroon: { className: 'bg-maroon', hex: '#d81b60' },

                    Orange: { className: 'bg-orange', hex: '#ff851b' },

                    Lime: { className: 'bg-lime', hex: '#01ff70' },

                    Teal: { className: 'bg-teal', hex: '#39cccc' },

                    Olive: { className: 'bg-olive', hex: '#3d9970' }
                }
            }
        },
        computed: {
            activeMode () {
                return this.colorSet[this.color].className
            }
        }
    }
</script>

<style lang="scss" scoped>
    .color-palette {
        height: 35px;
        line-height: 35px;
        text-align: right;
        padding-right: .75rem;
    }

    .color-palette.disabled {
        text-align: center;
        padding-right: 0;
        display: block;
    }

    .color-palette-set {
        margin-bottom: 15px;
    }

    .color-palette span {
        display: none;
        font-size: 12px;
    }

    .color-palette:hover span {
        display: block;
    }

    .color-palette.disabled span {
        display: block;
        text-align: left;
        padding-left: .75rem;
    }

</style>
