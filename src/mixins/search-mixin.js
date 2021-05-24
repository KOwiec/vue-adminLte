// Fuse.js is a powerful, lightweight fuzzy-search library, with zero dependencies
//   https://fusejs.io
import Fuse from 'fuse.js'

const headerSearch = {
    name: 'headerSearch',
    shouldSort: true,
    threshold: 0.4,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: [{
        name: 'title',
        weight: 0.7
    }, {
        name: 'path',
        weight: 0.3
    }]
};

const sidebarSearch = {
    name: 'sidebarSearch',
    shouldSort: true,
    threshold: 0.4,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 3,
    keys: [{
        name: 'title',
        weight: 0.7
    }, {
        name: 'path',
        weight: 0.3
    }]
};

const optionsSet = [headerSearch, sidebarSearch];

export default {
    data() {
        return {
          fuse: undefined
        }
    },
    methods: {
        initFuse(list, name) {
            var i = optionsSet.findIndex(o => o.name === name);
            if (i === -1) return;
            this.fuse = new Fuse(list, optionsSet[i])
        },
        querySearch(query) {
            if (query !== '') {
                return this.fuse.search(query)
            } else {
                return []
            }
        }
    }
}