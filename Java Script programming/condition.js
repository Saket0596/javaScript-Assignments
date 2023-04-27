let a=prompt("enter your age")
a=Number.parseInt(a)

if (a<0){
    document.write("its not a valid age");
}
else if(a>10 && a<15)
{
    document.write("its a kid");
}
else if(a>18 && a<50)
{
    document.write("adult");
}
else
{
    document.write("older");
}



