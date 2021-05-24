<template>
  <section class="content">
    <content-header title="Buttons"/>

    <!-- Main content -->
    <div class="content">
      <div class="container-fluid">

            <buttons-vue/>

            <outline-buttons-vue/>

            <gradient-buttons-vue/>

            <waves-buttons-vue/>

            <custom-buttons-vue/>

        <div class="row">
          <div class="col-md-6">
            <!-- Block buttons -->
            <va-card title="Block Buttons">
              <div slot="content">
                <va-button name=".btn-block" :isBlock="true"/>
                <va-button name=".btn-block .btn-flat" :isBlock="true" :isFlat="true"/>
                <va-button name=".btn-block .btn-sm" :isBlock="true" size="sm"/>
                <va-button size="lg" :isBlock="true">
                  <mallki class-name="mallki-text" text="Hover text in block button" />
                </va-button>
              </div>
            </va-card>


            <!-- Horizontal grouping -->
            <va-card title="Horizontal Vue Button Group" cardType="table-responsive pad">
              <div slot="content">
                <p>
                  Horizontal vue button groups are easy to create. Just add your buttons
                  inside <code>&lt;va-button-group&gt;&lt;/va-button-group&gt;</code>. To send this components to <code>&ltvue-table></code> like a string, we use
                  <code>&ltdynamic-html></code> component.  See: src/components/dynamic/dynamic-html
                </p>

                <va-table :headers="headers" :data="items" theme="bordered"/>

              </div>
            </va-card>

            <va-card title="Appended Buttons">
              <div slot="content">
                <strong>With dropdown</strong>

                <va-input-group groupType="input" classData="mb-3">
                  <va-input name="action"/>
                  <va-button slot="slotPrefixButton"
                             name="Action"
                             :isDropdown="true"/>
                  <va-dropdown slot="slotPrefixDropdown" :dropdownList="List" location="left"/>
                </va-input-group>

                <br/>
                <strong>Normal</strong>

                <va-input-group groupType="input">
                  <va-input name="action2"/>
                  <va-button slot="slotPrefixButton"
                             name="Action"
                             theme="danger"/>
                </va-input-group>

                <br/>
                <strong>Flat</strong>

                <va-input-group groupType="input">
                  <va-input name="go"/>
                  <va-button slot="slotSuffixButton"
                             name="Go!"
                             theme="info"
                             :isFlat="true"/>
                </va-input-group>
              </div>
            </va-card>

            <!-- split buttons box -->
            <va-card title="Split buttons">
              <div slot="content">
                <p>Normal split buttons:</p>
                <div class="margin">
                  <va-button-group v-for="theme in themes" :key="theme">
                    <va-button :theme="theme" name="Action" />
                    <va-button :theme="theme" :isDropdown="true"/>
                    <va-dropdown id="SplitBtnMenu" :dropdownList="List" location="left"/>
                  </va-button-group>
                </div>

              </div>
            </va-card>
            <!-- end split buttons box -->
          </div>
          <!-- /.col -->
          <div class="col-md-6">
            <!-- Application buttons -->
            <va-card title="Application Buttons">
              <div slot="content">
                <p>Add the classes <code>.btn.btn-app</code> to an <code>&lt;a></code> in vue component. First <code> &ltapp-button/></code>
                component, we wrap in <code> &ltva-link>&lt/va-link> </code> component. See: src/components/Link/src/index.js</p>

                <va-link to="/widgets">
                  <va-app-button name="Edit" icon="fa fa-edit"/>
                </va-link>

                <va-app-button name="Play" icon="fa fa-play" @app-btn-click="$Swal.fire('App Button click!')"/>
                <va-app-button name="Repeat" icon="fa fa-repeat" @app-btn-click="$Toaster.success('App Button click!')"/>
                <va-app-button name="Pause" icon="fa fa-pause" />
                <va-app-button name="Save" icon="fa fa-save"/>

                <va-link to="https://vuejs.org">
                  <va-app-button name="Notifications" icon="fa fa-bullhorn" :badge="{data: '3', color: 'warning'}"/>
                </va-link>

                <va-app-button name="Products" icon="fa fa-barcode" :badge="{data: '300', color: 'success'}"/>
                <va-app-button name="Users" icon="fa fa-users" :badge="{data: '891', color: 'purple'}"/>
                <va-app-button name="Orders" icon="fa fa-inbox" :badge="{data: '67', color: 'teal'}"/>
                <va-app-button name="Inbox" icon="fa fa-envelope" :badge="{data: '12', color: 'info'}"/>
                <va-app-button name="Likes" icon="fa fa-heart" :badge="{data: '531', color: 'danger'}"/>

              </div>
            </va-card>

            <!-- Vertical grouping -->
            <va-card title="Vertical Vue Button Group" cardType="table-responsive pad">
              <div slot="content">
                <p>
                  Vertical vue button groups are easy to create. Add 'isVertical' property inside code:
                  <code>&lt;va-button-group :isVertical="true"&gt;&lt;/va-button-group&gt;</code>
                </p>

                <va-table :headers="headers" :data="items2" theme="bordered"/>

              </div>
            </va-card>

            <!-- Radio Buttons -->
            <va-card title="Radio Button Group" cardType="table-responsive pad">
              <div slot="content">
                <p class="mb-1">Vue Radio Button Group with <code>.btn-secondary</code></p>

                <va-button-group :isRadio="true">
                  <va-radio-button theme="secondary" name="Active" id="option1" :isActive="true" :value="true"/>
                  <va-radio-button theme="secondary" name="Radio" id="option2" />
                  <va-radio-button theme="secondary" name="Radio" id="option3" />
                </va-button-group>

                <p class="mt-3 mb-1">Vue Radio Button Group with <code>.bg-olive</code></p>
                <va-button-group :isRadio="true">
                  <va-radio-button color="olive" name="Active" id="option4" :isActive="true" :value="true"/>
                  <va-radio-button color="olive" name="Radio" id="option5" />
                  <va-radio-button color="olive" name="Radio" id="option6" />
                </va-button-group>
              </div>
            </va-card>

          </div>
          <!-- /.col -->
        </div>
        <!-- /. row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content -->
  </section>
</template>

<script>
    import ContentHeader from '@/layout/components/Content/ContentHeader.vue'
    import ButtonsVue from './ButtonsVue.vue'
    import OutlineButtonsVue from './OutlineButtonsVue.vue'
    import GradientButtonsVue from './GradientButtonsVue.vue'
    import WavesButtonsVue from './WavesButtonsVue.vue'
    import CustomButtonsVue from './CustomButtonsVue.vue'
    import Mallki from '@/components/TextHoverEffect/Mallki'

    const theme = ['default','info','danger','warning','success'];

    export default {
        name: "Buttons",
        components: { Mallki, ContentHeader, ButtonsVue, OutlineButtonsVue,
                      GradientButtonsVue,  WavesButtonsVue, CustomButtonsVue,
        },
        data () {
            return {
                themes: theme,
                vertical: false,
                headers: [
                    {text:'Button', value:'button'},
                    {text:'Icons', value: 'icons'},
                    //{text:'Flat', value:'flat'},
                    {text:'Dropdown', value:'dropdown'},
                ],
                items: this.createBtnsData(this.vertical, theme),
                items2: this.createBtnsData(this.vertical = true, theme),
                List: [
                    {  link: '#', text: 'Action' },
                    {  link: '#', text: 'Another action' },
                    {  link: '#', text: 'Something else here' },
                    {  isDivider: true },
                    {  router: {name: 'DashboardV1'}, text: 'Separated link' }
                ],

            }
        },
        methods: {
            // vue components - see: components/dynamic/dynamic-html component
            getGroupName(theme,  names, vertical) {
                return `<va-button-group :isVertical="${vertical}">
                           <va-button theme="${theme}" name="${names[0]}"/>
                           <va-button theme="${theme}" name="${names[1]}"/>
                           <va-button theme="${theme}" name="${names[2]}"/>
                        </va-button-group>`
            },
            getGroupIcons(theme, icons, vertical) {
                return `<va-button-group :isVertical="${vertical}">
                           <va-button theme="${theme}" icon="${icons[0]}"/>
                           <va-button theme="${theme}" icon="${icons[1]}"/>
                           <va-button theme="${theme}" icon="${icons[2]}"/>
                        </va-button-group>`
            },
            // <va-dropdown :dropdownList="${List}" location="left/> - not working
            getGroupDropdown(theme, int, vertical, List) {
                return `<va-button-group :isVertical="${vertical}">
                          <va-button theme="${theme}" name="${int[0]}"/>
                          <va-button theme="${theme}" name="${int[1]}"/>
                          <va-button-group :isVertical="${vertical}">
                              <va-button theme="${theme}" :isDropdown="true"/>
                              <div class="dropdown-menu">
                                  <a class="dropdown-item" href="#">Dropdown link</a>
                                  <a class="dropdown-item" href="#">Dropdown link</a>
                              </div>
                          </va-button-group>
                        </va-button-group>`
            },

            createBtnsData(vertical, theme) {
                let data = [];

                let List = [{link: '#', text: 'Dropdown link' }, {link: '#', text: 'Dropdown link' }];
                let names  = ['Left', 'Middle', 'Right'];
                let icons = ['fas fa-align-left', 'fas fa-align-center', 'fas fa-align-right'];
                let int = ['1', '2'];

                for(let i = 0; i < 5; i++){
                    data.push({
                        button: { dynamic: this.getGroupName( theme[i], names, vertical )},
                        icons:  { dynamic: this.getGroupIcons( theme[i], icons, vertical )},
                        dropdown: { dynamic: this.getGroupDropdown( theme[i], int, vertical, List )},
                    });
                }
                return data;
            },
        }
    }
</script>

<style scoped>

</style>