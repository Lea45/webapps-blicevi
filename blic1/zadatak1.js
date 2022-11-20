var func1 = (x) => {
    console.log(x)
    var rez = []
    for (let i of x) {
        if (Object.keys(i).length ===1) {
            console.log(i)
        }
    }
}

console.log(func1( [{ 1: "A" }, {1: "C", 2: "A"}, {2: "C"} ]))
