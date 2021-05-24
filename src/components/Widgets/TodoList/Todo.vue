<template>
    <li class="todo">
        <!-- drag handle -->
        <div class="view">
           <span class="handle">
                   <i class="fas fa-ellipsis-v"></i>
                   <i class="fas fa-ellipsis-v"></i>
           </span>

           <div  class="icheck-primary d-inline ml-2">
              <input
                     type="checkbox"
                     :id="`todoCheck${todo.id}`"
                     :checked="todo.done"
                     @change="toggleTodo(todo)"
              >
              <label :for="`todoCheck${todo.id}`"></label>
           </div>

           <span class="text" :style="todo.done ? 'text-decoration: line-through; font-weight: normal' : ''" @dblclick="editing = true">
               {{todo.text}}
           </span>
            <!-- 2 option :class="`badge-${createRandomTheme}`" -->
           <small class="badge" :class="`badge-${createTimeTheme}`">
               <i v-if="!todo.done" class="far fa-clock"></i> {{ getTime }}
           </small>
           <!-- General tools such as edit or delete-->
           <div class="tools">
              <i v-show="!editing" class="fas fa-edit" @click="editing = true"></i>
              <i v-show="!editing" class="far fa-trash-alt" @click="deleteTodo( todo )"></i>
           </div>
        </div>
        <div class="view-edit">
           <input class="edit"
               v-show="editing"
               v-focus="editing"
               :value="todo.text"
               @keyup.enter="doneEdit"
               @keyup.esc="cancelEdit"
               @blur="doneEdit"
           >
        </div>
    </li>
</template>

<script>
    import { parseTime } from '@/utils/date-time'
    import { timeAgo } from '@/filters'
    const theme = ['primary','success','warning','danger','info','secondary'];

    export default {
        name: "Todo",
        directives: {
            focus(el, { value }, { context }) {
                if (value) {
                    context.$nextTick(() => {
                        el.focus()
                    })
                }
            }
        },
        props: {
            todo: {
                type: Object,
                default: function() {
                    return {}
                }
            }
        },
        data() {
            return {
                editing: false,
            }
        },
        computed: {
            createRandomTheme() {
                return this.randomElement(theme);
            },
            createTimeTheme() {
                return this.todo.done ? 'success' :  this.themeAgo(this.todo.timestamp);
            },
            getTime() {
                return this.todo.done ? timeAgo(this.todo.timestamp) : parseTime( this.todo.timestamp, '{y}-{m}-{d} {h}:{i}')
            }
        },
        methods: {
            deleteTodo(todo) {
                this.$emit('deleteTodo', todo)
            },
            editTodo({ todo, value }) {
                this.$emit('editTodo', { todo, value })
            },
            toggleTodo(todo) {
                this.$emit('toggleTodo', todo)
            },
            doneEdit(e) {
                const value = e.target.value.trim()
                const { todo } = this
                if (!value) {
                    this.deleteTodo({
                        todo
                    })
                } else if (this.editing) {
                    this.editTodo({
                        todo,
                        value
                    })
                    this.editing = false
                }
            },
            cancelEdit(e) {
                e.target.value = this.todo.text
                this.editing = false
            },
            randomElement (table) {
                return table[Math.floor(Math.random() * table.length)]
            },
            themeAgo(time) {
                const between = Date.now() / 1000 - Number(time);
                if (between < 3600) {
                    return 'info'  // minute
                } else if (between < 86400) {
                    return 'primary'  // hour
                } else if (between < 2592000) {
                    return 'secondary'     // day
                } else if (between < 31536000) {
                    return 'warning'     // month
                } else {
                    return 'danger'   // year
                }
            }
        }
    }
</script>
