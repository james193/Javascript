function prime(){
	var n = parseInt(document.getElementById("numbers").value);
	var a=1;
	var count=0;

	for(i=1;i<n;i++){
		count=0;
		for(j=2;j<n/2;j++){
			if(i%j==0 && i!=j)
				count++;
		}
		if(count==0 && i!=1)
			document.write(i+" ");
	}
}


