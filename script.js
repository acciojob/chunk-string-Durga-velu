function stringChop(str, size) {
  // your code here
	let string=str.split(" ")
	let ans=[]
	for(let i of string){

		if(string[i].length==size){
			ans.push(string[i])
		}
		else if(string[i].length<size){
ans.push(string[i])
			
		}
			
		else if(string[i].length>size){
			let res=string[i].split(string[i].length/size);
			ans.push(res)
		}
	}
	return ans

	
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
