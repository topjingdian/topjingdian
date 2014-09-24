function menu_status(status) {
	var menua = document.getElementById("display_menu");
	var menub = document.getElementById("pop_menu");
	menua.style.display = status;
	menub.style.display = status;
}

if(device.windows() == true){
document.getElementById("stylemobile").href="style/mobile.css";
}else{
document.getElementById("styledesktop").disabled=true;
}


var userAgentInfo = navigator.userAgent; 搜索 
    var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");  
    var flag = false;
	var v=0
	for ( v = 0; v < Agents.length; v++) 
	{  
         if (userAgentInfo.indexOf(Agents[v]) > 0) { 
		 flag = true;
		 document.getElementById("stylemobile").href="style/mobile.css";
		 break;
		 }  
    }
	if(flag){
		alert(Agents[v]);// 设备类型
		}
		else
		{
		// pc	
				 document.getElementById("stylemobile").href="style/mobile.css";
}