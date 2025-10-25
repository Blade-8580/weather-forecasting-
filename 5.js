        const apikey ="7825fbe1779ce8590615f8410488ecef";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search  button")
        const weatherIcon = document.querySelector(".weather-icon");
        


        async function checkWeather(City){
        const response = await fetch(apiUrl + City + `&appid=${apikey}`);

        if(response.status == 404){
            document.querySelector(".error").style.display = "block" ;
            document.querySelector(".weather").style.display = "none" ;
               }
        else{
            
        var data = await response.json();
        document.querySelector(".City").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "img5.png"; 
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "img2.png.png"; 
        }
       else  if(data.weather[0].main == "Clear"){
            weatherIcon.src = "img6.png"; 
        }
       else  if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "img7.png";
        }
       else  if(data.weather[0].main == "Mist"){
            weatherIcon.src = "img8.png"; 
        }
       else  if(data.weather[0].main == "Snow"){
            weatherIcon.src = "img9.png"; 
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none" ;

        }



        }

        searchBtn.addEventListener("click",()=>{
            checkWeather(searchBox.value);
        })