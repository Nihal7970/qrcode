let qrinput=document.getElementById('qr-input');
let qrbutton=document.getElementById('qr-button');
let qrimg=document.getElementById('qr-img');

    qrbutton.addEventListener('click',function(){
	     let inputvalue=qrinput.value;

	          if (inputvalue === "") {
			          qrimg.innerHTML = "Please give input";
			        }

	      else{

		        qrimg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputvalue}`;
		        }
    });
