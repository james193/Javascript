function factorial(){
	var n = parseInt(document.getElementById("numbers").value);

	var ans=n;
	var flag=0;
	while(n>1){
		ans=ans*(n-1);
		n--;
		flag=1;
	}

	if(flag==0)
		document.write(1);
	else
		document.write(ans);
}