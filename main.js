// bilangan prima
function cekPrima( n ) {
    var max = Math.sqrt(n);
    for( var i = 2;  i <= max;  i++ ) {
        if( n % i == 0 )
            return false;
    }
    return true;
}

for( var n = 2;  n < 50;  n++ ) {
        if( cekPrima(n) ) {
console.log(n);
document.write(n + ` adalah bilangan prima<br>`)
 }
}