import { localStorageService } from '@/api/services';

const state = {
     main: ["Colors", "Components", "Custom"],
     all: []
};

const actions = {
    AddStorage ( { commit }, storage ) {
        localStorageService.saveToStorage( storage.name, storage.val );
         //commit('ADDED', { name: storage.name });
    },

    RemoveStorage ( { commit }, name ) {
        if( localStorageService.isStorageExist( name ) ) {
            localStorageService.removeFromStorage( name );
           // commit('REMOVED', name);
        }
    },

    RetrieveSeetingsStorage ( { dispatch }, name ) {
        if( localStorageService.isStorageExist( name )  ) {
            let stored = localStorageService.checkStorage(name);
            for (var i in stored) {
                if (stored.hasOwnProperty(i)) {
                    dispatch('settings/changeSetting', { key: i, value: stored[i] }, { root: true });
                }
            }
        }
    },

    RetrieveColorsStorage ( { dispatch }, name ) {
        if( localStorageService.isStorageExist( name ) ) {
            let stored = localStorageService.checkStorage(name);
            if (stored) {
                dispatch('theme/changeColors', stored , { root: true });
            }
        }
    },

    RetrieveStorageByRoute({ dispatch }, route ) {
        if (route.matched.some( item => item.meta.makeCollections )) {
            const basePath = route.path.split('/').slice(1, 2);
            var key = basePath[0].trim();
        }

        for (let i in state.main) {
                let name = null;
                if (key !== undefined) {
                     name = key + state.main[i];
                } else {
                     name = state.main[i];
                }

                // check localStore name
                if( localStorageService.isStorageExist( name )) {
                    var stored = localStorageService.checkStorage( name );

                    if ( stored && state.main[i] === 'Colors') {
                        dispatch('theme/changeColors', stored , { root: true });
                    } else {
                        for( let j in stored ) {
                            if ( stored.hasOwnProperty(j) ) {
                                dispatch('settings/changeSetting', { key: j, value: stored[j] } , { root: true } );
                            }
                        }
                    }
                } else  {
                    // if meta.makeCollection is set to true in the router but we don't save yet our collection in control sidebar
                     let nameMain = state.main[i];
                     let stored = localStorageService.checkStorage( nameMain );
                        if (stored) {
                            switch( nameMain ) {
                               case 'Colors':
                                    dispatch('theme/changeColors', stored , { root: true });
                                    break;
                               case 'Components':
                                    for (let j in stored) {
                                        if (stored.hasOwnProperty(j)) {
                                            dispatch('settings/changeSetting', { key: j, value: stored[j] }, { root: true });
                                        }
                                    }
                                    break;
                               case  'Custom':
                                    for (let j in stored) {
                                        if (stored.hasOwnProperty(j)) {
                                            dispatch('settings/changeSetting', { key: j, value: stored[j] }, { root: true });
                                        }
                                    }
                                    break;
                            }
                        }
                }
        }
    },

};

const mutations = {

    ADDED: ( state, name ) => {
        state.all.push(name);
    },

    REMOVED: ( state, name ) => {
        var i = state.all.indexOf(name);
        if (i === -1) {
            return;
        }
        // remove name from table
        state.all.splice(i, 1);
    }
};


export default  {
    namespaced: true,
    state,
    actions,
    mutations
};