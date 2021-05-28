/**
 * see more info:
 * https://miragejs.com/quickstarts/overview/
 *
 * Default server for fake data, see: mirage folder
 *
 */
import { makeServer } from './mirage'

makeServer()

// for development mode
//if (process.env.NODE_ENV === "development") {
//    makeServer()
//}


