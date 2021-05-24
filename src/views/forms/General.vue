<template>
   <section class="content">
     <!-- Content Header (Page header) -->
     <content-header title="General Form"/>

     <!-- Main content -->
     <div class="content">
       <div class="container-fluid">
         <va-row>
           <!-- left column -->
           <div class="col-md-6">
               <!-- general form elements -->
               <va-form>
                   <va-card theme="primary" title="Quick Example">
                       <div slot="content">
                           <va-input-group
                                   title="Email address"
                                   id="inputGroupEmail">
                               <!--for state of validation by click event - add ':showState="submitted"' to input component-->
                               <va-input
                                       type="email"
                                       v-model.trim="demo.email"
                                       rules="required|email"
                                       name="email"
                                       ref="email"
                                       placeholder="Enter email"
                                       :showState="submitted"
                                       validateEvent
                               />
                           </va-input-group>
                           <va-input-group :showError="submitted"
                                   title="Password"
                                   id="inputGroupPassword">
                               <va-input
                                       type="password"
                                       v-model.trim="demo.password"
                                       rules="required|min:6|max:30"
                                       name="password"
                                       ref="password"
                                       placeholder="Password"
                                       validateEvent
                                       :showPassword="displayPass"
                               />
                           </va-input-group>
                           <va-input-group
                                   title="Retype password"
                                   id="inputGroupPasswordConfirm">
                               <va-input
                                       type="password"
                                       v-model.trim="demo.confirmPassword"
                                       :rules="{ required: true, confirmed: demo.password}"
                                       name="confirmed"
                                       ref="confirmed"
                                       placeholder="Retype password"
                                       validateEvent
                               />
                           </va-input-group>
                           <va-input-group
                                   title="File input"
                                   id="exampleInputFile"
                                   helpBlock="Example block-level help text here.">
                               <va-input-file
                                       @change="handleFileChange"
                                       ref="file"
                                       appendText
                                       title="Upload"
                               />
                           </va-input-group>
                           <va-check-box
                                   v-model="displayPass"
                                   checkClass="icheck-primary"
                                   id="exampleCheck"
                                   text=" Show password">
                           </va-check-box>
                           <hr/>
                           <label style="width: 250px">Email: {{demo.email}}</label>
                           <label style="width: 250px">Password: {{demo.password}}</label>
                           <label style="width: 450px">File: {{demo.file.name}}</label>
                       </div>
                       <div slot="footer">
                           <va-button slot="footer" type="button" @btn-click="handleSubmit" name="Submit" theme="primary" align="left"/>
                       </div>
                   </va-card>
               </va-form>
               <!-- Horizontal Form -->
               <va-form is-horizontal>
                   <va-card theme="info" title="Horizontal Form">
                       <div slot="content">
                           <va-input-group :isHorizontal="true"
                                           title="Email"
                                           id="horizontalEmail"
                           >
                               <va-input slot="horizontal"
                                         v-model="demo.email2"
                                         rules="required|email"
                                         name="email"
                                         type="email"
                                         ref="emailHorizont"
                                         placeholder="Email"
                                         state="warning"
                                         validateEvent
                               />
                           </va-input-group>
                           <va-input-group :isHorizontal="true"
                                           title="Password"
                                           id="horizontalPassword"
                           >
                               <va-input slot="horizontal"
                                         v-model="demo.password2"
                                         rules="required|min:6|max:30"
                                         placeholder="Password"
                                         name="password"
                                         type="password"
                                         ref="passwordHorizont"
                                         state="warning"
                                         validateEvent
                               />
                           </va-input-group>

                           <va-form-group :isHorizontal="true">
                               <va-check-box
                                       checkClass="icheck-primary"
                                       slot="horizontal"
                                       id="exampleCheck3"
                                       text="Remember me">
                               </va-check-box>
                           </va-form-group>

                           <hr/>
                           <label style="width: 250px">Email: {{demo.email2}}</label>
                           <label style="width: 250px">Password: {{demo.password2}}</label>
                       </div>
                       <div slot="footer">
                           <va-button theme="info"  name="Sign in"></va-button>
                           <va-button align="right" name="Cancel"></va-button>

                       </div>
                   </va-card>
               </va-form>
               <!-- Form Element sizes -->
               <va-card theme="success" title="Different Height">
                 <div slot="content">
                   <va-input
                         v-model="demo.input"
                         size="lg"
                         name="inputLg"
                         placeholder=".input-lg">
                   </va-input>
                   <br/>
                   <va-input
                         name="inputDefault"
                         placeholder="Default input">
                   </va-input>
                   <br/>
                   <va-input
                         size="sm"
                         name="inputSm"
                         placeholder=".input-sm">
                   </va-input>
                 </div>
               </va-card>

               <va-card theme="danger" title="Different Width">
                 <div slot="content">
                   <div class="row">
                       <div class="col-3">
                           <va-input v-model="demo.input" name="inputColXs3" placeholder=".col-xs-3"></va-input>
                       </div>

                       <div class="col-4">
                           <va-input name="inputColXs4" placeholder=".col-xs-4"></va-input>
                       </div>

                       <div class="col-5">
                            <va-input name="inputColXs5" placeholder=".col-xs-5"></va-input>
                       </div>
                   </div>
                 </div>
               </va-card>

               <!-- Input addon -->
               <va-card theme="info" title="Input Addon">
                 <div slot="content">

                   <va-input-group
                         groupType="input"
                         prefixAddonText="@">
                       <va-input v-model="demo.input" name="username" placeholder="Username" />
                   </va-input-group>
                   <br/>
                   <va-input-group
                         groupType="input"
                         suffixAddonText=".00">
                       <va-input placeholder="Username" name="username2"/>
                   </va-input-group>
                   <br/>
                   <va-input-group
                         groupType="input"
                         prefixAddonText="$"
                         suffixAddonText=".00">
                       <va-input  name="input$"/>
                   </va-input-group>
                   <br/>
                  <h4>With icons</h4>

                   <va-input-group
                         groupType="input"
                         type="email">
                       <va-input  placeholder="Email" name="email" type="email"/>
                       <i slot="slotPrefixAddonText" class="fa fa-envelope"></i>
                   </va-input-group>
                   <br/>
                   <va-input-group groupType="input">
                       <va-input name="check" />
                       <i slot="slotSuffixAddonText" class="fa fa-check"></i>
                   </va-input-group>
                   <br/>
                   <va-input-group groupType="input">
                       <va-input name="sign"/>
                       <i slot="slotPrefixAddonText" class="fas fa-dollar-sign"></i>
                       <i slot="slotSuffixAddonText" class="fa fa-ambulance"></i>
                   </va-input-group>
                   <br/>
                   <h4>With checkbox and radio inputs</h4>

                   <va-row>
                     <div class="col-lg-6">
                       <va-input-group groupType="input">
                          <input slot="slotPrefixAddonText" type="checkbox">
                          <va-input name="checkbox"/>
                       </va-input-group>
                     </div>

                     <div class="col-lg-6">
                       <va-input-group groupType="input">
                         <input slot="slotPrefixAddonText" type="radio">
                         <va-input name="radio"/>
                       </va-input-group>
                    </div>
                   </va-row>

                   <br/>
                   <h4>With buttons</h4>
                   <p class="margin">Large: <code>.input-group.input-group-lg</code></p>

                   <va-input-group
                         groupType="input"
                         size="lg">
                       <va-input name="action"/>
                       <va-button slot="slotPrefixButton"
                              name="Action"
                              theme="warning"
                              :isDropdown="true">
                       </va-button>
                       <va-dropdown slot="slotPrefixDropdown" :dropdownList="List" location="left"></va-dropdown>

                   </va-input-group>

                   <br/>
                   <p class="margin">Normal</p>

                   <va-input-group groupType="input">
                       <va-input name="action2"/>
                      <va-button slot="slotPrefixButton"
                              name="Action"
                              theme="danger">
                       </va-button>
                   </va-input-group>

                   <br/>
                   <p class="margin">Small <code>.input-group.input-group-sm</code></p>

                  <va-input-group
                         groupType="input"
                         size="sm">
                        <va-input name="go"/>
                        <va-button slot="slotSuffixButton"
                              name="Go!"
                              theme="info"
                              size="sm"
                              :isFlat="true">
                        </va-button>
                   </va-input-group>
                 </div>
               </va-card>

               <va-card theme="danger" title="Material input">
                   <div slot="content">
                       <label for="inputMd" class="form-label-sm">Username: {{demo.username}}</label>
                       <md-input v-model="demo.username" id="inputMd"  name="title" placeholder="username">
                           Your username
                       </md-input>
                   </div>
                   <div slot="footer">
                       <p>Documentation & examples, look at:  <a href="https://github.com/wemake-services/vue-material-input" target="_blank">material-input</a></p>
                   </div>
               </va-card>
           </div>
           <!--/.col (left) -->
           <!-- right column -->
           <div class="col-md-6">
               <!-- Textarea -->
               <va-card theme="info" title="Textarea">
                   <div slot="content">
                       <va-row>
                           <div class="col-sm-6">
                               <va-textarea
                                       v-model="demo.area"
                                       :rows="4"
                                       id="textarea-input"
                                       title="Textarea"
                                       placeholder="Enter ...">
                               </va-textarea>
                           </div>
                           <div class="col-sm-6">
                               <va-textarea
                                       id="textarea-input-disabled"
                                       title="Textarea Disabled"
                                       placeholder="Enter ..."
                                       disabled >
                               </va-textarea>
                           </div>
                       </va-row>
                       <va-row>
                           <div class="col-sm-6">
                              <va-textarea
                                   v-model="demo.area2"
                                   id="textarea-autosize"
                                   title="Textarea autosize"
                                   placeholder="Enter ..."
                                   autosize >
                              </va-textarea>
                          </div>
                          <div class="col-sm-6">
                              <va-textarea
                                   v-model="demo.area3"
                                   :autosize="{ minRows: 3, maxRows: 5}"
                                   id="textarea-min-max"
                                   title="Textarea min(3) & max(5) lines"
                                   placeholder="Enter ..."
                                   >
                              </va-textarea>
                          </div>
                       </va-row>
                       <va-row>
                           <va-textarea
                                   v-model="demo.area4"
                                   rows="8"
                                   cols="60"
                                   id="textarea-scroll"
                                   title="Textarea OverlayScrollbar"
                                   placeholder="Enter ..."
                                   scroll>
                           </va-textarea>
                       </va-row>
                       <hr/>
                       <label style="width: 250px">Area 1: {{demo.area}}</label>
                       <label style="width: 250px">Area 2: {{demo.area2}}</label>
                   </div>

               </va-card>
               <!-- general form elements -->
               <va-card theme="warning" title="General Elements">
                   <div slot="content">
                       <va-row>
                           <div class="col-sm-6">
                               <va-input-group
                                       :title="`Text: ${demo.input2}`">
                                   <va-input v-model="demo.input2"
                                             name="text"
                                             placeholder="Enter ..."/>
                               </va-input-group>
                           </div>
                           <div class="col-sm-6">
                               <va-input-group title="Text Disabled" >
                                   <va-input placeholder="Enter ..."
                                             name="disabled"
                                             disabled/>
                               </va-input-group>
                           </div>
                       </va-row>

                       <va-input-group helpBlock="Help block with success">
                           <va-input state="valid" name="valid"/>
                           <label slot="title"><i class="fa fa-check"></i> Input with success</label>
                       </va-input-group>

                       <va-input-group helpBlock="Help block with warning">
                           <va-input state="warning" name="warning"/>
                           <label slot="title"><i class="far fa-bell"></i> Input with warning</label>
                       </va-input-group>

                       <va-input-group helpBlock="Help block with error">
                           <va-input state="invalid" name="invalid"/>
                           <label slot="title"><i class="far fa-times-circle"></i> Input with error</label>
                       </va-input-group>
                       <va-row>
                           <div class="col-sm-6">
                               <label >
                                   checkbox component: {{demo.name}}
                               </label>
                               <va-check-box
                                       v-model="demo.name"
                                       data="Chris">
                                   Name:
                               </va-check-box>
                               <va-check-box
                                       v-model="demo.name"
                                       data="John">
                                   Name:
                               </va-check-box>
                               <va-check-box
                                       text="Checkbox disabled"
                                       :disabled="true">
                               </va-check-box>
                               <label >
                                   checked: {{demo.checked}}
                               </label>
                               <va-check-box v-model="demo.checked">
                                   Option:  {{demo.checked}}
                               </va-check-box>
                           </div>
                           <div class="col-sm-6">
                               <label >
                                   radio component: {{demo.radio}}
                               </label>
                               <va-radio
                                       v-model="demo.radio"
                                       data="1">
                                   Radio A:
                                   <span v-if="demo.radio === '1'">
                                {{demo.radio}}
                             </span>
                               </va-radio>
                               <va-radio
                                       v-model="demo.radio"
                                       data="2">
                                   Radio B:
                                   <span v-if="demo.radio === '2'">
                                {{demo.radio}}
                             </span>
                               </va-radio>
                               <va-radio text=" Radio disabled"
                                         :disabled="true">
                               </va-radio>
                           </div>
                       </va-row>
                       <va-row>
                           <div class="col-sm-6">
                               <va-select
                                       title="Select"
                                       :list="selectList"
                                       @select="handleSelect($event)">
                               </va-select>
                           </div>
                           <div class="col-sm-6">
                               <va-select
                                       title="Select Disabled"
                                       :list="selectList"
                                       is-disabled>
                               </va-select>
                           </div>
                       </va-row>
                       <va-row>
                           <div class="col-sm-6">
                               <va-select
                                       title="Select Multiple"
                                       :list="selectList"
                                       :isMultiple="true"
                                       @select="handleSelect($event)">
                               </va-select>
                           </div>
                           <div class="col-sm-6">
                               <va-select
                                       title="Select Multiple Disabled"
                                       :list="selectList"
                                       is-multiple is-disabled>
                               </va-select>
                           </div>
                       </va-row>
                   </div>
               </va-card>
               <va-form>
                   <va-card theme="secondary" title="Custom Elements">
                       <div slot="content">
                           <va-row>
                               <div class="col-6">
                                   <va-check-box
                                           checkClass="custom-control"
                                           id="customCheckbox1">
                                       Custom Checkbox
                                   </va-check-box>
                                   <va-check-box
                                           checkClass="custom-control"
                                           id="customCheckbox2"
                                           checked>
                                       Custom Checkbox checked
                                   </va-check-box>
                                   <va-check-box
                                           checkClass="custom-control"
                                           id="customCheckbox3"
                                           disabled>
                                       Custom Checkbox disabled
                                   </va-check-box>
                                   <!-- adminLte 3.1.0-rc
                                   <va-check-box
                                           checkClass="custom-control"
                                           id="customCheckbox4"
                                           color="danger">
                                       Custom Checkbox with custom color
                                   </va-check-box>
                                   <va-check-box
                                           checkClass="custom-control"
                                           id="customCheckbox5"
                                           color="danger"
                                           :isOutline="true">
                                       Custom Checkbox with custom color outline
                                   </va-check-box>-->
                               </div>

                               <div class="col-6">
                                   <va-radio
                                           radioClass="custom-control"
                                           id="customRadio1"
                                           name="customRadio2"
                                           data="2">
                                       Custom Checkbox
                                   </va-radio>
                                   <va-radio
                                           radioClass="custom-control"
                                           id="customRadio2"
                                           name="customRadio2"
                                           v-model="demo.radio"
                                           data="1">
                                       Custom Checkbox checked
                                   </va-radio>
                                   <va-radio
                                           radioClass="custom-control"
                                           id="customRadio3"
                                           name="customRadio2"
                                           data="3"
                                           disabled>
                                       Custom Checkbox disabled
                                   </va-radio>
                                   <!-- adminLte 3.1.0-rc
                                   <va-radio
                                           radioClass="custom-control"
                                           id="customRadio4"
                                           name="R2"
                                           name="customRadio2"
                                           color="danger">
                                       Custom Checkbox with custom color
                                   </va-radio>
                                   <va-radio
                                           radioClass="custom-control"
                                           id="customRadio5"
                                           name="customRadio2"
                                           color="danger"
                                           :isOutline="true">
                                       Custom Checkbox with custom color outline
                                   </va-radio>-->
                               </div>
                           </va-row>
                           <va-row>
                               <div class="col-sm-6">
                                   <va-select
                                           selectClass="custom-select"
                                           title="Select"
                                           :list="selectList"
                                           @select="handleSelect($event)">
                                   </va-select>
                               </div>
                               <div class="col-sm-6">
                                   <va-select
                                           selectClass="custom-select"
                                           title="Select Disabled"
                                           :list="selectList"
                                           is-disabled>
                                   </va-select>
                               </div>
                           </va-row>
                           <va-row>
                               <div class="col-sm-6">
                                   <va-select
                                           title="Select Multiple"
                                           selectClass="custom-select"
                                           :list="selectList"
                                           :isMultiple="true"
                                           @select="handleSelect($event)">
                                   </va-select>
                               </div>
                               <div class="col-sm-6">
                                   <va-select
                                           title="Select Multiple Disabled"
                                           selectClass="custom-select"
                                           :list="selectList"
                                           is-multiple is-disabled>
                                   </va-select>
                               </div>
                           </va-row>

                           <va-form-group>
                               <va-switch
                                       id="exampleSwitch1"
                                       text="Toggle this switch element">
                               </va-switch>
                           </va-form-group>

                           <va-form-group>
                               <va-switch
                                       id="exampleSwitch2"
                                       text="Toggle this switch element with Custom Colors danger/success or warning/info"
                                       :colors="{off: 'danger', on: 'success'}">
                               </va-switch>
                           </va-form-group>

                           <va-form-group>
                               <va-switch
                                       id="exampleSwitch3"
                                       text="Disabled switch element"
                                       :isDisabled="true">
                               </va-switch>
                           </va-form-group>

                           <va-form-group>
                               <va-range
                                       id="exampleRange1"
                                       text="Custom range">
                               </va-range>
                           </va-form-group>

                           <va-form-group>
                               <va-range
                                       id="exampleRange2"
                                       text="Custom range (custom-range-danger)"
                                       color="danger">
                               </va-range>
                           </va-form-group>

                           <va-form-group>
                               <va-range
                                       id="exampleRange3"
                                       text="Custom range (custom-range-teal)"
                                       color="teal">
                               </va-range>
                           </va-form-group>
                           <va-input-group>
                               <va-input-file
                                       v-model="demo.file"
                                       id="exampleInputFile2">
                               </va-input-file>
                           </va-input-group>
                       </div>
                   </va-card>
               </va-form>
           </div>
           <!--/.col (right) -->
         </va-row>
         <!-- /.row -->
       </div><!-- /.container-fluid -->
     </div>
     <!-- /.content -->
   </section>
</template>

<script>
    import ContentHeader from '@/layout/components/Content/ContentHeader.vue'
    import MdInput from '@/components/MDinput'

    export default {
        name: "General",
        components: { ContentHeader, MdInput },

        data() {
            return {
                submitted: false,
                displayPass: false,
                demo: {
                    username: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                    email2: '',
                    password2: '',
                    file: {},
                    radio: 1,
                    name: [],
                    checked: true,
                    input: '',
                    input2: '',
                    area: '',
                    area2: '',
                    area3: '',
                    area4: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,\n' +
                    'sed diam nonumy eirmod tempor invidunt ut labore et dolore magna\n' +
                    'aliquyam erat, sed diam voluptua.\n' +
                    'At vero eos et accusam et justo duo dolores et ea rebum.\n' +
                    'Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor\n' +
                    'sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam\n' +
                    'nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,\n' +
                    'sed diam voluptua.At vero eos et accusam et justo duo dolores et ea rebum.\n' +
                    'Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n' +
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam\n' +
                    'nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,\n' +
                    ' sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.\n' +
                    'Stet clita kasd gubergren, no sea takimata sanctus est',
                    select1: '',

                },
                List: [
                    {  link: 'javascript:void(0)', text: 'Action' },
                    {  link: 'javascript:void(0)', text: 'Another action' },
                    {  link: 'javascript:void(0)', text: 'Something else here' },
                    {  isDivider: true },
                    {  router: {name: 'DashboardV1'}, text: 'Separated link' }
                ],
                selectList: [ {
                    value: 'Option1',
                    label: 'Option1'
                }, {
                    value: 'Option2',
                    label: 'Option2 (disabled)',
                    disabled: true
                }, {
                    value: 'Option3',
                    label: 'Option3'
                }, {
                    value: 'Option4',
                    label: 'Option4'
                }, {
                    value: 'Option5',
                    label: 'Option5'
                } ]
            }
        },
        methods: {
            handleSubmit() {
                // :showError="submitted" -> va-input
                this.submitted = true;
            },
            handleSelect(val) {
                this.demo.select1 = val;
            },
            handleFileChange(val) {
                this.demo.file = val
            }
        }
    }
</script>
