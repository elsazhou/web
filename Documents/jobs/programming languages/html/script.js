function fun1() {
	var person = {
    firstName: "John",
    lastName : "Doe",
    id : 5566,
    fullName : function() 
	{
       return this.firstName + " " + this.lastName;
    }
	};
	document.getElementById("demo").innerHTML = person.fullName();
}

var txt="";
function message(){
	try {
		adddlert("Welcome guest!");
	}
	catch(err) {
		txt="本页有一个错误。\n\n";
		txt+="错误描述：" + err.message + "\n\n";
		txt+="点击确定继续。\n\n";
		alert(txt);
	}
}

function revealMessage() {
	document.getElementById("hiddenMessage").style.display = 'block';
}

function countDown() {
	var currentVal = document.getElementById("countDownButton").innerHTML;
	var newVal = 0;
	if (currentVal > 0) {
		newVal = currentVal - 1;
	}

	document.getElementById("countDownButton").innerHTML = newVal;
}