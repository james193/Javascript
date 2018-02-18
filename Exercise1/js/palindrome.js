function palindrome()
{
	var str=document.getElementById("palin").value;
	var len=str.length;

	for(var i=0;i<len/2;i++){
		if(str[i]!=str[len-1-i]){
			document.write("Not palindrome");
			return;
		}
	}
	document.write("palindrome");
}