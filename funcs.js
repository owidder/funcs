'use strict';

com_eosItServices_Dep.funcs = (function() {
    function _if(boolean, trueBody) {
        if(boolean) {
            trueBody();
        }

        function _else(falseBody) {
            if(!boolean) {
                falseBody();
            }
        }

        return {
            else: _else
        }
    }

    function forEachKeyAndVal(v, fkt) {
        var i;
        for(i in v) {
            if(v.hasOwnProperty(i)) {
                fkt(i, v[i]);
            }
        }
    }

    function forEachKey(v, fkt) {
        forEachKeyAndVal(v, function(key, val) {
            fkt(key);
        });
    }

    function forEachVal(v, fkt) {
        forEachKeyAndVal(v, function(key, val) {
            fkt(val);
        });
    }

    return {
        if: _if,
        forEachKeyAndVal: forEachKeyAndVal,
        forEachKey: forEachKey,
        forEachVal: forEachVal
    }
})();
