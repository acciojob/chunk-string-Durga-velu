function stringChop(str, size) {
  // your code here
	if (str=="") {
		return null
	}
	let string=str.toString().split(" ")
	
	let ans=[]
	for(let i of string){
		if(i.length===size)
		{
			ans.push(i)
		}
		else if(i.length<size){
ans.push(i)
			
		}
			
		else if(i.length>size){
			let res=i.split(i.length/2);
			ans.push(res)
		}
	}

	
	return ans

	
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
