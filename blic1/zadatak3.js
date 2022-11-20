var func3 = (x) => {
	var brojevi = []
	var stringovi = []

	for(let i of x){
	console.log(i)
	if(typeof I==="number"){
		brojevi.push(i)
		}
	else{
		stringovi.push(i)
		}
	}

	brojevi.sort((a, b) => a - b)
	console.log(brojevi)
	stringovi.sort((a, b) => a.length - b.length)
	console.log(stringovi)
	var res = brojevi.concat(stringovi)
	return res
}

console.log(func3([321,63, "mermelada",4,"kruh",1,1234,"tanjur",50]))