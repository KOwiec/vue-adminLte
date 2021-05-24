/**
 * change class body tag
 * @param {string} addRemoveClass, {string} className
 *
 */
export function toggleBodyClass( addRemoveClass, cls) {
    const ele = document.body;
    if (addRemoveClass === 'addClass') {
        ele.classList.add(cls);
    } else {
        ele.classList.remove(cls);
    }
}

export function checkBodyClass( store ) {
    store.getters.textSmBody ? toggleBodyClass('addClass', 'text-sm') : toggleBodyClass('removeClass', 'text-sm');
    store.getters.colors.accentColor ? toggleBodyClass('addClass', store.getters.colors.accentColor)
                                     : toggleBodyClass('removeClass', store.getters.colors.accentColor);
}

/**
 * Check if an element has a class
 * @param {HTMLElement} elm
 * @param {string} cls
 * @returns {boolean}
 */
export function hasClass(ele, cls) {
    return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))
}

/**
 * Add class to element
 * @param {HTMLElement} elm
 * @param {string} cls
 */
export function addClass(ele, cls) {
    if (!hasClass(ele, cls)) ele.className += ' ' + cls
}

/**
 * Remove class from element
 * @param {HTMLElement} elm
 * @param {string} cls
 */
export function removeClass(ele, cls) {
    if (hasClass(ele, cls)) {
        const reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
        ele.className = ele.className.replace(reg, ' ')
    }
}

/**
 * @param {HTMLElement} element
 * @param {string} className
 */
export function toggleClass(element, className) {
    if (!element || !className) {
        return
    }
    let classString = element.className
    const nameIndex = classString.indexOf(className)
    if (nameIndex === -1) {
        classString += '' + className
    } else {
        classString =
            classString.substr(0, nameIndex) +
            classString.substr(nameIndex + className.length)
    }
    element.className = classString
}

/**
 * This is just a simple version of deep copy
 * Has a lot of edge cases bug
 * If you want to use a perfect deep copy, use lodash's _.cloneDeep
 * @param {Object} source
 * @returns {Object}
 */
export function deepClone(source) {
    if (!source && typeof source !== 'object') {
        throw new Error('error arguments', 'deepClone')
    }
    const targetObj = source.constructor === Array ? [] : {}
    Object.keys(source).forEach(key => {
        if (source[key] && typeof source[key] === 'object') {
            targetObj[key] = deepClone(source[key])
        } else {
            targetObj[key] = source[key]
        }
    })
    return targetObj
}

export function html2Text(val) {
    const div = document.createElement('div')
    div.innerHTML = val
    return div.textContent || div.innerText
}