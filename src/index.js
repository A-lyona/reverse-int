module.exports = function reverse (n) {
    n = Math.abs(n);
    let a = n.toString().split("").reverse().join("");
    return Number(a);
}