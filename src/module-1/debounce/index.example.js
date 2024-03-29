var debounce = function (r) { 
    var u, i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0; 
    return function () { 
        for (var e = this, n = arguments.length, t = new Array(n), o = 0; o < n; o++) t[o] = arguments[o]; 
        u && clearTimeout(u), 
        u = setTimeout(function () { 
            r.apply(e, t), u = null }, i) 
        } 
    }; 

export { debounce };