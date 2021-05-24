<template>
  <section class="content">
    <!-- Content Header (Page header) -->
    <content-header title="Data Tables"
                    subTitle="(bootstrap 4)"/>

    <!-- Main content -->
    <div class="content">
      <div class="row">
        <div class="col-12">

          <va-card title="Hover Data Table">
            <div slot="content" >
              <va-table
                      id="example1"
                      :isBorder= "true"
                      :isHover= "true"
                      :headers="headers"
                      :data="items">
              </va-table>
            </div>
          </va-card>

          <va-card title="Data Table With Full Features">
            <div slot="content">
              <va-table
                      id="example2"
                      :isBorder= true
                      :isStriped= true
                      :headers="headers"
                      :data="items">
              </va-table>
            </div>
          </va-card>

          <va-card title="Data Table max simple">
            <div slot="content">
              <va-table
                      id="example3"
                      :isHeader="false"
                      :headers="headers"
                      :data="items2">
              </va-table>
            </div>
          </va-card>
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.content -->
  </section>
</template>

<script>
    import ContentHeader from '@/layout/components/Content/ContentHeader.vue'

    export default {
        name: "Data",
        components: { ContentHeader },
        created () {
            $(function () {
                $("#example1").DataTable({
                    "paging": true,
                    "lengthChange": false,
                    "searching": false,
                    "ordering": true,
                    "info": true,
                    "autoWidth": false
                });

                $("#example2").DataTable();
            });
        },
        data () {
            return {
                headers: [
                    {text:'Rendering engine', value:'engine'},
                    {text:'Browser', value:'browser'},
                    {text:'Platform(s)', value:'platform'},
                    {text:'Engine version', value:'version'},
                    {text:'CSS grade', value:'css'}
                ],
                items: this.createFakeData(),
                items2: this.partFakeData()
            }
        },
        methods: {
            createFakeData() {
                let data = [];
                let engine = ['Gecko', 'Misc', 'Presto', 'Trident', 'Webkit'];
                let browser = ['Firefox 1.0','Firefox 1.5','Firefox 2.0','Firefox 3.0','Netscape 7.2','Netscape Browser 8','Netscape Navigator 9',
                               'Mozilla 1.0','Opera 7.0','Nokia N800','Windows Mobile 6','Windows Mobile 6'];
                let platform = ['Win 98+ / OSX.2+','OSX.3+','Win 98SE+','Gnome','KDE 3.5','-','Mac OS 8-X','iPod','OSX.4+','S60','Win XP'];
                let version = ['1', '1.7', '1.8', '1.9', '-', '5.5', '125.5', '413', '6'];
                let css = ['A','C','Z','X'];

                for(let i = 0; i < 50; i++){
                    data.push({engine: this.randomElement (engine) ,
                               browser: this.randomElement (browser) ,
                               platform: this.randomElement (platform),
                               version: this.randomElement (version),
                               css: css[Math.floor(Math.random() * css.length)]
                    });
                }
                return data;
            },
            randomElement (table) {
                return table[Math.floor(Math.random() * table.length)]
            },
            partFakeData() {
                let data = this.createFakeData();
                let part_length = Math.ceil(data.length / 3);
                return data.splice(0, part_length);
            }
        }
    }
</script>

<style scoped>

</style>