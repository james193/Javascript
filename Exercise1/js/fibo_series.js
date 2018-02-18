function fibo(){
	var a=0;
	var b=1;
	var c=0;

	var n = parseInt(document.getElementById("numbers").value);

	/*document.write(a+" ");
	document.write(b);*/

	for(i=0;i<n;i++){
		c=a+b;
		a=b;
		b=c;
		document.write(c+" ");
	}
}