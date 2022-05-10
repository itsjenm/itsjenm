function maskify(cc) {
    //if length is greater than 4, then we have things to mask 
    let lastFourDigits = cc.slice(-4);
    let maskedDigits = cc;
    if (cc.length > 4) {
        return '#'.repeat(cc.length - 4).replace(maskedDigits) + lastFourDigits
    }
    return maskedDigits;
}

console.log(maskify("4556364607935616"));
console.log(maskify("1"));
console.log(maskify("11111"));