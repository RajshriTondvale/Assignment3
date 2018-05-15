

	function myFunction()
	{
		var circle= document.getElementById('OnOff');
		var buttonON =document.getElementById('btnON');
		var buttonOFF=document.getElementById('btnOFF');
		
		if (circle.classList.contains("grey"))
		{
			circle.classList.add("yellow");
			circle.classList.remove("grey");
			btnON.innerHTML="Turn ON light";
		}
		else if(circle.classList.contains("yellow"))
		{
			circle.classList.add("grey");
			circle.classList.remove("yellow")
			btnOFF.innerHTML="Turn Off light";
		}
	}

	