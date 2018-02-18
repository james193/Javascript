function armstrong(){
	var n = parseInt(document.getElementById("numbers").value);
	var temp=n;
	var num=n;
	var c=0;
	var rem=0,ans=0;

	while(temp>1){
		temp=temp/10;
		c++;
	}

	while(n>0){
		rem=n%10;
		ans=ans+Math.pow(rem,c);
		n=parseInt(n/10);
	}

	if(num==ans)
		document.write("Is armstrong");
	else
		document.write("Not armstrong");
}