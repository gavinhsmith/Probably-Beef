/**
 * Reduces Fraction
 * @param {number} num Numerator
 * @param {number} denom Denominator
 * @returns {`${number}:${number}`} Reduced fraction
 */
Math.reduce = function (num, denom){
    var gcd = function gcd(a,b){
        return b ? gcd(b, a%b) : a;
    };
    gcd = gcd(num,denom);
    return `${num/gcd}:${denom/gcd}`;
  }