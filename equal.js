//deep comparison of the JS object 
function isEqual(ar1, ar2) {
    if(ar1 !== ar2) {
        if(typeof ar1 !== typeof ar2) {
            return false;
        }
        if(ar1 == null) {
            if(ar2 == null) {
                return true;
            }
            return false;
        }
        if(ar2 == null) {
            if(ar1 == null) {
                return true;
            }
            return false;
        }
        if(typeof ar1 !== 'object') {
            return false;
        }
        if (ar1.length !== ar2.length) {
            return false;
        }
        for(var i in ar1) {
            if(!isEqual(ar1[i], ar2[i])) {
                return false;
            }
        }
        for(var i in ar2) {
            if(!isEqual(ar1[i], ar2[i])) {
                return false;
            }
        }
    }
    return true;
}

