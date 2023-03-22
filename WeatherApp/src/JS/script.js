let API= "https://api.weatherapi.com/v1/current.json?key=0bab7dd1bacc418689b143833220304&q=$location=";
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
$(document).ready(function(){
    $("#location").keyup(async function(event) {
        if (event.which === 13) {
        let loction=$("#location").val();
        let link=API+loction;
        const response = await fetch(link);
        const users = await response.json();
        console.log(users);
        if(users.current.condition.text=="Mist"){
            $("body").css({"background-image": "url(./img/mist.gif)"});  
        }else if(users.current.condition.text.toLowerCase()=="partly cloudy"){
            $("body").css({"background-image": "url(./img/partly_cloudy.gif)"});  
        }else if(users.current.condition.text.toLowerCase()=="sunny"){
            $("body").css({"background-image": "url(./img/sunny.gif)"});  
        }else if(users.current.condition.text.toLowerCase()=="patch rain possible"){
            $("body").css({"background-image": "url(./img/patch_rain.gif)"});  
        }else if(users.current.condition.text.toLowerCase()=="overcast"){
            $("body").css({"background-image": "url(./img/overcast.gif)"});  
        }else if(users.current.condition.text.toLowerCase()=="freezing fog"){
            $("body").css({"background-image": "url(./img/frrezing.gif)"});  
        }
        $(".loc").text(users.location.name+","+users.location.country);
        $(".date").text(days[new Date().getDay()]+" "+users.location.localtime);
        $(".temp").html(users.current.temp_c+ "<sup>o</sup>C");
        $(".temp").css("background-color","aliceblue")
        $(".text").text(users.current.condition.text);
        
        }
    });
   
})