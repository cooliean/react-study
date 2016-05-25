/**
 * Created by Cooliean on 16/5/25.
 */
var sqrt = Math.sqrt;
function square( x ){
    return x*x;
}
function diag( x, y ){
    return sqrt( square( x ) + square( y ) );
}

module.exports = {
    sqrt,
    square,
    diag
}


