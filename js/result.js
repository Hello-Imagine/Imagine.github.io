function showResult(isMalware){
	var point = document.getElementById("ponitMove");
	var picture = document.getElementById("resultImg");
	var title = document.getElementById("title");
	var info1 = document.getElementById("info1");
	var info2 = document.getElementById("info2");
	var item1 = document.getElementById("item1");
	var item2 = document.getElementById("item2");
	/*
	margin-left: 193px;//middel
	margin-left: 50px;//totally benign
	margin-left: 330px;//totally malicious
	*/
   if(isMalware==true){
	   point.style.marginLeft = "330px";
	   picture.src = "../img/malware.png";
	   title.innerHTML = "NOTE: The APK file contains MALWARE !";
	   info1.innerHTML = "We find malicious part in your upload.";
	   info2.innerHTML = "You can click the botton on the right Navigator to check more details and make comments to this detection result. Be sure not to use it to prevent from being attacked.";
	   //具体数字需要从后端获取数据，等待完善
	   item1.innerHTML = 'Risk item:&nbsp Five items are found in this APK!<img src="../img/danger.png" />';
	   item2.innerHTML = 'Security item:&nbsp Be Cautious. This APK file is not secure.<img src="../img/safe.png" />';
   }else{
	   point.style.marginLeft = "50px";
	   picture.src = "../img/benign.png";
	   title.innerHTML="The APK file is totally benign !";
	   info1.innerHTML="We didn't find any malicious part in your upload.";
	   info2.innerHTML="This App will not infringe privacy, execute malicious instructions and other unexpected behaviors. you can use it without any worry.";
	   item1.innerHTML = 'Risk item:&nbsp No risk items are found in the APK file.<img src="../img/danger.png" />';
	   item2.innerHTML = 'Security item:&nbsp This APK file is benign.<img src="../img/safe.png" />';
   }
   
   console.log("OKKKK!");
}
//需要从后端获取检测结果
showResult(false);