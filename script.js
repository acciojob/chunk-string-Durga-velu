function stringChop(str, size) {
  // your code here
	if (str=="") {
		return null
	}
	
	let ans=[]
	for(let i of str){
		
	let chunk=str.substr(i,size)
			ans.push(chunk)
	
	}

	
	return ans

	
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
