<template>
    <!-- we are adding the .class so bootstrap.js collapse plugin detects it -->
    <div id="accordion">
        <div class="card" :class="`card-${item.type}`"
             v-for="(item, index) in list" :data="item" :key="index">
            <div class="card-header">
                <h4 class="card-title w-100">
                    <a class="d-block w-100" data-toggle="collapse" :href="`#${item.id}`">
                        {{item.title}}
                    </a>
                </h4>
            </div>
            <div :id="item.id" class="collapse" :class="index === 0 ?'show':''" data-parent="#accordion">
                <div class="card-body">
                    {{item.content}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "VaAccordion",
        props: {
            list: {
                type: Array,
                default: []
            }
        }
    }
</script>

