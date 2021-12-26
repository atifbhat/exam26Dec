
    var a = 0;
    var b = 1;
    var c = 0;
    var num=12;
    var i;
 
    for( i = 2; i <= num; i++)
    {
       c = a + b; 
       a = b; 
       b = c; 
    }
    
    
    

     if(num==0)
        {
            res=a;
        }

    else
    {

        res=b;
    }



console.log(res);
alert(res);