module.exports = function reverse (n) {
    n = Math.abs(n);
    return Number(n.toString().split('').reverse().join(''));
}
