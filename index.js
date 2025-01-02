function getweather() {
   const pickCity_Name = document.querySelector("#city_1").value;
   axios.get(`https://api.weatherapi.com/v1/current.json?key=4729c61b1afd4b2da3990740241912&q=${pickCity_Name}&aqi=yes`)
  .then(function (response) {
    // handle success
    console.log(response);
    var weathercard = (response.data.current)
    console.log(weathercard.temp_c)
    document.getElementById("Weather_1").innerHTML = (`Today temp of ${pickCity_Name} is ${weathercard.temp_c}`)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}