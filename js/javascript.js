var hours = 0;
var minutes = 0;
var seconds = 0;
var displayhours=0;
var displayminutes=0;
var displayseconds=0;
var status ="stopped"
var interval=null;
var status1 = document.querySelector("#Q11");
var status2 = document.querySelector("#Q12");
var status3= document.querySelector("#Q13");
var Q1 = document.getElementById("Q1");
 var Q2 = document.getElementById("Q2");
var Q3 = document.getElementById("Q3");
    Q1.disabled =true;
    Q2.disabled =true;
    Q3.disabled =true;

function stopwatch( ) {
    status1.innerHTML="";
    status2.innerHTML="";
    status3.innerHTML="";
    Q1.disabled =false;
    Q2.disabled =false;
    Q3.disabled =false;
    seconds++;
    if ( seconds /60 === 1 )
    {
    seconds=0;
    minutes++;
    if( minutes/60===1)
    {
      minutes=0;
      hours++;
    }
    } 
    if (seconds<10) {
        displayseconds="0"+seconds;
    }
    else{
        displayseconds=seconds;
    }
    if(minutes<10)
    {
        displayminutes="0"+minutes;
    }
    else{
        displayminutes=minutes;
    }
    if (hours<10)
    {
        displayhours="0"+hours;    
    }
    else{
        displayhours=hours;  
    }
    

    
document.getElementById("watch").innerHTML= displayhours+":"+displayminutes+":"+displayseconds;
if (status==="stopped") {
           document.getElementById("btn1").innerHTML="stop";
           status="started"
       }
       else if (seconds == 20 ){
               interval=clearInterval(interval);
               window.alert("you Must Try againt the Exam");
               interval=clearInterval(interval);
       seconds=0;
      minutes=0;
      hours=0;
      document.getElementById("watch").innerHTML = "00:00:00";
      document.getElementById("btn1").innerHTML ="start";
      status="stopped";
      dataEnter( );
      Q1.value="";
      Q2.value="";
      Q3.value="";
           }
       
}
function startstop( ){
   if (status==="stopped") {
       interval=setInterval(stopwatch,1000);
       document.getElementById("btn1").innerHTML="stop";
       status="started"
   }
   else {
    //     interval=clearInterval(interval);
    //   document.getElementById("btn1").innerHTML="start";
    //   status="stopped"
   }
}

function dataEnter(  ) {
    var Qa1 = document.querySelector("#Q1").value;
    var Qa2 = document.querySelector("#Q2").value;
    var Qa3 = document.querySelector("#Q3").value;
    if(Qa1 == "4" )
    {
         var correctbtn = document.createElement("button");
        correctbtn.innerHTML= "<i class='fas fa-check-circle'></i>" ;
        correctbtn.style.color='chartreuse';
        correctbtn.style.border="2px solid gray";
       status1.appendChild(correctbtn);
    }
    else if(Qa1 !== "4")
    {
        var correctbtn = document.createElement("button");
       correctbtn.innerHTML= "<i class='fas fa-times-circle'></i>" ;
       correctbtn.style.color='red';
       correctbtn.style.border="2px solid gray";
      status1.appendChild(correctbtn);

    }
    
     if(Qa2 == "5" )
    {
         var correctbtn2 = document.createElement("button");
        correctbtn2.innerHTML= "<i class='fas fa-check-circle'></i>" ;
        correctbtn2.style.color='chartreuse';
        correctbtn2.style.border="2px solid gray";
       status2.appendChild(correctbtn2);
    }
    else if(Qa2 !== "5")
    {
        var correctbtn2 = document.createElement("button");
       correctbtn2.innerHTML= "<i class='fas fa-times-circle'></i>" ;
       correctbtn2.style.color='red';
       correctbtn2.style.border="2px solid gray";
      status2.appendChild(correctbtn2);

    }
     if(Qa3 == "2" )
    {
         var correctbtn3 = document.createElement("button");
        correctbtn3.innerHTML= "<i class='fas fa-check-circle'></i>" ;
        correctbtn3.style.color='chartreuse';
        correctbtn3.style.border="2px solid gray";
       status3.appendChild(correctbtn3);
    }
    else if(Qa3 !== "2")
    {
        var correctbtn3 = document.createElement("button");
       correctbtn3.innerHTML= "<i class='fas fa-times-circle'></i>" ;
       correctbtn3.style.color='red';
       correctbtn3.style.border="2px solid gray";
      status3.appendChild(correctbtn3);

    }
}

// function reset( ) 
// {
    
//    interval=clearInterval(interval);
//    seconds=0;
//    minutes=0;
//    hours=0;
//    document.getElementById("watch").innerHTML = "00:00:00";
//    document.getElementById("btn1").innerHTML ="start";

// }
//