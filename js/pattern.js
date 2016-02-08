/* pattern function takes user input from textbox and internally calls another function */
function pattern(n1,n2)
{
	var seed = document.getElementById('n1').value;
	var pos = document.getElementById('n2').value;
	var cnt = 0;
	for(cnt = 1; cnt <= pos; cnt++)
	{
		seed = sequence(seed,cnt); //ex: (15,2) it calls (15,1) internally then value returned is 1115; which is passed again to same function (1115,2)
	}	
	document.getElementById("demo").innerHTML = seed;
}
/* returns the pattern for particular position*/
function sequence(seed,pos) 
{
	var pattern = [];
	var seed = seed.toString();
    if (pos==1)
    {
		return seed; //for pos=1 and seed be any value, return seed. (ex:(5,1)=5; (2344,1)=2344) )
    }
    else
    {
		var iter;
		var count = 1;
        for(iter=0;iter<(seed.length-1);iter++)
        {
			if(seed[iter] == seed[iter+1])
			{
				count += 1;
			}
			else
			{
			  // pushes the count of seed in an array, pattern
				pattern.push(count.toString());
				//pushes the seed value into array
				pattern.push(seed[iter]);
				//re-initializes count var
				count = 1;
			}
		}
		//if length of seed is one or the last element of seed, simply push the count
		pattern.push(count.toString());	//for 15, count of 5 is 1, so count becomes =1
		//push the seed value in pattern array
		pattern.push(seed.slice(-1)); //for 15, push 5 in pattern array , so pattern becomes = 15
		//converting array into string
		return pattern.join('');
	}
}