const randomInt = (min, max) => {
    if(!min || !max) throw new TypeError("min and max are required arguments!")
    if(isNaN(min) || isNaN(max)) throw new TypeError("min and max must be a numbers!")
    return Math.floor(Math.random() * (max - min + 1) + min)
}

module.exports = randomInt;