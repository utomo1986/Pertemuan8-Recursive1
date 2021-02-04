/*
1. Buatlah rekursive function void (tidak mengembalikan nilai) yang dapat menampilkan deret aritmatika genap sampai N input. 

Contoh:
f(5) -> 0 2 4
f(8) -> 0 2 4 6 8
*/

function aritmatika(n) {
    if (n == 0) {
        console.log(n);
    } else {
        aritmatika(n - 1);
        if (n % 2 == 0) {
            console.log(n);
        }
    }
}
console.log(aritmatika(5))
console.log(aritmatika(8))
