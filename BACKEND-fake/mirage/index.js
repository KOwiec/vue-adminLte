import { Server, Response } from "miragejs"

// db data
import defaultUsers from './data/defaultUsers'
import todos from './data/todos';

import products from './data/products';
import people from './data/people';
import { roles, routes }  from './data/roles'

// array in local storage for registered users
let users = JSON.parse(localStorage.getItem('users')) || defaultUsers;
// logged user with token
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || [];
// jwt
import { signToken, decodeToken } from '@/utils/auth-jwt'

export function makeServer() {
    return new Server({
        environment: process.env.NODE_ENV,

        seeds(server) {
            server.db.loadData({
                users: users,
                currentUser: currentUser,
                roles: roles,
                routes: routes,
                todos: todos,
                products: products,
                people: people,
            });
        },

        routes() {
            this.namespace = process.env.BASE_API;
            this.timing = 400;

            // Tell Mirage to ignore unhandled requests to these domains
            //this.passthrough();

           //-------------------------------------------- AUTHORIZATION ------------------

            // login user
            this.post("/users/authenticate", ({ db }, request) => {
                let params = JSON.parse(request.requestBody)
                // find if any user matches login credentials
                let filteredUsers = db.users.filter(user => {
                    return user.username === params.username && user.password === params.password;
                });
                if (!filteredUsers.length) return error('Username or password is incorrect', 60704);

                    // if login details are valid return user details and jwt token
                    let user = filteredUsers[0];
                    let activeUser = {
                        user_id: user.id,
                        token: 'mirage-jwt-token'
                    };
                    // save logged user
                    db.currentUser.insert(activeUser);
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(db.currentUser));
                    //let jwt = signToken();
                    let responseJson = { token: 'mirage-jwt-token' };             //jwt.encodedToken

                    // code: 2000 or OK see: /utils/fetch-request
                    return { ok: true,  data: responseJson }

            });

            // register user
            this.post("/users/register", ({ db }, request) => {
                let newUser = JSON.parse(request.requestBody)
                // validation username
                let duplicateUser = db.users.filter(user => { return user.username === newUser.username; }).length;
                if (duplicateUser) return error('Username ' + newUser.username + ' is already taken', 50000);
                // add user role
                newUser.roles = ['user'];
                // save new user
                db.users.insert(newUser);
                // local store users
                localStorage.setItem('users', JSON.stringify(db.users));
                // make info
                let text = 'register success';

                // code: 2000 or OK
                return { ok: true,  data: text };

            });
            
            // logout
            this.post("/users/logout", ({ db }, request) => {
                if (!isLoggedIn(request)) return unauthorised();
                    let params = JSON.parse(request.requestBody);
                    // find if any user matches login credentials
                    let matchedUser = db.currentUser.filter(user => { return user.token === params.token; });
                    let user = matchedUser.length ? matchedUser[0] : null;
                    // delete logged user from db
                    db.currentUser.remove(user.user_id)
                    // remove user from local storage to log user out
                    localStorage.removeItem('currentUser');

                    // make info
                    let text = 'logout success';

                    return { ok: true, data: text };
            });

            // get user by token
            this.get("/users/info/:token", ({ db }, request) => {
                if (!isLoggedIn(request)) return unauthorised();
                    let tokenStr = request.params.token;
                    //check if prams token have role
                    let role = roleWithToken(tokenStr)
                    // get token from str
                    let token = !role ? tokenStr : tokenStr.split('.')[0];
                    //find user by token in currentUser array
                    let matchedUser = db.currentUser.filter(user => { return user.token === token; });
                    let currentUser = matchedUser.length ? matchedUser[0] : null;
                    if (!currentUser) return error('Login failed, unable to get user details.', 50008);
                    //find user by id in users array
                    let matchedUsers = db.users.filter(user => { return user.id === currentUser.user_id; });
                    let user = matchedUsers.length ? matchedUsers[0] : null;
                    if (!user) return error('Not matched User with id' +currentUser.user_id);
                    if (role) user.roles = [role];

                    return { ok: true, data: user };
            });

            // get all users
            this.get("/users", ({ db }, request) => {
                if (!isLoggedIn(request)) return unauthorised();

                    return { ok: true, data: db.users};
            });

            // update user
            this.patch('/users/edit/:id', ({ db }, request) => {
                if (!isLoggedIn(request)) return unauthorised();
                    // find user by id in users array
                    let id = request.params.id;
                    let params = JSON.parse(request.requestBody);
                    // update user in users
                    db.users.update(id, params);
                    // local store users
                    localStorage.setItem('users', JSON.stringify(db.users));
                    //find user by id in users array
                    let matchedUsers = db.users.filter(user => { return user.id === id; });
                    let user = matchedUsers.length ? matchedUsers[0] : null;

                    return { ok: true, data: user };
            });

            // get user by id
            this.get("/users/:id", ({ db }, request) => {
                if (!isLoggedIn(request)) return unauthorised();
                    let id = request.params.id;
                    //find user by id in users array
                    let matchedUsers = db.users.filter(user => { return user.id === id; });
                    let user = matchedUsers.length ? matchedUsers[0] : null;
                    let userArray = [];
                    // add user obj to table see: src/layout/components/RightPanel/RightPanelContent/index.js
                    userArray.push(user);

                    return { ok: true, data: userArray };
            });

            // delete user
            this.delete("/users/:id", ({ db }, request) => {
                if (!isLoggedIn(request)) return unauthorised();
                    // find user by id in db
                    let id = request.params.id;
                    // delete user from db
                    db.users.remove(id);
                    // local store users
                    localStorage.setItem('users', JSON.stringify(db.users));
                    // make info
                    let text = 'delete user success';

                    return { ok: true, data: text };
            });


            //-----------------------------------------------ROLES------------------------

            // get all roles form server
            this.get("/roles", ({ db }, request) => {
                if (!customLoggedIn(request)) return unauthorised();
                    //console.table(db.roles);
                    return { ok: true, data: db.roles};
            });

            // get all routes form server
            this.get("/roles/routes", ({ db }, request) => {
                if (!customLoggedIn(request)) return unauthorised();
                return { ok: true, data: db.routes};
            });

            // add role
            this.post("/roles/create", ({ db }, request) => {
                if (!customLoggedIn(request)) return unauthorised();
                let newRole = JSON.parse(request.requestBody)
                // validation
                let duplicateRole = db.roles.filter(role => { return role.name === newRole.name; }).length;
                if (duplicateRole) return error('Role name ' + newRole.name + ' is already saved');
                // save new user
                newRole.key = randomInteger(300, 5000).toString()
                db.roles.insert(newRole);
                //console.table(db.roles);
                // make info
                let text = 'added new role with success';

                return { ok: true, data: newRole.key };
            });

            // update role
            this.put('/roles/edit/:id', ({ db }, request) => {
                if (!customLoggedIn(request)) return unauthorised();
                let id = request.params.id;
                let params = JSON.parse(request.requestBody);
                db.roles.update(id, params);
                //console.table(db.roles);

                let text = 'update role success';

                return { ok: true, data: text };
            });

            // delete role
            this.delete('/roles/:id', ({ db }, request) => {
                if (!customLoggedIn(request)) return unauthorised();
                let id = request.params.id
                db.roles.remove(id)
                //console.table(db.roles);

                let text = 'delete role success!';

                return { ok: true, data: { message: text, status: 'success'} };
            });

            //------------------------------ axios - utils/request.js ---------------

            this.get("/products", ({ db }, request) => {
                if (!customLoggedIn(request)) return unauthorised();
                   return { ok: true, data: db.products};
            });

            // -----------------------------------simply way -----------------
            this.get("/products/simply", ({ db }) => {
                return db.products;
            });

            this.get("/people", ({ db }) => {
                return db.people;
            });

            this.get("/todos", ({ db }) => {
                return db.todos;
            });

            this.post('/todos', ({ db }, request) => {
                let params = JSON.parse(request.requestBody).data;
                return db.todos.insert(params);
            });

            this.patch('/todos/:id', ({ db }, request) => {
                let id = request.params.id
                let params = JSON.parse(request.requestBody).data;
                return db.todos.update(id, params);
            });

            this.delete('/todos/:id', ({ db }, request) => {
                let id = request.params.id
                return db.todos.remove(id)
            });

        }


    });
}

// private  functions

function error(err, code) {
    // return error with custom code - 60704: incorrect password or username; 50000: duplicate user
    return  { message: err,  code: code }
}
function unauthorised() {
    return  { message: 'Unauthorised!',  code: 50012 }
}

function isLoggedIn(req) {
    // check for fake auth token in header (fetch method)
    return req.requestHeaders &&  req.requestHeaders.authorization  === 'Bearer mirage-jwt-token'
}
function customLoggedIn(req) {
    // check for fake auth token in header (axios)
    return req.requestHeaders &&  req.requestHeaders.Vue_Admin_Token  === 'mirage-jwt-token'
}
function roleWithToken(str) {
    let role = str.split('.')[1];
    return role ? role : null;
}

function randomInteger (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}