export function addToLocalStorage(arr) {
    var sObj = JSON.stringify(arr);
    localStorage.setItem('state', sObj);
}

export function getFromLocalStorage() {
    var retObj = JSON.parse(localStorage.getItem('state'));
    
    return retObj;
}
