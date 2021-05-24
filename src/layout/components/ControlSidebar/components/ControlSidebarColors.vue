<template>
    <div id="control-sidebar-home">
        <div class="p-3">
           <h5 style="text-align:center;">Customize Colors</h5>
            <template v-if="isEnableRememberColors">
                <p v-if="!rootTabs.isDefault">
                    <small>Save colors settings for: <h6 style="color:red">{{rootTabs.menu}} menu</h6></small>
                </p>
                <p v-else>
                    <small>Save colors settings for: <h6 style="color:red"> default menu</h6></small>
                </p>
                <hr class="mb-2"/>
            </template>
            <va-check-box
                    checkClass="icheck-primary"
                    id="cSidebarColorsCheck1"
                    v-model="menuIconColors"
                    text="Menu icons color">
            </va-check-box>
            <p></p>

            <va-check-box
                    checkClass="icheck-primary"
                    id="cSidebarColorsCheck2"
                    v-model="mainBgColor"
                    text="Main content bg color">
            </va-check-box>
            <p></p>

            <va-check-box
                    checkClass="icheck-primary"
                    id="cSidebarColorsCheck4"
                    v-model="sidebarBg"
                    :text="`Sidebar color ${this.colors.sidebarBg !== '' ? 'custom' : 'default'}`">
            </va-check-box>
            <p><small>see: src/styles/variables.scss</small></p>
            <va-check-box
                    checkClass="icheck-primary"
                    id="cSidebarColorsCheck3"
                    v-model="sidebarMode"
                    :text="`Sidebar style: ${colors.sidebarMode}`">
            </va-check-box>
            <p><small>Change style and sidebar variant !</small></p>
        </div>
    </div>
</template>

<script>
    import store from '@/store'
    import Swal from 'sweetalert2'
    import toastr from 'admin-lte/plugins/toastr/toastr.min.js'
    import { localStorageService } from '@/api/services';

    export default {
        name: "SidebarTabHome",
        inject: ['rootTabs'],
        props: {
            isEnableRememberColors: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                colors: {
                    navBarColor: this.$store.state.theme.colors.navBarColor,
                    accentColor: this.$store.state.theme.colors.accentColor,
                    sidebarColor: this.$store.state.theme.colors.sidebarColor,
                    logoColor: this.$store.state.theme.colors.logoColor,
                    menuIconColor: this.$store.state.theme.colors.menuIconColor,
                    mainBgColor:  this.$store.state.theme.colors.mainBgColor,
                    sidebarBg:  this.$store.state.theme.colors.sidebarBg,
                    sidebarMode: this.$store.state.theme.colors.sidebarMode,
                },
                oldAccentColor: this.$store.state.theme.colors.accentColor,
                storageName: '',
                collection: 'Colors',
                isChanged: false
            }
        },
        watch: {
            $route() {
                if ( this.isEnableRememberColors) {
                    this.checkCollections();
                }
            }
        },
        methods: {
            checkStorage() {
                if ( !this.isEnableRememberComp ) {
                    let isStorage = localStorageService.isStorageExist(this.storageName);
                    if (!isStorage) {
                        this.$store.dispatch('storage/RemoveStorage', this.storageName);
                    }
                }
            },
            checkCollections() {
                if(this.rootTabs.menu) {
                    this.storageName = this.rootTabs.menu + this.collection
                } else {
                   this.storageName =  this.collection;
                }
                // this.checkStorage()
            }
        },
        created() {
            if ( this.isEnableRememberColors) {
                let isStorage = localStorageService.isStorageExist(this.collection);
                if (!isStorage) {
                    this.$store.dispatch('storage/AddStorage', {
                        name: this.collection,
                        val: this.colors
                    });
                }
            }
            this.checkCollections()
        },
        computed: {
            menuIconColors: {
                get() {
                    this.colors.menuIconColor = this.$store.state.theme.colors.menuIconColor;
                    return this.colors.menuIconColor === this.$store.state.theme.menuIconColor;
                },
                set(val) {
                    if (val === false) {
                        this.colors.menuIconColor = '';
                    } else {
                        this.colors.menuIconColor = this.$store.state.theme.menuIconColor;
                    }
                    this.$store.dispatch('theme/changeColors', this.colors);
                    this.isChanged = true;
                }
            },
            mainBgColor: {
                get() {
                    this.colors.mainBgColor = this.$store.state.theme.colors.mainBgColor;
                    return this.colors.mainBgColor === this.$store.state.theme.mainBgColor;
                },
                set(val) {
                    if (val === false) {
                        this.colors.mainBgColor = '';
                    } else {
                        this.colors.mainBgColor = this.$store.state.theme.mainBgColor;
                    }
                    this.$store.dispatch('theme/changeColors', this.colors);
                    this.isChanged = true;
                }
            },
            sidebarBg: {
                get() {
                    this.colors.sidebarBg = this.$store.state.theme.colors.sidebarBg;

                    if (this.colors.sidebarMode === 'dark') {
                        if ( this.colors.sidebarColor.indexOf("light") !== -1 ) {
                            this.colors.sidebarBg = '';
                            this.colors.sidebarColor = this.colors.sidebarColor.replace("light", "dark")
                        }
                        return this.colors.sidebarBg === this.$store.state.theme.sidebarBgDark;

                    } else {
                        if ( this.colors.sidebarColor.indexOf("dark") !== -1 ) {
                            this.colors.sidebarBg = '';
                            this.colors.sidebarColor = this.colors.sidebarColor.replace("dark", "light")
                        }
                        return this.colors.sidebarBg === this.$store.state.theme.sidebarBgLight;
                    }
                },
                set(val) {
                    if (val === false) {
                        this.colors.sidebarBg = '';
                    } else {
                        if (this.colors.sidebarMode === 'dark') {
                            this.colors.sidebarBg = this.$store.state.theme.sidebarBgDark;
                        } else  {
                             this.colors.sidebarBg = this.$store.state.theme.sidebarBgLight;
                        }
                    }
                    this.$store.dispatch('theme/changeColors', this.colors);
                    this.isChanged = true;
                }
            },
            sidebarMode: {
                get() {
                    this.colors.sidebarMode = this.$store.state.theme.colors.sidebarMode;
                    return this.colors.sidebarMode === 'dark'
                },
                set(val) {
                    if (val === false) {
                        this.colors.sidebarMode = 'light'
                    } else {
                        this.colors.sidebarMode = 'dark'
                    }
                    this.$store.dispatch('theme/changeColors', this.colors);
                    this.isChanged = true;
                }
            },
        },
        mounted() {
                   'use strict';

                    $('[data-toggle="tooltip"]').tooltip();

                    var self = this;
                    var $sidebar   = $(this.$el);
                    var $container = $('<div class="p-3"/>');

                    $sidebar.append($container);

            //------------------------------------------ colors --------------------------------------
                    var sidebar_colors = [
                        'bg-primary',
                        'bg-warning',
                        'bg-info',
                        'bg-danger',
                        'bg-success',
                        'bg-indigo',
                        'bg-lightblue',
                        'bg-navy',
                        'bg-purple',
                        'bg-fuchsia',
                        'bg-pink',
                        'bg-maroon',
                        'bg-orange',
                        'bg-lime',
                        'bg-teal',
                        'bg-olive'
                   ];

                    var accent_colors = [
                        'accent-primary',
                        'accent-warning',
                        'accent-info',
                        'accent-danger',
                        'accent-success',
                        'accent-indigo',
                        'accent-lightblue',
                        'accent-navy',
                        'accent-purple',
                        'accent-fuchsia',
                        'accent-pink',
                        'accent-maroon',
                        'accent-orange',
                        'accent-lime',
                        'accent-teal',
                        'accent-olive'
                    ];

                    var sidebar_skins = [
                         'sidebar-dark-primary',
                         'sidebar-dark-warning',
                         'sidebar-dark-info',
                         'sidebar-dark-danger',
                         'sidebar-dark-success',
                         'sidebar-dark-indigo',
                         'sidebar-dark-lightblue',
                         'sidebar-dark-navy',
                         'sidebar-dark-purple',
                         'sidebar-dark-fuchsia',
                         'sidebar-dark-pink',
                         'sidebar-dark-maroon',
                         'sidebar-dark-orange',
                         'sidebar-dark-lime',
                         'sidebar-dark-teal',
                         'sidebar-dark-olive',
                         'sidebar-light-primary',
                         'sidebar-light-warning',
                         'sidebar-light-info',
                         'sidebar-light-danger',
                         'sidebar-light-success',
                         'sidebar-light-indigo',
                         'sidebar-light-lightblue',
                         'sidebar-light-navy',
                         'sidebar-light-purple',
                         'sidebar-light-fuchsia',
                         'sidebar-light-pink',
                         'sidebar-light-maroon',
                         'sidebar-light-orange',
                         'sidebar-light-lime',
                         'sidebar-light-teal',
                         'sidebar-light-olive'
                    ];

                    var navbar_dark_skins = [
                        'navbar-primary',
                        'navbar-secondary',
                        'navbar-info',
                        'navbar-success',
                        'navbar-danger',
                        'navbar-indigo',
                        'navbar-purple',
                        'navbar-pink',
                        'navbar-teal',
                        'navbar-cyan',
                        'navbar-dark',
                        'navbar-gray-dark',
                        'navbar-gray',
                    ];

                    var navbar_light_skins = [
                        'navbar-light',
                        'navbar-warning',
                        'navbar-white',
                        'navbar-orange',
                    ];

            // ---------------------------------- Sidebar -------------------------------------
            $container.append('<h6> Sidebar Variants </h6>')
            var $sidebar_variants = $('<div />', {
                'class': 'd-flex'
            })
            $container.append($sidebar_variants);

            var $clear_sidebar_dark = createClearBtn( function () {
                var $sidebar      = $('.main-sidebar');
                sidebar_skins.map(function (skin) {
                    $sidebar.removeClass(skin);
                    $sidebar.addClass(`sidebar-${self.colors.sidebarMode}-primary`)
                    self.colors.sidebarColor = `sidebar-${self.colors.sidebarMode}-primary`;
                    self.isChanged = true;
                })
            });

            $container.append(createSkinBlock(sidebar_colors, function () {
                var color         = $(this).data('color')
                var sidebar_class = `sidebar-${self.colors.sidebarMode}-` + color.replace('bg-', '');
                var $sidebar      = $('.main-sidebar');
                sidebar_skins.map(function (skin) {
                    $sidebar.removeClass(skin)
                })

                $sidebar.addClass(sidebar_class);
                self.colors.sidebarColor = sidebar_class;
                self.isChanged = true;
                //console.log('Sidebar color: ' +self.colors.sidebarColor)
            }).append($clear_sidebar_dark));

            //-------------------------------------- navBar -----------------------------------------
                    $container.append(
                        '<h6>Navbar Variants</h6>'
                    );

            var $navbar_variants        = $('<div />', {
                'class': 'd-flex'
            });
            var navbar_all_colors       = navbar_dark_skins.concat(navbar_light_skins);

            var $navbar_variants_colors = createSkinBlock(navbar_all_colors, function (e) {
                var color = $(this).data('color');
                var $main_header = $('.main-header');
                $main_header.removeClass('navbar-dark').removeClass('navbar-light');
                navbar_all_colors.map(function (color) {
                    $main_header.removeClass(color)
                })

                if (navbar_dark_skins.indexOf(color) > -1) {
                    $main_header.addClass('navbar-dark');
                    self.colors.navBarColor = 'navbar-dark '
                } else {
                    $main_header.addClass('navbar-light');
                    self.colors.navBarColor = 'navbar-light '
                }

                $main_header.addClass(color);
                self.colors.navBarColor +=  color;
                self.isChanged = true;
                //console.log('nav color: ' +self.colors.navBarColor)
            });

            var $clear_navbar = createClearBtn( function () {
                var $main_header = $('.main-header');
                navbar_all_colors.map(function (color) {
                    $main_header.removeClass(color);
                    $main_header.addClass('navbar-white navbar-light');
                    self.isChanged = true;
                    self.colors.navBarColor =  'navbar-white navbar-light';
                })
            });

            $navbar_variants_colors.append($clear_navbar);
            $navbar_variants.append($navbar_variants_colors);
            $container.append($navbar_variants)

            // ------------------------------------- logo -----------------------------------------
            var logo_skins = navbar_all_colors
            $container.append('<h6>Brand Logo Variants</h6>')
            var $logo_variants = $('<div />', {
                'class': 'd-flex'
            })
            $container.append($logo_variants);

            var $clear_logo = createClearBtn( function () {
                var $logo = $('.brand-link')
                logo_skins.map(function (skin) {
                    $logo.removeClass(skin)
                    $logo.addClass('navbar-dark');
                    self.colors.logoColor = 'navbar-dark';
                    self.isChanged = true;
                })
            });

            $container.append(createSkinBlock(logo_skins, function () {
                var color = $(this).data('color')
                var $logo = $('.brand-link')
                logo_skins.map(function (skin) {
                    $logo.removeClass(skin)
                });
                $logo.addClass(color);
                self.colors.logoColor = color;
                self.isChanged = true;
                //console.log('logo color: ' +self.colors.logoColor)
            }).append($clear_logo));

            //---------------------------------------------------accent ---------------------------------

            $container.append('<h6>Accent Variants </h6>');
            if ( this.isEnableRememberColors ) {
                $container.append('<p><small style="color:red">  After save it, page reloaded.</small></p>')
            }

            var $accent_variants = $('<div />', {
                'class': 'd-flex'
            })
            $container.append($accent_variants);

            var $clear_accent = createClearBtn( function () {
                var $body      = $('body');
                accent_colors.map(function (skin) {
                    $body.removeClass(skin);
                    self.colors.accentColor = '';
                    self.isChanged = true;
                })
            });

            $container.append(createSkinBlock(accent_colors, function () {
                var color         = $(this).data('color');
                var accent_class = color;
                var $body      = $('body');
                accent_colors.map(function (skin) {
                    $body.removeClass(skin)
                })
                $body.addClass(accent_class);
                self.colors.accentColor = color;
                self.isChanged = true;
                console.log('accent color: ' +self.colors.accentColor)
            }).append($clear_accent));

            $container.append('<hr class="mb-2"/>');
            //------------------------------------------- save --------------------------------------
            if (this.isEnableRememberColors) {
                var $save = $('<div />', {
                    'class': 'd-flex'
                });
                $container.append($save);

                $container.append(createSaveBtn( async function () {
                    if (!self.isChanged) {

                        Swal.fire({
                            title: 'Are you sure?',
                            text: 'You don\'t make any changes, Do you want save ALL MENUS (default) Colors!',
                            type: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Yes, save it!'
                        }).then((result) => {
                            if (result.value) {
                                store.dispatch('storage/AddStorage', {
                                    name: self.storageName,
                                    val: self.colors
                                })
                                .then(() => {
                                     Swal.fire('Saved!', 'Your colors set has been saved.', 'success')
                                     self.isChanged = false;
                                })
                            }
                        })

                    } else {

                        if ( self.colors.accentColor === '' || !self.rootTabs.isDefault ) {
                            delete self.colors.accentColor;
                        }
                        await store.dispatch('storage/AddStorage', {
                            name: self.storageName,
                            val: self.colors
                        });

                        // if we change accent color (body class)
                        if ( self.rootTabs.isDefault &&  self.oldAccentColor !== self.colors.accentColor ) {
                            location.reload();

                        } else if ( !self.rootTabs.isDefault ) {
                            toastr.warning(`CAUTION -  Accent colors for ${self.rootTabs.noteMenu} can't be saved ( ALL MENU only ) !`)
                            toastr.success(`SUCCESS - colors set for ${self.rootTabs.noteMenu} is saved successfully !`)

                        } else {
                            toastr.success(`SUCCESS - colors set for ${self.rootTabs.noteMenu} is saved successfully !`)
                        }
                        this.isChanged = false;
                    }

                }));
                $container.append('<hr class="mb-2"/>')
            }

            $container.append('<br/><p/>');
            // ------------------------------------------ skin block -------------------------------------
            function createSkinBlock(colors, callback) {
                var $block = $('<div />', {
                    'class': 'd-flex flex-wrap mb-3'
                })

                colors.map(function (color) {
                    var $color = $('<div />', {
                        'class': (typeof color === 'object' ? color.join(' ') : color).replace('navbar-', 'bg-').replace('accent-', 'bg-') + ' elevation-2',
                        'data-toggle': 'tooltip',
                        'title' :   (typeof color === 'object' ? color.join(' ') : color).replace('navbar-', '').replace('accent-', '').replace('bg-', '')
                        // color  // dev names of colors
                    });

                    $block.append($color)

                    $color.data('color', color)

                    $color.css({
                        width       : '36px',
                        height      : '20px',
                        borderRadius: '25px',
                        marginRight : 10,
                        marginBottom: 10,
                        opacity     : 0.8,
                        cursor      : 'pointer'
                    });

                    $color.hover(function () {
                        $(this).css({ opacity: 1 }).removeClass('elevation-2').addClass('elevation-4')
                    }, function () {
                        $(this).css({ opacity: 0.8 }).removeClass('elevation-4').addClass('elevation-2')
                    })

                    if (callback) {
                        $color.on('click',  callback)
                    }
                })

                return $block
            }
            //----------------------------------------------save btn ----------------------------------
            function createSaveBtn( callback ) {
                var $save_btn = $('<button />', {
                    'class': 'btn btn-block bg-gradient-primary',
                     text: 'Save Colors',
                     id: 'btn_save'
                });
                    if (callback) {
                        $save_btn.on( 'click', callback)
                    }

                return $save_btn
            }
            //-----------------------------------------------clear btn -------------------------------
            function createClearBtn( callback ) {
                var $clear = $('<a />', {
                    href: 'javascript:void(0);'
                }).text('default').on( 'click', callback);
                return $clear
            }
        }
    }
</script>
