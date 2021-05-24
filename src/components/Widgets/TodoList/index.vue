<template>
        <!-- TO DO List -->
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">
                    <i class="ion ion-clipboard mr-1"></i>
                    To Do List
                </h3>
                <div class="icheck-primary d-inline ml-3">
                    <input class="toggle-all"
                           type="checkbox"
                           id="toggle-all"
                           :checked="allChecked"
                           @change="toggleAll({ done: !allChecked })"
                    >
                    <label for="toggle-all"><small>toggle All</small></label>
                </div>

                <div class="card-tools">

                   <span class="todo-count">
                      <strong>{{ remaining }}</strong>
                      {{ remaining | pluralize('item') }} left
                   </span>
                </div>

            </div>
            <!-- /.card-header -->
            <div class="card-body">

                <ul v-show="todos.length" class="todo-list">
                    <todo v-for="(todo, index) in filteredTodos"
                          :key="index"
                          :todo="todo"
                          @toggleTodo="toggleTodo"
                          @editTodo="editTodo"
                          @deleteTodo="deleteTodo"
                    />
                </ul>

                    <div class="new-todo-row" v-show="isNewTodo">
                        <!-- only input
                         <input type="text" ref="newTodo" class="new-todo" placeholder="to DO..." v-model="newTodo" @keyup.enter="addTodo">-->
                         <!-- from adminlte input group-->
                         <div class="input-group input-group-sm">
                            <input type="text" class="form-control new-todo" ref="newTodo" placeholder="to DO..." v-model="newTodo" @keyup.enter="addTodo">
                            <span class="input-group-append">
                                <button type="button" class="btn btn-success btn-flat" @click="addTodo">OK!</button>
                            </span>
                        </div>
                    </div>

            </div>
            <!-- /.card-body -->
            <div class="card-footer clearfix">
                <ul class="filters">
                    <li v-for="(val, key) in filters" :key="key">
                        <a :class="{ selected: visibility === key }" @click.prevent="visibility = key">{{ key | capitalize }}</a>
                    </li>
                </ul>

                <button type="button" :class="isNewTodo ? 'btn btn-warning' : 'btn btn-info' " class="float-right" @click="showNewTodo">
                    <i :class="isNewTodo ? '' : 'fas fa-plus'"></i> {{getBtnTitle}}</button>
            </div>
        </div>
        <!-- /.card -->
    </template>

    <script>
        import Todo from './Todo.vue'
        //for axios
        import config from '@/global'
        import axios from 'axios'

        const baseURL = config.API_BASE_URL + config.TODOS_PREFIX;
        //for local storage
        import { localStorageService } from '@/api/services';
        const STORAGE_KEY = 'todos';
        const storageTodos = localStorageService.checkStorage(STORAGE_KEY);

        const filters = {
            all: todos => todos,
            active: todos => todos.filter(todo => !todo.done),
            completed: todos => todos.filter(todo => todo.done)
        };

        export default {
            name: "TodoList",
            components: { Todo },
            filters: {
                pluralize: (n, w) => n === 1 ? w : w + 's',
                capitalize: s => s.charAt(0).toUpperCase() + s.slice(1)
            },
            props: {
                saveToStorage: {
                    type: Boolean,
                    default: false
                }
            },
            data () {
                return {
                    todos: this.saveToStorage && storageTodos ? storageTodos : [],
                    newTodo: '',
                    isNewTodo: false,
                    visibility: 'all',
                    filters,
                }
            },
            /* for axios */
            created () {
                if (!this.saveToStorage) {
                    try {
                        axios.get(baseURL).then(({ data }) => {
                          this.todos = data;
                        });
                    } catch(error) {
                        console.error(error);
                    }
                }
            },
            computed: {
                getBtnTitle() {
                    return this.isNewTodo ? 'Cancel' : 'Add item'
                },
                filteredTodos() {
                    return filters[this.visibility](this.todos)
                },
                remaining() {
                    return this.todos.filter(todo => !todo.done).length
                },
                allChecked() {
                    return this.todos.every(todo => todo.done)
                },
            },
            methods: {
                setLocalStorage() {
                     this.$store.dispatch('storage/AddStorage', { name: STORAGE_KEY, val: this.todos })
                },
                showNewTodo() {
                    this.isNewTodo = !this.isNewTodo
                    this.newTodo = '';
                    this.$nextTick(() => {
                        this.$refs.newTodo.focus()
                    })
                },
                async addTodo() {
                    if (this.newTodo.trim().length === 0) return;

                    let timestamp = new Date().getTime()      //Math.floor(Date.now() / 1000);

                    // local store
                    if (this.saveToStorage) {

                        if (this.newTodo.trim()) {
                            this.todos.push({
                                id: this.todos.length + 1,
                                text: this.newTodo,
                                timestamp: timestamp,
                                done: false
                            });
                            this.setLocalStorage()
                        }
                        this.newTodo = '';

                    // mirage server
                    } else {
                        let todo = { text: this.newTodo, timestamp: timestamp, done: false};
                        const res = await axios.post(baseURL, { data: todo });

                        this.todos = [...this.todos, res.data];
                        this.newTodo = '';
                    }
                },
                async toggleTodo(val) {
                    if (this.saveToStorage) {
                        val.done = !val.done
                        this.setLocalStorage()
                    } else {
                        val.done = !val.done
                        await axios.patch(baseURL + `/${val.id}`, { data: val });

                    }

                },
                async deleteTodo(val) {
                    if (this.saveToStorage) {
                        this.todos.splice(this.todos.indexOf(val), 1);
                        this.setLocalStorage()
                    } else {
                        await axios.delete(baseURL + `/${val.id}`);
                        this.todos = this.todos.filter(todo => val.id !== todo.id)
                    }

                },
                async editTodo({ todo, value }) {
                    if (this.saveToStorage) {
                        todo.text = value;
                        this.setLocalStorage()
                    } else {
                        todo.text = value;
                        await axios.patch(baseURL + `/${todo.id}`, { data: todo });
                    }

                },
                clearCompleted() {
                    if (this.saveToStorage) {
                        this.todos = this.todos.filter(todo => !todo.done)
                        this.setLocalStorage()
                    } else {
                        this.todos = this.todos.filter(todo => !todo.done)
                    }

                },
                 toggleAll({ done }) {
                    if (this.saveToStorage) {
                        this.todos.forEach(todo => {
                            todo.done = done;
                            this.setLocalStorage()
                        })
                    } else {
                        this.todos.forEach(todo => {
                            todo.done = done;
                        })
                    }

                }
            }
        }
    </script>

<style lang="scss" >
    @import './index.scss';
</style>