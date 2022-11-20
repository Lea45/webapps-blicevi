var func4 = (x)  => {
    for (let i in x){
        if ( Array.isArray(x[i])) {
            var arrTemp = []
            var sum = 0
            for (let j of x[i]) {
                if(typeof j === "number"){
                    sum += j
                }
                else {
                    arrTemp.push(j)
                }
            }
            if (sum%2==0){
                sum = (sum**0.5).toFixed(2)
                console.log(sum)
                arrTemp.push(sum)
            }
        }
        x[i] = arrTemp
    }
    return x
}

console.log(func4({ 1: [ 143, "A", 21], 2: "B", 3: [12, 11, "C"]}))