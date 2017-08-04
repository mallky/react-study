export function addToLocalStorage(arr, states) {
    var sObj = JSON.stringify(arr);
    var sStates = JSON.stringify(states);
    localStorage.setItem('state', sObj);
    localStorage.setItem('states', sStates);
}

export function getFromLocalStorage() {
    var retObj = JSON.parse(localStorage.getItem('state'));
    var retStates = JSON.parse(localStorage.getItem('states'));
    
    return [retObj, retStates];
}
