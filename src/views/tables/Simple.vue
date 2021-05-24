<template>
   <section class="content">
     <!-- Content Header (Page header) -->
     <content-header title="Simple sortable Tables"/>

     <!-- Main content -->
     <div class="content">
       <div class="container-fluid">
         <div class="row">
           <div class="col-md-6">
               <simple-table
                     title="Bordered Table (with sort all columns)"
                     theme="bordered"
                     :headers="headers"
                     :data="items"
               />
               <simple-table
                     title="Condensed Full Width Table"
                     theme="condensed"
                     prev="&laquo;"
                     next="&raquo;"
                     :isDebug="false"
                     :headers="headers"
                     :data="items3"
               />
           </div>
           <div class="col-md-6">
                 <simple-table
                         title="Simple Full Width Table"
                         :isFooterPagination="false"
                         prev="&laquo;"
                         next="&raquo;"
                         :headers="headers"
                         :data="items3"
                 />
                 <simple-table
                         title="Striped Full Width Table"
                         theme="striped"
                         :isFooterPagination="false"
                         :isDebug="false"
                         :headers="headers"
                         :data="items3"
                 />
           </div>
         </div>
         <div class="row">
           <div class="col-12">
                 <card-table
                         title="Responsive Hover Table with search user"
                         theme="hover"
                         :sorted="true"
                         filteredColumn="user"
                         :headers="headers2"
                         :data="items2">
                 </card-table>
           </div>
         </div>
           <div class="row">
               <div class="col-12">
                   <card-table
                           title="Fixed Header Table"
                           theme="fixed"
                           height="300"
                           :sorted="true"
                           filteredColumn="user"
                           :headers="headers2"
                           :data="items4">
                   </card-table>
               </div>
           </div>
           <br/>
       </div>
     </div>
   </section>
</template>

<script>
    import ContentHeader from '@/layout/components/Content/ContentHeader.vue'
    import CardTable from '@/components/ElementsAdminLte/Table/src/CardTable.vue'
    import SimpleTable from '@/components/ElementsAdminLte/Table/src/SimpleTable.vue'


    export default {
        name: "Simple",
        components: { ContentHeader, CardTable, SimpleTable },
        data () {
            return {
                headers: [
                    {text:'#', value:'id', width: '10px'},
                    {text:'Task', value:'task'},
                    {text:'Progress', value: 'progress'},
                    {text:'Label', value:'label', width: '40px'}
                ],
                headers2: [
                    {text:'ID', value:'id'},
                    {text:'User', value:'user'},
                    {text:'Date', value:'date'},
                    {text:'Status', value:'status'},
                    {text:'Reason', value:'reason'}
                ],
                items: [
                    {
                        id: '1.',
                        task: 'Update software',
                        progress: {
                            value: 55,
                             html: this.getProgress('primary', 'xs', '55')
                        },
                        label: {
                            value: 55,
                             html: this.getLabel('danger', '55')
                        }
                    },
                    {
                        id: '2.',
                        task: 'Clean database',
                        progress: {
                            value: 70,
                             html: this.getProgress('warning', 'xs', '70')
                        },
                        label: {
                            value: 70,
                             html: this.getLabel('warning', '70')
                        }
                    },
                    {
                        id: '3.',
                        task: 'Cron job running',
                        progress: {
                            value: 30,
                            html: this.getProgress('primary', 'xs', '30')
                        },
                        label: {
                            value: 30,
                            html: this.getLabel('primary', '30')
                        }
                    },
                    {
                        id: '4.',
                        task: 'Fix and squish bugs',
                        progress: {
                            value: 90,
                            html: this.getProgress('success', 'xs', '90')
                        },
                        label: {
                            value: 90,
                            html: this.getLabel('success', '90')
                        }
                    },
                ],
                items2: [
                    {
                        id: '183',
                        user: 'John Doe',
                        date: '01-09-2013',
                        status: 'Approved',
                        reason: ' ipsum Bacon dolor sit amet salami venison chicken flank fatback doner.'
                    },
                    {
                        id: '219',
                        user: 'Alexander Pierce',
                        date: '11-01-2015',
                        status: 'Pending',
                        reason: 'amet Bacon ipsum dolor sit salami venison chicken flank fatback doner.'
                    },
                    {
                        id: '657',
                        user: 'Bob Doe',
                        date: '21-08-2014',
                        status: 'Approved',
                        reason: 'chicken Bacon ipsum dolor sit amet salami venison  flank fatback doner.'
                    },
                    {
                        id: '175',
                        user: 'Mike Doe',
                        date: '16-07-2014',
                        status: 'Denied',
                        reason: 'doner Bacon ipsum dolor sit amet salami venison chicken flank fatback .'
                    }
                ],

                items3: this.createFakeData(),

                items4: [
                    {
                        id: '183',
                        user: 'John Doe',
                        date: '01-09-2013',
                        status: 'Approved',
                        reason: ' ipsum Bacon dolor sit amet salami venison chicken flank fatback doner.'
                    },
                    {
                        id: '219',
                        user: 'Alexander Pierce',
                        date: '11-01-2015',
                        status: 'Pending',
                        reason: 'amet Bacon ipsum dolor sit salami venison chicken flank fatback doner.'
                    },
                    {
                        id: '657',
                        user: 'Bob Doe',
                        date: '21-08-2014',
                        status: 'Approved',
                        reason: 'chicken Bacon ipsum dolor sit amet salami venison  flank fatback doner.'
                    },
                    {
                        id: '175',
                        user: 'Mike Doe',
                        date: '16-07-2014',
                        status: 'Denied',
                        reason: 'doner Bacon ipsum dolor sit amet salami venison chicken flank fatback .'
                    },
                    {
                        id: '134',
                        user: 'Jim Doe',
                        date: '11-7-2014',
                        status: 'Approved',
                        reason: 'Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.'
                    },
                    {
                        id: '494',
                        user: 'Victoria Doe',
                        date: '11-7-2014',
                        status: 'Pending',
                        reason: 'Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.'
                    },
                    {
                        id: '832',
                        user: 'Michael Doe',
                        date: '11-7-2014',
                        status: 'Approved',
                        reason: 'acon ipsum dolor sit amet salami venison chicken flank fatback doner.'
                    },
                    {
                        id: '982',
                        user: 'Rocky Doe',
                        date: '11-7-2014',
                        status: 'Denied',
                        reason: 'Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.'
                    },
                ],
            }
        },
        methods: {
            getLabel (theme, value) {
                return `<span class="badge bg-${theme}">${value}%</span>`
            },
            getProgress ( theme, size, value) {
                return `<div class="progress progress-${size}"><div class="progress-bar bg-${theme}" style="width: ${value}%"></div></div>`
            },
            createFakeData() {
                let data = [];

                let task = ['Update software','Clean database','Cron job running','Fix and squish bugs'];
                let theme = ['primary','success','warning','danger'];

                for(let i = 0; i < 23; i++){
                    let id = i+1;
                    let randTheme = this.randomElement (theme);
                    let randNum = 1;
                    randNum = Math.floor(Math.random() * 100);
                    data.push({
                               id: id < 10 ? '0'+ id +'.': id +'.' ,
                               task: this.randomElement (task) ,
                               progress: { html: this.getProgress ( randTheme, 'xs', randNum) },
                               label:  { html: this.getLabel (randTheme, randNum) }

                    });
                }
                return data;
            },
            randomElement (table) {
                return table[Math.floor(Math.random() * table.length)]
            },
            getStatus (theme, value) {
                return `<span class="tag tag-${theme}">${value}</span>`
            },
        }
    }
</script>
