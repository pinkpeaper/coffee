var xhr = getXhr();
xhr.open("GET", "php/index.php?hide=2");
xhr.send(null);
xhr.onreadystatechange = () => {
	if(xhr.readyState == 4 && xhr.status == 200) {
		var data = JSON.parse(xhr.responseText);
		var ul=document.querySelector("ul.clearfix");
		console.log(ul);
		for(var i=0;i<data.length;i++){
			var arr=data[i];
			var li=document.createElement("li");
			li.className="clearfix";
			var img=document.createElement("img");
			img.src=arr[1];
			li.appendChild(img);
			var div=document.createElement("div");
			var p=document.createElement("p");
			p.innerHTML=arr[2];
			div.appendChild(p);
			var p=document.createElement("p");
			p.innerHTML=arr[3];
			div.appendChild(p);
			li.appendChild(div);
			ul.appendChild(li);
		}
	}
}

function getXhr() {
	var xhr = null;
	if(XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	} else {
		xhr = new ActiveXObject("Microsoft.XMLHttp");
	}
	return xhr;
}