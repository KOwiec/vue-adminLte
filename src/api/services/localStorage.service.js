// localStorage service
function checkStorage (key)  {
    if (localStorage.getItem(key)) {
        try {
            return JSON.parse(localStorage.getItem(key))
        } catch (e) {
            localStorage.removeItem(key);
            throw e
        }
    }
    return false
}

function saveToStorage (key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function removeFromStorage (key) {
    localStorage.removeItem(key);
}

function isStorageExist (key) {
    if (localStorage[key]) {
        return true
    } else {
        return false
    }
}

function clearStorage () {
    localStorage.clear();
}

export const localStorageService = {
        checkStorage,
        saveToStorage,
        removeFromStorage,
        isStorageExist,
        clearStorage
};