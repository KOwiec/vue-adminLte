// Backend API endpoints
const API_BASE_URL = process.env.BASE_API;    //   see: config/dev.env.js AND this.namespace in mirage BACKEND-fake
const FAKER_BASE_URL = '/api';                //   see: config/index.js proxyTable AND views/Api/APIProxy.vue

// ------------------ faker-server ------------
 const FAKER_DOMAIN = 'http://localhost:3000';
//-------------------- dev-server ---------------
 const DEV_DOMAIN = 'http://localhost:8080';
 //--------------- services -------------------
 const ROLE_PREFIX = '/roles';
 const USER_PREFIX = '/users';
 const PRODUCT_PREFIX = '/products';
 const PEOPLE_PREFIX = '/people';
 const TODOS_PREFIX = '/todos';

 export default {
    API_BASE_URL,
    FAKER_BASE_URL,
    FAKER_DOMAIN,
    DEV_DOMAIN,
    ROLE_PREFIX,
    USER_PREFIX,
    PRODUCT_PREFIX,
    PEOPLE_PREFIX,
    TODOS_PREFIX
 }