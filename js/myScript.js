function showEnglish() {
	document.getElementById("french").style.display="none";
	document.getElementById("frSpan").style.borderBottom="none";
	document.getElementById("english").style.display="inherit";
	document.getElementById("engSpan").style.borderBottom="1px solid #007bff";
}

function showFrench() {
	
	document.getElementById("english").style.display="none";
	document.getElementById("engSpan").style.borderBottom="none";
	document.getElementById("french").style.display="inherit";
	document.getElementById("frSpan").style.borderBottom="1px solid #007bff";
}