
var d = new Date();
var time = d.getHours();
if (time<10)
{
	document.write("<b>早上好</b>");
}
else if (time>=10 && time<16)
{
	document.write("<b>今天好</b>");
}
else
{
	document.write("<b>晚上好!</b>");
}


	outerloop:
for (var i = 0; i < 10; i++)
{
	innerloop:
		for (var j = 0; j < 10; j++)
		{
		if (j > 3)
		{
			break;
		}
		if (i == 2)
		{
			break innerloop;
		}
		if (i == 4)
		{
			break outerloop;
		}
		document.write("i = " + i + ", j = " + j + "<br />");

	}
}