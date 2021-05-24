/**
 * use with watch: directive
 * @param {string} val, {string} ref (ref=tree2, etc.)
 * @returns {String}
 */
export function filterText(val, ref) {
    this.$refs.ref.filter(val)
}

/**
 * use with method: directive
 * in searching data in child component by props (:data="data1" :filter-node-method="filterNode")
 * @param {string} value, {string} data, {string} atr (label, etc.)
 * @returns {Boolean}
 */
export function filterNode(value, data, atr) {
        if (!value) return true;
        return data.atr.indexOf(value) !== -1
}

/**
 * use with computed: directive, imput element with v-model='search'
 *
 * @returns {String}
 */
export function  filteredTableData () {
    // for example: for searching user obj in table data
    return this.data.filter((row,index) => {
        return data[index].user.toLowerCase().includes(this.search.toLowerCase())
    });

}

/**
 * @param {string} url
 * @returns {Object}
 */
export function getQueryObject(url) {
    url = url == null ? window.location.href : url
    const search = url.substring(url.lastIndexOf('?') + 1)
    const obj = {}
    const reg = /([^?&=]+)=([^?&=]*)/g
    search.replace(reg, (rs, $1, $2) => {
        const name = decodeURIComponent($1)
        let val = decodeURIComponent($2)
        val = String(val)
        obj[name] = val
        return rs
    })
    return obj
}

