<template>
  <va-nav-dropdown
          id="LanguageDropdownMenu"
          title="languages"
          icon="fas fa-globe">
      <va-dropdown-menu >
          <va-dropdown-item v-for="(item, index) in languages"
                        :key="index"
                        :item="item"
                        :active="language === item.name"
                        @click.native="handleItemClick(item)"
          />
      </va-dropdown-menu>
  </va-nav-dropdown>
</template>

<script>
export default {
    name: "LangSelect",
    componentName: 'LangSelect',
    data() {
        return {
            languages: [
                {
                    icon: 'flag-icon flag-icon-us mr-2',
                    link: '#',
                    text: 'English',
                    name: 'en'
                },
                {
                    icon: 'flag-icon flag-icon-pl mr-2',
                    link: '#',
                    text: 'Polish',
                    name: 'pl'
                },
                {
                    icon: 'flag-icon flag-icon-de mr-2',
                    link: '#',
                    text: 'German',
                    name: 'de',
                },
                {
                    icon: 'flag-icon flag-icon-fr mr-2',
                    link: '#',
                    text: 'French',
                    name: 'fr'
                },
                {
                    icon: 'flag-icon flag-icon-es mr-2',
                    link: '#',
                    text: 'Spanish',
                    name: 'es'
                },
            ],
        }
    },
    computed: {
        language() {
            return this.$store.getters.language
        }
    },
    methods: {
        handleItemClick(item) {
            if (item.name && this.language !== item.name) {
                var lang = item.name
                this.$i18n.locale = lang
                this.$store.dispatch('app/setLanguage', lang)
                this.$message({
                    message: 'Switch Language Success',
                    type: 'success'
                })
            }
       },
    }
}
</script>
