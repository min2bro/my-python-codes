function Calculator(str)
{
var lol = document.getElementById('addyInput').value;
var Operators = ["*","+","/","-"];
len = lol.length;
for (var i = 0; i<=len ; i++)
{
    if(lol.indexOf(Operators[i])!= -1)
    {
        if (Operators[i] == "*")
        {
            var split1 =lol.split("*");
            alert(split1[0]*split1[1]);
        }
        else if (Operators[i] == "+")
        {
            var split2 =lol.split("+");
            alert(parseFloat(split2[0]) + parseFloat(split2[1]));
        }
        else if (Operators[i] == "/")
        {
            var split3 =lol.split("/");
            alert(split3[0]/split3[1]);
        }
        else if (Operators[i] == "-")
        {
            var split4 =lol.split("-");
            alert(split4[0]-split4[1]);
        }   
    }
    
}

}
