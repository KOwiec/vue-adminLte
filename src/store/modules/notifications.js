import Cookies from "js-cookie";

//https://riptutorial.com/vue-js/example/26823/auto-dismissible-notifications
//Notification duration in milliseconds
//const defaultDuration = 8000;

const state = {
    all: []
};

const actions = {
    Added ( { commit }, notification) {

        // custom notification - save state in cookie
        if ( notification.cname ) {
             let cname = notification.cname;
            // save original raw notification object with cookie reference
            commit('ADDED', {
                Raw: { ...notification,
                       show: Cookies.get(cname) ? !!+Cookies.get(cname) : true
                }
            });
        }

        // custom notification that can automatically dismissed
        if ( notification.duration ) {
            let duration = notification.duration;
            // create a timeout to dismiss notification
            var timeOut = setTimeout(function () {
                //On timeout mutate state to dismiss notification
                commit( 'DISMISSED', notification);
            }, duration);

            //Mutate state to add new notification, we create a new object
            //for save original raw notification object and timeout reference (outside the raw object)
            commit( 'ADDED', {
                Raw: notification,
                TimeOut: timeOut
            })
        }
    },

    Dismiss ( { commit }, notification  ) {
        commit('DISMISSED', notification)
    },

    // if we change showLoginInfo to false in settings.js, we simply remove cookie,
    // if we back to showLoginInfo: true, Login alert will be show
    Removed ({ commit }, cname) {
        let cookie = Cookies.get(cname);
        if ( cookie ) {
            Cookies.remove(cname);
        }
    }
};

const mutations = {

    ADDED: ( state, notification ) => {
        state.all.push(notification);
    },

    DISMISSED: ( state, rawNotification ) => {
        var i = state.all.map(n => n.Raw).indexOf(rawNotification);
        if (i === -1) {
            return;
        }
        if (state.all[i].Raw.cname) {
            Cookies.set(state.all[i].Raw.cname, 0, { sameSite: 'strict' });
        }
        // for notification with duration
        if (state.all[i].TimeOut) {
            clearTimeout(state.all[i].TimeOut);
        }

        // remove notification from table
        state.all.splice(i, 1);
    }
};

export default  {
    namespaced: true,
    state,
    actions,
    mutations
};