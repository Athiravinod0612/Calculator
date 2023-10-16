btnclick = (val) => 
{

    document.getElementById("num").value+=val;
}
cleartxt = () =>
{
 document.getElementById("num").value=""
}
eql = () =>
{
    var text= document.getElementById("num").value
    var result=eval(text)
    document.getElementById("num").value= result
}

