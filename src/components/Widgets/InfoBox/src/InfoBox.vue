<template>
    <div class="info-box" :class="[`${isGradient}? bg-gradient-${wrapBgColor}: bg-${wrapBgColor}`]">
        <span class="info-box-icon" :class="bgColor"><i :class="bgIcon"></i></span>

        <div class="info-box-content">
            <span class="info-box-text">{{text}}</span>
            <span class="info-box-number">{{parseNumber}}</span>

            <div class="progress" v-if="isProgress">
                <div class="progress-bar" :style="`width: ${percentage}%`"></div>
            </div>
            <span class="progress-description">
                       {{ progressDescription }}
            </span>
        </div>
        <!-- /.info-box-content -->
    </div>
    <!-- /.info-box -->
</template>

<script>
    export default {
        name: "InfoBox",
        props: {
            'wrapBgColor': { type: String },

            'bgColor': { type: String },

            'bgIcon': { type: String },

            'text': { type: String, required: true },

            'number': { type: String, default: 0 },

            'numberType': { type: String },

            'percentage': { type: Number, default: 0 },

            'progressDescription': { type: String,  default: '' },

            'isProgress': { type: Boolean, default: false  },

            'isGradient': { type: Boolean, default: false }
        },
        computed: {
            parseNumber () {
                let result = this.number;
                switch (this.numberType) {
                    case 'percentage':
                        result += '%';
                        break;
                    case 'comma':
                        result = Number(result).toLocaleString('en');
                        break;
                    default:
                        break
                }
                return result
            }
        }
    }
</script>
