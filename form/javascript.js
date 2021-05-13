function validate()
{
	var fname = document.getElementById('firstname').value;
	var mname = document.getElementById('secondname').value;
	var lname = document.getElementById('lastname').value;
	var address = document.getElementById('a1').value;
	var cit = document.getElementById('city').value;
	var stat = document.getElementById('State').value;
	var pin = document.getElementById('pincode').value;
	var mail = document.getElementById('email').value;
	var cn = document.getElementById('phone').value;

	if(fname=="")
	{
		alert("First name can't be empty!");
		return false;
	}
	if(!isNaN(firstname))
	{
		alert("First name can't be number!");
		return false;
	}

	if(lname=="")
	{
		alert("Last name can't be empty!");
		return false;
	}
	if(!isNaN(lname))
	{
		alert("Last name can't be a number!");
		return false;
	}

	if(address=="")
	{
		alert("Address can't be empty!");
		return false;
	}
	

	if(cit=="")
	{
		alert("City can't be empty!");
		return false;
	}
	if(!isNaN(cit))
	{
		alert("City can't be a number!");
		return false;
	}

	if(stat=="")
	{
		alert("State can't be empty!");
		return false;
	}
	if(!isNaN(stat))
	{
		alert("State can't be a number!");
		return false;
	}
	
	if(pin=="")
	{
		alert("Pincode can't be empty!");
		return false;
	}

	if(mail=="")
	{
		alert("E-mail can't be empty!");
		return false;
	}
	if(!isNaN(mail))
	{
		alert("E-mail can not be a number!");
		return false;
	}

	if(cn=="")
	{
		alert("Mobile number can't be empty!");
		return false;
	}
	if(isNaN(cn))
	{
		alert("Mobile number has to be in digits!");
		return false;
	}
	if(cn.length!=10)
	{
		alert("Mobile number has to be of 10 digits!");
		return false;
	}
}