<template>
  <!-- Modal -->
  <div class="modal fade"
       :id="id"
       tabindex="-1"
       role="dialog"
       aria-labelledby="bsModalLabel"
       aria-hidden="true"
       data-toggle="modal"
       data-backdrop="static"
       data-keyboard="false"
       ref="bsModal"
       @click="clickOverlay">
    <div class="modal-dialog"
         :class="getSize"
         role="document"
         @click.stop="wrapperClick">
      <div class="modal-content">
        <div class="modal-header">
          <slot name="header">
              <h4 class="modal-title" id="bsModalLabel">{{title}}</h4>
          </slot>
          <button v-if="showClose" type="button" class="close" data-dismiss="modal" @click="cancel" aria-label="Close">
              <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
           <slot name="body"></slot>
        </div>
        <div v-if="isFooter" class="modal-footer">
           <slot name="footer">
              <button type="button" :class="`btn btn-${cancelColor}`" data-dismiss="modal" @click="cancel">{{cancelText}}</button>
              <button type="button" :class="`btn btn-${confirmColor}`" @click="confirm">{{confirmText}}</button>
           </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    name: 'vaModal',
    props: {
        id: { type: String, default: 'bsModal' },

        title: { type: String, default: '' },

        size: { type: String, default: 'sm' },    // options: sm, lg, xl

        confirmText: { type: String, default: 'Confirm' },

        cancelText : { type: String, default: 'Cancel' },

        cancelColor : { type: String, default: 'default' },

        confirmColor : { type: String, default: 'primary' },

        showClose: { type: Boolean, default: true },

        isFooter: { type: Boolean, default: true },

        closeOnClickModal: { type: Boolean, default: false },
    },
    data () {
         return {
             confirmBeforeHook: () => {},
             confirmAfterHook: () => {},
             cancelBeforeHook: () => {},
             cancelAfterHook: () => {},
             clickOverlayHook: () => {}
         }
    },
    computed: {
           getSize() {
               return `modal-${this.size}`
           },
           getId() {
               return '#' +this.id
           }
    },
    methods: {
        confirm () {
           this.confirmBeforeHook();
           $(this.getId).modal('hide');
           this.cancelAfterHook = () => {}
        },
        cancel () {
            this.cancelBeforeHook();
            $(this.getId).modal('hide');
            this.confirmAfterHook = () => {}
        },

        clickOverlay () {
            this.clickOverlayHook()
        },
        resetProperties() {
            this.confirmBeforeHook = () => {};
            this.confirmAfterHook = () => {};
            this.cancelBeforeHook = () => {};
            this.cancelAfterHook = () => {}
        },
        wrapperClick() {
            if (!this.closeOnClickModal) return;
            this.cancel();
        },
    },
    mounted () {
        this.$bus.$on('modal-open', (args) => {
            if(args.confirmBefore !== undefined ) {
                this.confirmBeforeHook = args.confirmBefore;
            }
            if(args.confirmAfter !== undefined) {
                this.confirmAfterHook = args.confirmAfter;
            }
            if(args.cancelBefore !== undefined) {
                this.cancelBeforeHook = args.cancelBefore;
            }
            if(args.cancelAfter !== undefined) {
                this.cancelAfterHook = args.cancelAfter;
            }
            if(args.clickOverlay !== undefined) {
                this.clickOverlayHook = args.clickOverlay;
            }
        });

        $(this.getId).on('shown.bs.modal', (e) => {
            this.$emit('modal-opened');
        });

        $(this.getId).on('hidden.bs.modal', (e) => {
            this.confirmAfterHook();
            this.cancelAfterHook();
            this.resetProperties();
            this.$emit('modal-closed');
        });
        $(this.getId).on('overlay.bs.modal', (e) => {
            this.clickOverlayHook()
        });

        $(function () {
            $('.popover-text').popover();
            $('.tooltip-text').tooltip();
        });
    },

}
</script>


