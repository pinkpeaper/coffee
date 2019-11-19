//生成咖啡介绍
var xhr=getXhr();
xhr.open("GET","php/index.php?hide=0");
xhr.send(null);
xhr.onreadystatechange=()=>{
	if(xhr.readyState==4&&xhr.status==200){
		var data=JSON.parse(xhr.responseText);
		var porduct=document.querySelector(".porduct");
		console.log(porduct);//父标签
		for(var i=0;i<data.length;i++){
			var arr=data[i];//创建一个数组存放data[i]
			var a=document.createElement("a");
			a.href=arr[1];
			var img=document.createElement("img");
			img.src=arr[2];
			a.appendChild(img);
			var div=document.createElement("div");
			var img=document.createElement("img");
			img.src=arr[3];
			div.appendChild(img);
			a.appendChild(div);
			var h1=document.createElement("h1");
			h1.innerHTML=arr[4];
			a.appendChild(h1);
			var hr=document.createElement("hr");
			a.appendChild(hr);
			var p=document.createElement("p");
			p.innerHTML=arr[5];
			a.appendChild(p);
			porduct.appendChild(a);
		}
	}
}
//生成团队页面
var xhr1=getXhr();
xhr1.open("GET","php/index.php?hide=1");
xhr1.send(null);
xhr1.onreadystatechange=()=>{
	if(xhr1.readyState==4&&xhr1.status==200){
		var team=document.querySelector(".team .w1200");
		var data=JSON.parse(xhr1.responseText);
		console.log(data);
		for(var i=0;i<data.length;i++){
			var arr=data[i];//创建一个数组存放data[i]
			var a=document.createElement("a");
			a.href=arr[1];
			var img=document.createElement("img");
			img.src=arr[2];
			a.appendChild(img);
			var div=document.createElement("div");
			var h1=document.createElement("h1");
			h1.innerHTML=arr[3];
			div.appendChild(h1);
			var hr=document.createElement("hr");
			div.appendChild(hr);
			var h3=document.createElement("h3");
			h3.innerHTML=arr[4];
			div.appendChild(h3);
			var p=document.createElement("p");
			p.innerHTML=arr[5];
			div.appendChild(p);
			
			a.appendChild(div);
			team.appendChild(a);
		}
	}
}


























function getXhr(){
	var xhr=xhr;
	if(XMLHttpRequest){
		xhr=new XMLHttpRequest();
	}else{
		xhr=new ActiveXObject("Microsoft.XMLHttp");
	}
	return xhr;
}
