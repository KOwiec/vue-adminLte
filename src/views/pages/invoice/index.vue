<template>
  <div class="wrapper-content" >
    <content-header title="Invoice"/>

  <div class="content">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <va-callout type="info"
                      title="Note!"
                      icon="fa fa-info">
            <div slot="calloutText">
              <div  class="attachment-block">
                <p>This page has been enhanced for printing. Click the print button at the bottom of the invoice to test window.print() function for invoice in Modal.
                  Click the print button at the bottom of the invoice to test create PDF file (html2pdf.js), and we use v-loading directive from
                  <a href="https://element.eleme.io/#/en-US/component/loading" target="_blank" class="text-success">ElementUI</a>.</p>
                <p>Documentation:
                  <a href="https://ekoopmans.github.io/html2pdf.js/" target="_blank" class="text-success">html2pdf.js</a> -AND-
                  <a href="https://rawgit.com/MrRio/jsPDF/master/docs/jsPDF.html" target="_blank" class="text-success">jsPDF</a> -AND-
                  <a href="https://html2canvas.hertzen.com/configuration" target="_blank" class="text-success">html2canvas</a>
                </p>
              </div>

            </div>
          </va-callout>

          <!-- Main content -->
          <div class="invoice p-3 mb-3">
            <!-- title row -->
            <div class="row">
              <div class="col-12">
                <h4>
                  <i class="fa fa-globe"></i> AdminLTE, Inc.
                  <small class="float-right">Date: 2/10/2014</small>
                </h4>
              </div>
              <!-- /.col -->
            </div>
            <!-- info row -->
            <div class="row invoice-info">
              <div class="col-sm-4 invoice-col">
                From
                <address>
                  <strong>Admin, Inc.</strong><br>
                  795 Folsom Ave, Suite 600<br>
                  San Francisco, CA 94107<br>
                  Phone: (804) 123-5432<br>
                  Email: info@almasaeedstudio.com
                </address>
              </div>
              <!-- /.col -->
              <div class="col-sm-4 invoice-col">
                To
                <address>
                  <strong>John Doe</strong><br>
                  795 Folsom Ave, Suite 600<br>
                  San Francisco, CA 94107<br>
                  Phone: (555) 539-1037<br>
                  Email: john.doe@example.com
                </address>
              </div>
              <!-- /.col -->
              <div class="col-sm-4 invoice-col">
                <b>Invoice #007612</b><br>
                <br>
                <b>Order ID:</b> 4F3S8J<br>
                <b>Payment Due:</b> 2/22/2014<br>
                <b>Account:</b> 968-34567
              </div>
              <!-- /.col -->
            </div>
            <!-- /.row -->

            <!-- Table row -->
            <div class="row">
              <div class="col-12 table-responsive">
                <table class="table table-striped">
                  <thead>
                  <tr>
                    <th>Qty</th>
                    <th>Product</th>
                    <th>Serial #</th>
                    <th>Description</th>
                    <th>Subtotal</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>1</td>
                    <td>Call of Duty</td>
                    <td>455-981-221</td>
                    <td>El snort testosterone trophy driving gloves handsome</td>
                    <td>$64.50</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Need for Speed IV</td>
                    <td>247-925-726</td>
                    <td>Wes Anderson umami biodiesel</td>
                    <td>$50.00</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Monsters DVD</td>
                    <td>735-845-642</td>
                    <td>Terry Richardson helvetica tousled street art master</td>
                    <td>$10.70</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Grown Ups Blue Ray</td>
                    <td>422-568-642</td>
                    <td>Tousled lomo letterpress</td>
                    <td>$25.99</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <!-- /.col -->
            </div>
            <!-- /.row -->

            <div class="row">
              <!-- accepted payments column -->
              <div class="col-6">
                <!-- not in invoice -->
                <div>
                  <p class="lead">Payment Methods:</p>
                  <img src="../../../../static/img/credit/visa.png" alt="Visa">
                  <img src="../../../../static/img/credit/mastercard.png" alt="Mastercard">
                  <img src="../../../../static/img/credit/american-express.png" alt="American Express">
                  <img src="../../../../static/img/credit/paypal2.png" alt="Paypal">
                </div>
                <p class="lead">Description:</p>
                <p class="text-muted well well-sm no-shadow" style="margin-top: 10px;">
                  Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles, weebly ning heekya handango imeem
                  plugg
                  dopplr jibjab, movity jajah plickers sifteo edmodo ifttt zimbra.
                </p>
              </div>
              <!-- /.col -->
              <div class="col-6">
                <p class="lead">Amount Due 2/22/2014</p>

                <div class="table-responsive">
                  <table class="table">
                    <tr>
                      <th style="width:50%">Subtotal:</th>
                      <td>$250.30</td>
                    </tr>
                    <tr>
                      <th>Tax (9.3%)</th>
                      <td>$10.34</td>
                    </tr>
                    <tr>
                      <th>Shipping:</th>
                      <td>$5.80</td>
                    </tr>
                    <tr>
                      <th>Total:</th>
                      <td>$265.24</td>
                    </tr>
                  </table>
                </div>
              </div>
              <!-- /.col -->
            </div>
            <!-- /.row -->

            <!-- this row will not appear when printing -->
            <div class="row no-print">
              <div class="col-12">
                <button type="button" class="btn btn-default " @click="handlePrint"
                        data-toggle="modal" data-target="#modal-invoice-print"><i class="fa fa-print"></i> Print
                </button>
                <button type="button" class="btn btn-success float-right" disabled><i class="fa fa-credit-card"></i> Submit
                  Payment
                </button>
                <button type="button" class="btn btn-primary float-right" style="margin-right: 5px;" @click="handlePdf"
                        data-toggle="modal" data-target="#modal-invoice-print">
                      <i class="fa fa-download"></i> Generate PDF
                </button>
              </div>
            </div>
          </div>
          <!-- /.invoice -->
        </div>
        <va-modal id="modal-invoice-print" size="xl" title="Invoice" :confirmText="btnText">
          <invoice-print
                  slot="body"
                  :doPrint="print"
                  :doPdf="pdf"
                  @print-over="print = false"
                  @pdf-over="pdf = false"
          />
        </va-modal>
      </div>
    </div>
  </div>
  <!-- /.content -->
  </div>
</template>

<script>
    import ContentHeader from '@/layout/components/Content/ContentHeader.vue'
    import InvoicePrint from './InvoicePrint'


    export default {
        name: "Invoice",
        components: { ContentHeader, InvoicePrint },
        data () {
            return {
                print: false,
                pdf: false,
                btnText: ''
            }
        },
        methods: {
            handlePrint() {
                this.btnText = 'Print'
                this.$bus.$emit('modal-open', {
                    clickOverlay: () => {
                        this.$message({
                            message: 'Click button to close invoice',
                            type: 'warning'
                        })
                    },
                    confirmBefore: () => {
                        this.print = true
                    },

                })
            },
            handlePdf() {
                this.btnText = 'PDF'
                this.$bus.$emit('modal-open', {
                    clickOverlay: () => {
                        this.$message({
                            message: 'Click button to close invoice',
                            type: 'warning'
                        })
                    },
                    confirmBefore: () => {
                        this.pdf = true
                    },

                })
            },
        },
    }
</script>
