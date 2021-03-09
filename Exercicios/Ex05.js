let v1 = 15;

if (v1 == 0)
{
    console.log("0");
}else if(v1 == 1)
    {
        console.log("0 1 1");
    }else if(v1 == 2)
        {
            console.log("0 1 1 2");
        }else if ( v1 <= 4)
            {
                console.log("0 1 1 2 3");
            }else if ( v1 >=5 && v1 < 8)
                {
                    console.log("0 1 1 2 3 5");
                }else if(v1 >=8 && v1 < 13)
                {
                    console.log("0 1 1 2 3 5 8");
                }else
                    {
                        console.log("0 1 1 2 3 5 8 13");
                    }