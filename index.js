var totalsum =0;

function plusClick(input1) 
{
    debugger
    totalsum = totalsum +parseInt(input1);
    var displayElement = document.getElementById("display");
    displayElement.value="";
}

function equalClick(input2)
{
    var displayElement = document.getElementById("display");
    displayElement.value = totalsum + parseInt(input2);
    totalsum=0;
}

function clearClick()
{
    var displayElement = document.getElementById("display");
    displayElement.value="";
    totalsum=0;
}