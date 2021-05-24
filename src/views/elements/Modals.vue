<template>
<section class="content">
  <content-header title="Modals & Alerts"/>

  <!-- Main content -->
  <div class="content">
    <div class="callout callout-info">
      <h4>Reminder!</h4>
      <div class="attachment-block">
         Instructions for how to use modals are available on the:
        <a href="http://getbootstrap.com/javascript/#modals" target="_blank" class="text-primary">Bootstrap documentation</a>
      </div>
      <div class="attachment-block">
        Instructions for how to use sweetalerts2 are available on the:
        <a href="https://sweetalert2.github.io" target="_blank" class="text-success">SweetAlert 2 documentation</a>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <!-- ----------------------------------- Modal Examples ----------------------------------->
        <va-card theme="primary" :isOutline="true" title="Modal Examples" icon="fa fa-edit">
          <div slot="content">
            <div class="row">
              <div class="attachment-block">
                <button type="button" class="btn btn-default" data-toggle="modal" data-target="#modal-default">
                  Default Modal
                </button>
                <button type="button" class="btn btn-info" data-toggle="modal" data-target="#modal-form" data-whatever="@recipient">
                  with Data Modal
                </button>
                <button type="button" class="btn btn-outline-primary" data-toggle="modal" data-target="#modal-small">
                  Small Modal
                </button>
                <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#modal-danger">
                   Popover&Tooltip Modal
                </button>
                <button type="button" class="btn btn-default" data-toggle="modal" data-target="#modal-overlay">
                  Launch Modal with Overlay
                </button>
                <button type="button" class="btn btn-success" data-toggle="modal" data-target="#modal-calendar">
                  Calendar Modal
                </button>
              </div>
            </div>
            <div class="row">
              <div class="attachment-block">
                <!--------------------------- Modal component - see src/components/Modals ---------------->
                 <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#modal-vue-component-ex1" @click="openModal">
                     Short Modal Component
                 </button>
                 <button type="button" class="btn btn-success" data-toggle="modal" data-target="#modal-vue-component-ex2" @click="openModalLong">
                     Long Modal Component
                 </button>
              </div>
            </div>
          </div>
        </va-card>
    </div>
  </div>

    <div class="row">
      <div class="col-md-12">
        <!--------------------------------------- SweetAlert2 Examples GLOBAL (main.js)---------------------------->
        <va-card theme="success" :isOutline="true" title="SweetAlert2 Examples" icon="fa fa-edit">
          <div slot="content">
            <div class="row">
              <div class="attachment-block">
                <button type="button" class="btn btn-outline-primary" @click="$Swal.fire('Basic Alert!')">
                  Launch Default Alert
                </button>
                <button type="button" class="btn btn-info" @click="$Swal.fire({
                             title: '<strong>HTML <u>example</u></strong>',
                             type: 'info',
                             html: 'You can use <b>bold text</b>, ' +
                                   '<a href=\'//sweetalert2.github.io/#usage\'>links</a> ' +
                                   'and other HTML tags',
                             showCloseButton: true,
                             showCancelButton: true,
                             focusConfirm: false,
                             confirmButtonText:
                                   '<i class=\'fa fa-thumbs-up\'></i> Great!',
                             confirmButtonAriaLabel: 'Thumbs up, great!',
                             cancelButtonText:
                                   '<i class=\'fa fa-thumbs-down\'></i>',
                             cancelButtonAriaLabel: 'Thumbs down',
                      })">
                  Launch Info Alert
                </button>
                <button type="button" class="btn btn-danger"
                        @click="$Swal.fire({
                  type: 'error',
                  title: 'Oops...',
                  text: 'Something went wrong!',
                  footer: '<a href>Why do I have this issue?</a>'})">
                  Launch Danger Alert
                </button>
                <button type="button" class="btn btn-warning" @click="$Swal.fire({
                        title: 'Are you sure?',
                        text: 'You won\'t be able to revert this!',
                        type: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, delete it!'
                         }).then((result) => {
                            if (result.value) {
                               $Swal.fire('Deleted!', 'Your file has been deleted.', 'success')
                            }
                    })">
                  Launch Warning Alert
                </button>
                <button type="button" class="btn btn-success" @click="$Swal.fire({
                           position: 'top-end',
                           type: 'success',
                           title: 'Your Alert work!',
                           showConfirmButton: false,
                           timer: 1500 })">
                  Launch Success Alert
                </button>
              </div>
            </div>
            <div class="row">
              <div class="attachment-block">
                <!--------------------------- SweetAlerts2 local ---------------->
                <button type="button" class="btn btn-success swalDefaultSuccess">
                  Launch Success Toast
                </button>
                <button type="button" class="btn btn-info swalDefaultInfo">
                  Launch Info Toast
                </button>
                <button type="button" class="btn btn-danger swalDefaultError">
                  Launch Error Toast
                </button>

                <button type="button" class="btn btn-warning swalDefaultWarning">
                  Launch Warning Toast
                </button>
                <button type="button" class="btn btn-outline-primary swalDefaultQuestion">
                  Launch Question Toast
                </button>
              </div>
            </div>
          </div>
        </va-card>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <!--------------------------------------- Toastr Example local ---------------------------------->
        <va-card theme="success" :isOutline="true" title="Toastr Examples " icon="fa fa-edit">
          <div slot="content">
            <button type="button" class="btn btn-success toastrDefaultSuccess">
              Launch Success Toast
            </button>
            <button type="button" class="btn btn-info toastrDefaultInfo">
              Launch Info Toast
            </button>

            <!--------------------------------------- Toastr Example GLOBAL ---------------------------------->
            <button type="button" class="btn btn-danger" @click="$Toaster.error('Lorem ipsum dolor sit amet, consetetur sadipscing elitr.')">
              Launch Error Toast
            </button>
            <button type="button" class="btn btn-warning" @click="$Toaster.warning('Lorem ipsum dolor sit amet, consetetur sadipscing elitr.')">
              Launch Warning Toast
            </button>
          </div>
          <div slot="footer" class="text-muted mt-3">
            For more examples look at <a href="https://codeseven.github.io/toastr/demo.html" target="_blank">toastr demo </a>
          </div>
        </va-card>
      </div>
    </div>


<!-----------------------------------------modal-content --------------------------------------->
    <div class="modal fade" id="modal-default" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>One fine body&hellip;</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
    <!-- /.modal ------------------------------------------------------------------------------>
    <div class="modal fade" id="modal-form" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel2">Info Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="recipient-name" class="col-form-label">Recipient:</label>
                <input type="text" class="form-control" id="recipient-name">
              </div>
              <div class="form-group">
                <label for="message-text" class="col-form-label">Message:</label>
                <textarea class="form-control" id="message-text"></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-info">Save changes</button>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
    <!-- /.modal ------------------------------------------------------------------------------>
    <div class="modal fade" id="modal-small" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>One fine body&hellip;</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-outline-primary">Save changes</button>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
    <!-- /.modal ------------------------------------------------------------------------------>
    <div class="modal fade" id="modal-danger" tabindex="-1" role="dialog" aria-labelledby="ModalTitle" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ModalTitle">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <h5>Popover in a modal</h5>
            <p>This <a href="#" role="button" class="btn btn-secondary popover-test" title="Popover title" data-content="Popover body content is set in this attribute.">button</a> triggers a popover on click.</p>
            <hr>
            <h5>Tooltips in a modal</h5>
            <p><a href="#" class="tooltip-test" title="Tooltip">This link</a> and <a href="#" class="tooltip-test" title="Tooltip">that link</a> have tooltips on hover.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-danger">Save changes</button>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
    <!-- /.modal ------------------------------------------------------------------------------>
    <div class="modal fade" id="modal-overlay">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="overlay d-flex justify-content-center align-items-center">
            <i class="fas fa-2x fa-sync fa-spin"></i>
          </div>
          <div class="modal-header">
            <h4 class="modal-title">Default Modal</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>One fine body&hellip;</p>
          </div>
          <div class="modal-footer justify-content-between">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
    <!-- /.modal ------------------------------------------------------------------------------>
    <div class="modal fade" id="modal-calendar">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Calendar Modal</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <!--The calendar -->
            <div id="calendar"></div>
          </div>
          <div class="modal-footer justify-content-between">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
    <!--------------------------------Modal vue component------------------------------------------------>
    <va-modal id="modal-vue-component-ex1" title="Hello" >
        <p slot="body">One fine body&hellip;</p>
    </va-modal>
    <va-modal id="modal-vue-component-ex2" size="lg" :title="content.name" >
        <div slot="body">{{content.desc}}</div>
    </va-modal>
  </div>
</section>
<!-- /.content -->
</template>

<script>
    import ContentHeader from '@/layout/components/Content/ContentHeader.vue'
    import Swal from 'sweetalert2'
    import toastr from 'admin-lte/plugins/toastr/toastr.min.js'

    export default {
        name: "Modals",
        components: { ContentHeader },
        data () {
            return {
                content: require('@/libs/default/pages/ModalData.js'),
            }
        },
        created () {
            $(function () {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000
                });

                $('.swalDefaultSuccess').click(function() {
                    Toast.fire({
                        type: 'success',
                        title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
                    })
                });
                $('.swalDefaultInfo').click(function() {
                    Toast.fire({
                        type: 'info',
                        title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
                    })
                });
                $('.swalDefaultError').click(function() {
                    Toast.fire({
                        type: 'error',
                        title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
                    })
                });
                $('.swalDefaultWarning').click(function() {
                    Toast.fire({
                        type: 'warning',
                        title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
                    })
                });
                $('.swalDefaultQuestion').click(function() {
                    Toast.fire({
                        type: 'question',
                        title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
                    })
                });

                // --------- Toastr -------------------------

                $('.toastrDefaultSuccess').click(function() {
                    toastr.success('Lorem ipsum dolor sit amet, consetetur sadipscing elitr.')
                });
                $('.toastrDefaultInfo').click(function() {
                    toastr.info('Lorem ipsum dolor sit amet, consetetur sadipscing elitr.')
                });

            })
        },
        mounted () {
            $(function () {
                $('.popover-test').popover();
                $('.tooltip-test').tooltip();

                $('#modal-form').on('show.bs.modal', function (event) {
                    var button = $(event.relatedTarget);  // Button that triggered the modal
                    var recipient = button.data('whatever');  // Extract info from data-* attributes
                    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
                    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
                    var modal = $(this);
                    modal.find('.modal-title').text('New message to ' + recipient);
                    modal.find('.modal-body input').val(recipient)
                })

                // The Calender tempusdominus-bootstrap-4
                $('#calendar').datetimepicker({
                    inline: true,
                    sideBySide: true
                })
            });

        },
        methods: {
            openModal () {
                this.$bus.$emit('modal-open', {
                    confirmBefore: () => {},
                    confirmAfter: () => {},
                    cancelBefore: () => {},
                    cancelAfter: () => {},
                    clickOverlay: () => {},
                })
            },
            openModalLong () {
                this.$bus.$emit('modal-open', {
                    confirmBefore: () => {
                        window.alert('confirm Before')
                    },
                    confirmAfter: () => {
                        this.$Swal.fire('confirm After')
                    },
                    cancelBefore: () => {
                        window.alert('cancel Before')
                    },
                    cancelAfter: () => {
                        this.$Swal.fire('cancel After')
                    },
                    clickOverlay: () => {
                        window.alert('click Overlay')
                    }
                })
            },
        }
    }
</script>

<style scoped>

</style>