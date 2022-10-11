const localStorageRead = (storeId, createIfNotExistFlag = true) => {

    if(localStorageExist(storeId)){ 
       return JSON.parse(localStorage.getItem(storeId))
    } 

    if(createIfNotExistFlag){
        localStorageWrite(storeId, {})
       return localStorageRead(storeId)
    }   
    return {}
}

const localStorageReadRaw = (storeId) => localStorage.getItem(storeId)

const localStorageWrite = (storeId, stateObj) => {
    localStorage.setItem(storeId, JSON.stringify(stateObj))
    return true
}

const localStorageRemove = (storeId) => {
    localStorage.removeItem(storeId)
    return true
}

const localStorageExist = (storeId) => {
    return localStorage.getItem(storeId) !== null
}

export {localStorageRemove, localStorageRead, localStorageReadRaw, 
        localStorageWrite, localStorageExist}