function validate_form() {
	var valid = true;
	var password = document.form1.password.value;
	var l = parseInt(password.length);
	if (l<5) {
		alert("Please select a longer passwod");
		valid=false;
	}
	return valid;
}

function blur_fun() {
	var valid = true;			//de douleye.ti kanei to blur??
	var user=document.form1.username.value;
	if (user==null) {
		alert("Use a username");
		valid=false;
	}
	return valid;
}

// Get the HTTP Object
var httpObject = null;
function getHTTPObject() {
	if (window.ActiveXObject)
		return new ActiveXObject("Microsoft.XMLHTTP");
	else if (window.XMLHttpRequest)
		return new XMLHttpRequest();
	else {
		alert("Your browser does not support AJAX.");
		return null;
	}
}

function doWork() {	
	httpObject = getHTTPObject();
	if (httpObject != null) {
		httpObject.open("GET", "\ValidationServlet?username="
				+ document.getElementById('username').value, true);
		httpObject.send(null);
		httpObject.onreadystatechange = setOutput;
	}
}

function setOutput() {
	if (httpObject.readyState == 4 && httpObject.status==200) {
		//alert("total = " + httpObject.responseText);
		document.getElementById('total').innerHTML = httpObject.responseText;
	}
}

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}


function readCookie(name) {
	//alert('reading cookie');
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
	location.reload(true);			//true gia na mh diavasei apo cache,alla apo server
}

function check(){
    var myCookie = readCookie('account');
    if (myCookie == null) {
    	document.getElementById("log").innerHTML = "You are not Singed In.";
    }
    else {
    	document.getElementById("log").innerHTML = "Mr/Ms"+" "+myCookie;
    }
}

function food(kind,ing){
	alert(kind);
	alert(ing);
	if (kind=="vegetarian"){
		alert("veg");
	}
	if (kind=="meat-guy"){
		alert("meat");
	}
}

function checkRec(){
    var myCookie = readCookie('eaten');
    var sign = readCookie('account');
    if (sign == null) {
    	document.getElementById("last").innerHTML = "You are not Singed In and we dont keep your history.";
    	return;
    }
    
    if (myCookie == null) {
    	document.getElementById("last").innerHTML = "It appears that this is your first food this session.";
    }
    else {
    	document.getElementById("last").innerHTML = "Your last meal was"+" "+myCookie;
    }
}

