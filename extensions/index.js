var cars=document.images.car;
var Obs=document.getElementById("obstacles");
var score=0;
var Score=document.getElementById("Score");
var Sun=document.getElementById("sun");
var Sky=document.getElementById("sky");
var Playground=document.getElementById("playground");
var t1=document.getElementById("tree1");
var t2=document.getElementById("tree2");
var Corps=document.getElementById("corps");
var Road=document.getElementById("road");
var i=1;
var j=1;
var Change=document.getElementById("change");


cars.style.left=270+"px";
function checkKey(event)
{
    // let ascii=event.charCodeAt(0);
    // console.log(event+" "+ascii);
    if(event.charCodeAt(0)==106)
    {
        if(cars.style.left === 470+"px")
        {
            cars.style.left=270+"px";
        }
        else
        {
            if(cars.style.left === 270+"px")
            {
                cars.style.left=75+"px";
            }
            else
            {
                cars.style.left=75+"px";
            }
        }
    }
    else
    {
        if(event.charCodeAt(0)==108)
        {
            if(cars.style.left === 470+"px")
            {
                cars.style.left=470+"px";
            }
            else
            {
                if(cars.style.left === 270+"px")
                {
                    cars.style.left=470+"px";
                }
                else
                {
                    if(cars.style.left === 75+"px")
                    {
                        cars.style.left=270+"px";
                    }
                }
            }
        }
    }
}

Change.addEventListener("click",()=>
{
    j++;
    if(j%2 == 0)
    {
        cars.src="D://Car Swiping/images/OIP.jpg";
    }
    else
    {
        if(j%2 == 1)
        {
            cars.src="D://Car Swiping/images/R.png";
        }
    }
});

//Night and Day function//
Sun.addEventListener("animationiteration",()=>
{
    i++;
    if(i%2 == 0)
    {
        Sun.style.backgroundColor="white";
        Sun.style.boxShadow="0px 5px 32px 0px white";
        Sky.style.backgroundColor="darkblue";
        Playground.style.backgroundColor="darkgreen";
        t1.style.backgroundColor="darkolivegreen";
        t2.style.backgroundColor="darkolivegreen";
        Corps.style.background="linear-gradient(black, black, darkred, black, black)";
        Corps.style.opacity=50+"%";
        cars.style.opacity=50+"%";
        Score.style.color="white";
        Road.style.backgroundColor="black";
        cars.src="D://Car Swiping/images/RNight.png";
    }
    else
    {
        Sun.style.backgroundColor="yellow";
        Sun.style.boxShadow="0px 5px 32px 0px yellow";
        Sky.style.backgroundColor="skyblue";
        Playground.style.backgroundColor="yellowgreen";
        t1.style.backgroundColor="green";
        t2.style.backgroundColor="green";
        Corps.style.background="linear-gradient(black, black, red, black, black)";
        Corps.style.opacity=1;
        cars.style.opacity=1;
        Score.style.color="yellow";
        Road.style.backgroundColor="rgb(21, 21, 45)";
        cars.src="D://Car Swiping/images/R.png";
    }
});

//Random Event of the truck//
Obs.addEventListener("animationiteration",()=>
{
    let random=Math.random()*500;  //400 et 150
    score++;
    if(score%10 == 0)
    {
        Score.style.color="red";
        Score.innerHTML=score;
    }
    else
    {
        Score.style.color="yellow";
        Score.innerHTML=score;
    }
    Obs.style.left=random+"px";
});