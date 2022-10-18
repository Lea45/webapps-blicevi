var func2 = (x) => {
    console.log(x)
    var pola = parseInt(x.length/2)
    console.log(pola)
    var rez = x.slice (pola)
    return rez;
}

console.log(func2("JavaScript i nije tako loš LOL"))