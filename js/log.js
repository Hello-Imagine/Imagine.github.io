function submitTest() {
	var a = document.getElementById("user").value.toString();
	var b = document.getElementById("password").value.toString();

	if (a == null || a == "") { //用户框value值为空
		document.getElementById("remind_1").innerHTML = "Please input your username!";
		return false;
	}
		
	if (b == null || b == "") { //密码框value值为空
		document.getElementById("remind_2").innerHTML = "Please input your password!";
		return false;
	}
	
	if(!(a.length >= 4 && a.length <= 12)){
			document.getElementById("remind_1").innerHTML = "The length must be 4-12 bits!";
			return false;
	}
	if(!(b.length >= 8 && b.length <= 24)){
		document.getElementById("remind_2").innerHTML = "The length must be 8-24 bits!";
		return false;
	}
	
	
}
