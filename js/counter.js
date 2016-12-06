var count = 0;
function counter() {
	count += 1;
	return count;
}

function myFunction() {
	document.getElementById("my_output").innerHTML = "My Output Value is: " +counter();
}