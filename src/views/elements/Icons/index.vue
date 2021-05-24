<template>
  <section class="content">
    <content-header title="Icons"/>

    <!-- Main content -->
    <div class="content">
      <div class="container-fluid">

        <va-card theme="primary" :isOutline="true" title="Icons" WidgetSet="default">
          <div slot="content">
            <p>You can use any font library you like with AdminLTE 3.</p>
            <strong>Recommendations</strong>
            <div>
              <a href="https://fontawesome.com/" target="_blank">Font Awesome</a><br>
              <a href="https://useiconic.com/open/" target="_blank">Iconic Icons</a><br>
              <a href="http://ionicons.com/" target="_blank">Ion Icons</a><br>
            </div>
            <strong>Vue svg icon component</strong>
            <div>
              <a href="https://panjiachen.github.io/vue-element-admin-site/feature/component/svg-icon.html#usage" target="_blank">vue-element-admin</a><br>
            </div>
          </div>
        </va-card>

        <!-- ELEMENT-UI TABS: https://element.eleme.io/#/en-US/component/tabs  option: type="border-card"-->
        <va-card :isHeader="false">
          <div slot="content">
            <el-tabs v-model="activeName">
              <el-tab-pane label="Element-UI Icons" name="elementUiIcon">
                <div v-for="item of elementIcons" :key="item" @click="handleClipboard(generateElementIconCode(item),$event)">
                  <el-tooltip placement="top">
                    <div slot="content">
                      {{ generateElementIconCode(item) }}
                    </div>
                    <div class="icon-item">
                      <i :class="'el-icon-' + item" />
                      <span>{{ item }}</span>
                    </div>
                  </el-tooltip>
                </div>
              </el-tab-pane>
              <el-tab-pane label="Svg Icons" name="svgIcons">
                <div v-for="item of svgIcons" :key="item" @click="handleClipboard(generateIconCode(item),$event)">
                  <el-tooltip placement="top">
                    <div slot="content">
                      {{ generateIconCode(item) }}
                    </div>
                    <div class="icon-item">
                      <svg-icon :icon-class="item" class-name="disabled" />
                      <span>{{ item }}</span>
                    </div>
                  </el-tooltip>
                </div>
              </el-tab-pane>
              <el-tab-pane label="Fontawesome Regular" name="fontawesomeReg">
                <div   v-for="item of fontAwesomeIcons.Regular" :key="item" @click="handleClipboard(generateFontAwesomeRegularCode(item),$event)">
                  <el-tooltip placement="top">
                    <div slot="content">
                      {{ generateFontAwesomeRegularCode(item) }}
                    </div>
                    <div class="icon-item">
                      <i :class="'far fa-' + item" />
                      <span>{{ item }}</span>
                    </div>
                  </el-tooltip>
                </div>
              </el-tab-pane>
              <el-tab-pane label="Fontawesome Solid" name="fontawesomeSol">
                <div v-for="item of fontAwesomeIcons.Solid" :key="item" @click="handleClipboard(generateFontAwesomeSolidCode(item),$event)">
                  <el-tooltip placement="top">
                    <div slot="content">
                      {{ generateFontAwesomeSolidCode(item) }}
                    </div>
                    <div class="icon-item">
                      <i :class="'fas fa-' + item" />
                      <span>{{ item }}</span>
                    </div>
                  </el-tooltip>
                </div>
              </el-tab-pane>

            </el-tabs>
          </div>
        </va-card>
        <br/>
      </div>
    </div>
    <!-- /.content -->
  </section>
</template>

<script>
    import ContentHeader from '@/layout/components/Content/ContentHeader.vue'
    import clipboard from '@/utils/clipboard'
    import svgIcons from './svg-icons'
    import elementIcons from './element-icons'
    import fontAwesomeIcons from './font-awesome-icons'

    export default {
        name: "Icons",
        components: { ContentHeader },
        data() {
            return {
                svgIcons,
                elementIcons,
                fontAwesomeIcons,
                activeName: 'elementUiIcon'
            }
        },
        methods: {
            generateIconCode(symbol) {
                return `<svg-icon icon-class="${symbol}" />`
            },
            generateElementIconCode(symbol) {
                return `<i class="el-icon-${symbol}" />`
            },
            generateFontAwesomeRegularCode(symbol) {
                return `<i class="far fa-${symbol}" />`
            },
            generateFontAwesomeSolidCode(symbol) {
                return `<i class="fas fa-${symbol}" />`
            },
            handleClipboard(text, event) {
                clipboard(text, event)
            }
        }
    }

</script>

<style lang="scss" scoped>
  .icon-item {
    margin: 20px;
    height: 85px;
    text-align: center;
    width: 100px;
    float: left;
    font-size: 30px;
    color: #24292e;
    cursor: pointer;
  }

  span {
    display: block;
    font-size: 16px;
    margin-top: 10px;
  }

  .disabled {
    pointer-events: none;
  }
</style>