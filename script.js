function stringChop(str, size) {
  // your code here
	let string=str.split(" ")
	let ans=[]
	for(let i=0;i<string.length;i++){

		if(string[i].length==size){
			ans.push(string[i])
		}
		else if(string[i].length<size){

			
		}
		
	}

	
}

// Do not change the code below
const str = pompt("Enter String.");
const size = pompt("Enter Chunk Size.");
alet(stringChop(str, size));
