<template>
   <section class="content">
     <!-- Content Header (Page header) -->
     <content-header title="Advanced Form"/>

  <!-- Main content -->
  <div class="content">
    <div class="container-fluid">
     <advance-form>
      <!-- SELECT2 EXAMPLE -->
      <va-card theme="primary" :isOutline="true" title="Select2 (Default Theme)">
        <div slot="content">
          <va-form>
            <div class="row">
              <div class="col-md-6">
                  <va-form-group>
                     <label>Minimal: {{ textSelected }} selected</label>
                     <va-select-2
                          id="optionSelected1"
                          v-model="optionSelected"
                          :options="myOptions1"
                          styled="width: 100%;"
                          @change="myChangeEvent($event)"
                          @select="mySelectEvent($event)">
                    <option disabled value="0">Select one</option>
                  </va-select-2>
                  </va-form-group>

                  <va-form-group>
                    <label>Disabled</label>
                    <va-select-2
                            id="optionSelected2"
                            v-model="optionSelected"
                            :isDisabled= "true"
                            :options="myOptions1"
                            :settings="{ width: '100%' }">
                    </va-select-2>
                  </va-form-group>
              </div>

              <div class="col-sm-6">
                  <va-form-group>
                    <label>Multiple: {{optionsSelected}}</label>
                    <va-select-2
                            id="optionSelected3"
                            v-model="optionsSelected"
                            :options="myOptions1"
                            placeholder="Select a State"
                            :isMultiple="true"
                            :settings="{ width: '100%', multiple: true }"
                            @change="myChangeEvent($event)"
                            @select="mySelectEvent($event)">
                    </va-select-2>
                  </va-form-group>

                  <va-form-group>
                    <label>Disabled Result</label>
                    <va-select-2
                            id="optionSelected4"
                            :options="myOptions2"
                            placeholder="Select a State"
                            :settings="{ width: '100%' }">
                    </va-select-2>
                  </va-form-group>
              </div>

            </div>
            <h5>Custom Color Variants</h5>
            <div class="row">
              <div class="col-12 col-sm-6">
                <va-form-group>
                  <label>Minimal (.select2-danger)</label>
                  <va-select-2
                          id="optionSelected5"
                          v-model="selectedRestDay"
                          :options="days"
                          theme="danger"
                          styled="width: 100%;">
                  </va-select-2><br/>
                  <p>Rest day is: {{selectedRestDay}}</p>
                </va-form-group>
              </div>

              <div class="col-12 col-sm-6">
                <va-form-group>
                  <label>Minimal (.select2-purple)</label>
                  <va-select-2
                          id="optionSelected6"
                          v-model="selectedWorkDays"
                          :options="workDaysOptions"
                          theme="purple"
                          :isMultiple="true"
                          :settings="{ width: '100%', multiple: true }">
                  </va-select-2><br/>
                  <p> Work days are: {{workDaysOptions}} </p>
                </va-form-group>
              </div>
              <!-- /.col -->
            </div>
          </va-form>
        </div>
        <div slot="footer">
          Visit <a href="https://select2.github.io/">Select2 documentation</a> for more examples and information about
          the plugin.
        </div>
      </va-card>

      <va-card theme="primary" :isOutline="true" title="Select2 (Bootstrap4 Theme)">
        <div slot="content">
          <va-form>
            <div class="row">
              <div class="col-md-6">
                  <va-form-group>
                    <label>Minimal: {{ textSelected }} selected</label>
                    <va-select-2
                            id="optionBootstrap1"
                            v-model="optionSelected"
                            :options="myOptions1"
                            :isBootstrap="true"
                            :settings="{ width: '100%' }">
                      <option disabled value="0">Select one</option>
                    </va-select-2>
                  </va-form-group>

                  <va-form-group>
                    <label>Disabled</label>
                    <va-select-2
                            id="optionBootstrap2"
                            v-model="optionSelected"
                            :isDisabled= "true"
                            :options="myOptions1"
                            :isBootstrap="true"
                            :settings="{ width: '100%' }">
                    </va-select-2>
                  </va-form-group>
              </div>

              <div class="col-sm-6">

                  <va-form-group>
                    <label>Multiple: {{optionsSelected}}</label>
                    <va-select-2
                            id="optionBootstrap3"
                            v-model="optionsSelected"
                            :options="myOptions1"
                            :isBootstrap="true"
                            placeholder="Select a State"
                            :isMultiple="true"
                            :settings="{ width: '100%', multiple: true, theme: 'bootstrap4' }">
                    </va-select-2>
                  </va-form-group>

                  <va-form-group>
                    <label>Disabled Result</label>
                    <va-select-2
                            id="optionBootstrap4"
                            :options="myOptions2"
                            :isBootstrap="true"
                            placeholder="Select a State"
                            :settings="{ width: '100%' }">
                    </va-select-2>
                  </va-form-group>

              </div>
            </div>
          </va-form>
        </div>
        <div slot="footer">
          Visit <a href="https://select2.github.io/">Select2 documentation</a> for more examples and information about
          the plugin.
        </div>
      </va-card>

      <va-card theme="primary" :isOutline="true" title="Bootstrap Duallistbox">
        <div slot="content">
            <div class="row">
              <div class="col-12">
                <va-form>
                  <va-form-group>
                    <label>Multiple</label>
                    <duallistbox
                            id="Duallistbox"
                            v-model="optionsSelected"
                            :options="duallistOpts"
                            :isBootstrap="true"
                            placeholder="Select a State"
                            :isMultiple="true"
                            :settings="{ width: '100%', multiple: true}">
                    </duallistbox>
                  </va-form-group>
                </va-form>
              </div>
            </div>
        </div>
        <div slot="footer">
          Visit <a href="https://github.com/istvan-ujjmeszaros/bootstrap-duallistbox#readme">Bootstrap Duallistbox</a> for more examples and information about
          the plugin.
        </div>
      </va-card>

      <div class="row">
        <div class="col-md-6">
          <va-card theme="danger" title="Input masks">
            <div slot="content">
              <va-form>
                <!-- Date dd/mm/yyyy -->
                <va-form-group>
                  <label>Date masks:</label>
                  <va-input-group groupType="input">
                    <va-input :mask="dateMask"
                              name="dateMask"
                    />
                    <i slot="slotPrefixAddonText" class="far fa-calendar-alt"></i>
                  </va-input-group>
                </va-form-group>
                <!-- /.form group -->

                <!-- Date mm/dd/yyyy -->
                <va-form-group>
                  <va-input-group groupType="input">
                    <va-input :mask="dateMask2"
                              name="dateMask2"
                    />
                    <i slot="slotPrefixAddonText" class="far fa-calendar-alt"></i>
                  </va-input-group>
                </va-form-group>
                <!-- /.form group -->

                <!-- phone mask -->
                <va-form-group>
                  <label>US phone mask:</label>
                  <va-input-group groupType="input">
                    <va-input mask="(999) 999-9999"
                              name="datePhone"
                    />
                    <i slot="slotPrefixAddonText" class="fa fa-phone"></i>
                  </va-input-group>
                </va-form-group>

                <!-- phone mask -->
                <va-form-group>
                  <label>Intl US phone mask:</label>
                  <va-input-group groupType="input">
                    <va-input mask="999-999-9999 [x99999]"
                              name="datePhone2"
                    />
                    <i slot="slotPrefixAddonText" class="fa fa-phone"></i>
                  </va-input-group>
                </va-form-group>

                <!-- IP mask -->
                <va-form-group>
                  <label>IP mask:</label>
                  <va-input-group groupType="input">
                    <va-input mask="ip"
                              name="dateIp"
                    />
                    <i slot="slotPrefixAddonText" class="fa fa-laptop"></i>
                  </va-input-group>
                </va-form-group>

                <!-- Email mask -->
                <va-form-group>
                  <label>IP mask:</label>
                  <va-input-group groupType="input">
                    <va-input mask="email"
                              name="dateEmail"
                    />
                    <i slot="slotPrefixAddonText" class="fa fa-at"></i>
                  </va-input-group>
                </va-form-group>
              </va-form>
            </div>
            <span slot="footer"> Many more info available. <a href="https://github.com/RobinHerbots/Inputmask" target="_blank">Documentation</a></span>
          </va-card>

          <va-card theme="info" title="Color & Time Picker">
            <div slot="content">
              <va-form>
                <!-- Color Picker component vue see: components/jQuery/ColorPicker.vue-->
                <va-form-group>
                  <label>Color picker Vue-jQuery component:</label>
                  <color-picker></color-picker>
                </va-form-group>
                <!-- Color Picker see: components/jQuery/pages/advanceForm.vue, too check in input: value="09979c" -->
                <va-form-group>
                  <label>Color picker with addon:</label>
                  <div class="input-group " id="my-colorpicker2" style="width: 50%;">
                    <input type="text" class="form-control" >
                    <div class="input-group-append">
                      <span class="input-group-text"><i class="fas fa-square" id="square"></i></span>
                    </div>
                  </div>
                </va-form-group>

                <va-form-group>
                  <!-- time Picker component vue-->
                  <div class="bootstrap-timepicker">
                    <label>Time picker Vue-jQuery component:</label>
                    <va-input-group styled="width: 50%;">
                      <time-picker></time-picker>
                    </va-input-group>
                  </div>
                </va-form-group>

                <va-form-group>
                  <div class="bootstrap-timepicker">

                    <label>Time picker:</label>
                    <div class="input-group date" id="timepicker" data-target-input="nearest" style="width: 50%;">
                      <input type="text" class="form-control datetimepicker-input" data-target="#timepicker"/>
                      <div class="input-group-append" data-target="#timepicker" data-toggle="datetimepicker">
                        <div class="input-group-text"><i class="far fa-clock"></i></div>
                      </div>
                    </div>
                    <!-- /.input group -->

                  </div>
                </va-form-group>
                <!-- ./time Picker -->
              </va-form>
            </div>

            <span slot="footer"> Many more info available. <a href="https://itsjavi.com/bootstrap-colorpicker/" target="_blank">Colorpicker</a>
             &  <a href="https://github.com/eternicode/bootstrap-datepicker/" target="_blank">Datetimepicker</a>
            </span>
          </va-card>

          <va-card theme="success" title="Min / Max items checked">
            <div slot="content">
              <label>
                Min checked: 1, Max: 2
              </label>
              <va-check-box-group v-model="checkedStates" :min="1" :max="2">
                 <va-check-box v-for="state in australianStates" :data="state" :key="state" :id="state" checkClass="icheck-primary" inline/>
              </va-check-box-group>
            </div>
          </va-card>
        </div>
        <!-- /.col (left) -->
        <div class="col-md-6">
          <va-card theme="primary" title="Date picker" >
            <div slot="content">
              <va-form>
                <!-- Date range -->
                <va-form-group>
                  <label>Date range:</label>
                  <va-input-group
                          groupType="input"
                          id="reservation">
                    <va-input id="reservation"/>
                    <i slot="slotPrefixAddonText" class="far fa-calendar-alt"></i>
                  </va-input-group>
                </va-form-group>

                <!-- Date and time range -->
                <va-form-group>
                  <label>Date and time range:</label>
                  <va-input-group
                          groupType="input"
                          id="reservationtime">
                    <va-input id="reservationtime"/>
                    <i slot="slotPrefixAddonText" class="far fa-clock"></i>
                  </va-input-group>
                </va-form-group>

                <!-- Date range with btn -->
                <va-form-group>
                  <label>Date range button:</label>
                  <va-input-group
                          groupType="input"
                          styled="width: 50%; text-align: center"
                          id="daterange-input">
                    <va-input id="daterange-input" />
                    <va-button slot="slotPrefixButton"
                               icon="far fa-calendar-alt"
                               name="Date range picker"
                               id="daterange-btn"
                               class="dropdown-toggle"
                               data-toggle="dropdown">
                    </va-button>
                  </va-input-group>
                </va-form-group>

                <!-- Date range -->
                <va-form-group>
                  <label>Predefinied Date ranges:</label>
                  <div id="reportrange" style="background: #f9ebaa; cursor: pointer; padding: 5px 10px; border: 1px solid #cc7d7f; width: 35%">
                    <i class="far fa-calendar-alt"></i>&nbsp;
                    <span></span> <i class="fa fa-caret-down"></i>
                  </div>
                </va-form-group>
              </va-form>
            </div>
            <span slot="footer"> Many more info available. <a href="http://daterangepicker.com" target="_blank">Documentation</a></span>
          </va-card>

          <!-- iCheck -->
          <va-card theme="success" title="iCheck Bootstrap - Checkbox &amp; Radio Inputs">
            <div slot="content">
              <!-- checkbox -->
              <va-form>
                <va-check-box-group v-model="days" inline>
                  <va-check-box
                          checkClass="icheck-primary"
                          id="Check1"
                          name="Ch1"
                          data="Monday">
                  </va-check-box>
                  <va-check-box
                          checkClass="icheck-primary"
                          id="Check2"
                          name="Ch1"
                          data="Sunday">
                  </va-check-box>
                  <va-check-box
                          checkClass="icheck-primary"
                          id="Check3"
                          name="Ch1"
                          data="Tuesday">
                  </va-check-box>
                  <va-check-box
                          checkClass="icheck-primary"
                          id="Check10"
                          name="Ch1"
                          data="Saturday">
                  </va-check-box>
                </va-check-box-group>
                <label>
                  CheckBox group inline:
                </label>
                {{days}}
                <hr/>
                <!-- radio group -->
                <va-radio-group v-model="howAreYouFeeling" inline>
                  <va-radio
                          radioClass="icheck-primary"
                          id="r7"
                          name="R1"
                          data="great">
                  </va-radio>
                  <va-radio
                          radioClass="icheck-primary"
                          id="r8"
                          name="R1"
                          data="wonderful">
                  </va-radio>
                  <va-radio
                          radioClass="icheck-primary"
                          id="r9"
                          name="R1"
                          data="fantastic">
                  </va-radio>
                  <va-radio
                          radioClass="icheck-primary"
                          :styled="'color:red;'"
                          id="r10"
                          name="R1"
                          data="bad"
                          :disabled="true">
                  </va-radio>
                  <label style="padding-left: 10px;">
                    Radio group inline : {{howAreYouFeeling}}
                  </label>
                </va-radio-group>
                <hr/>
                <va-form-group>
                  <va-check-box
                          checkClass="icheck-danger"
                          :inline="true"
                          id="Check4"
                          :value="true">
                  </va-check-box>
                  <va-check-box
                          checkClass="icheck-danger"
                          :inline="true"
                          id="Check5">
                  </va-check-box>
                  <va-check-box
                          checkClass="icheck-danger"
                          :inline="true"
                          id="Check6"
                          :disabled="true">
                  </va-check-box>
                  <label>
                    Danger checkbox
                  </label>
                </va-form-group>
                 <hr/>
                <va-radio-group v-model="textSelected" inline>
                  <va-radio
                          radioClass="icheck-danger"
                          id="r4"
                          data="Alabama"
                          name="R2" >
                  </va-radio>
                  <va-radio
                          radioClass="icheck-danger"
                          id="r5"
                          data="California"
                          name="R2">
                  </va-radio>
                  <va-radio
                          radioClass="icheck-danger"
                          id="r6"
                          name="R2"
                          data="Alaska"
                          disabled>
                  </va-radio>
                </va-radio-group>
                <hr/>
                <va-form-group>
                <!-- checkbox group -->
                  <va-check-box-group v-model="days" disabled inline>
                    <va-check-box
                            checkClass="icheck-success"
                            id="Check7"
                            data="Monday">
                    </va-check-box>
                    <va-check-box
                            checkClass="icheck-success"
                            id="Check8"
                            data="Tuesday">
                    </va-check-box>
                    <va-check-box
                            checkClass="icheck-success"
                            id="Check9"
                            data="">
                    </va-check-box>
                  </va-check-box-group>
                  <label>
                      Success checkbox group disabled & inline
                  </label>
                </va-form-group>
                <hr/>
                <va-form-group>
                  <!-- radio group -->
                  <va-radio-group v-model="textSelected" disabled>
                    <va-radio
                            radioClass="icheck-success"
                            id="r1"
                            name="R3"
                            data="Alaska">
                    </va-radio>
                    <va-radio
                            radioClass="icheck-success"
                            id="r2"
                            name="R3"
                            data="California">
                    </va-radio>
                    <va-radio
                            radioClass="icheck-success"
                            id="r3"
                            name="R3"
                            data="Alabama">
                    </va-radio>
                  </va-radio-group>
                  <label>
                    Success radio group disabled
                  </label>
                </va-form-group>
              </va-form>
            </div>
            <span slot="footer">Many more skins available. <a href="http://fronteed.com/iCheck/" target="_blank">Documentation</a></span>
          </va-card>

          <va-card theme="info" title="Check all">
            <div slot="content">
              <va-check-box checkClass="icheck-primary" id="checkAll" v-model="checkAll" @change="handleCheckAllChange">
                Check all
              </va-check-box>
              <div style="margin: 15px 0;"></div>
              <label>
                Rest days in the week:
              </label>
              <va-check-box-group v-model="restDays" @change="handleCheckedDaysChange">
                <va-check-box v-for="day in weekDays" :data="day" :key="day" :id="day" checkClass="icheck-success" inline/>
              </va-check-box-group>
            </div>
          </va-card>

        </div>
        <!-- /.col (right) -->
      </div>
      <!-- /.row -->
     </advance-form>
    </div><!-- /.container-fluid -->
  </div>
  <!-- /.content -->
 </section>
</template>
<!-- date-range-picker -->

<script>
    import ContentHeader from '@/layout/components/Content/ContentHeader.vue'
    import TimePicker from '@/components/jQuery/TimePicker.vue'
    import ColorPicker from '@/components/jQuery/ColorPicker.vue'
    import Duallistbox from '@/components/ElementsAdminLte/Select/src/Duallistbox.vue'
    import advanceForm from '@/components/jQuery/pages/advanceForm.vue'


    // https://lodash.com/docs/4.17.15#pull (we use full build from src/config/index.js)
    //import _ from 'lodash';

    const USA_STATES = [
            {id: 1, text: 'Alabama' },
            {id: 2, text: 'Alaska'},
            {id: 3, text: 'California'},
            {id: 4, text: 'Delaware'},
            {id: 5, text: 'Tennessee'},
            {id: 6, text: 'Texas'},
            {id: 7, text: 'Washington'}
            ];
    const AUSTRALIA_STATES = [
            {id: 1, text: 'New South Wales' },
            {id: 2, text: 'Queensland'},
            {id: 3, text: 'South Australia (disabled)', disabled: true},
            {id: 4, text: 'Tasmania'},
            {id: 5, text: 'Victoria'},
            {id: 6, text: 'Western Australia'},
            ];

    const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    export default {
        name: "Advance",
        components: { ContentHeader, advanceForm, TimePicker, ColorPicker, Duallistbox },

        data() {
            return {
                optionSelected: 1,
                textSelected: 'Alabama',
                optionsSelected: null,
                myOptions1: USA_STATES,
                myOptions2: AUSTRALIA_STATES,
                days: DAYS,
                workDays: [],
                selectedRestDay: 'Sunday',
                selectedWorkDays: [],
                dupOptions1: [],
                dateMask: { alias: "datetime", inputFormat: "dd/mm/yyyy" },
                dateMask2: { alias: "datetime", inputFormat: 'mm/dd/yyyy' },
                // radio group
                howAreYouFeeling: "great",
                // min/max checked
                australianStates: ['New South Wales','Queensland','South Australia','Tasmania','Victoria','Western Australia' ],
                checkedStates: ['Tasmania', 'Victoria'],
                // all checked
                restDays: ['Sunday', 'Saturday'],
                checkAll: false,
                weekDays: DAYS,
            }
        },
        created() {
            this.getWorkDays();
        },
        computed: {
            workDaysOptions() {
                return this.days.filter( d => (d !== this.selectedRestDay) )
            },
            duallistOpts() {
                return Object.assign(this.dupOptions1, this.myOptions1);
            }
        },
        methods: {
            myChangeEvent(val){
                console.log(val);
            },
            mySelectEvent({id, text, selected}){
                this.textSelected = text
                this.$Swal.fire(`id: ${id}, text: ${text}, selected: ${selected}`);
                //console.log({id, text, selected})
            },
            getWorkDays() {
                var arr = Object.assign(this.workDays, this.days);
                this.workDays = _.pull(arr, this.selectedRestDay)
            },
            handleCheckAllChange(val) {
                this.restDays = val ? this.weekDays : [];
            },
            handleCheckedDaysChange(val) {
                let checkedCount = val.length;
                this.checkAll = checkedCount === this.weekDays.length;
            }
        }
    }
</script>
