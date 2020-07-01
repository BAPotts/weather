function getElements(response) {
  if (response.main) {
    $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
    $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
    $('.showErrors').text("");
  } else {
    $('.showHumidity').text("");
    $('.showTemp').text("");
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    const city = $('#location').val();
    $('#location').val("");

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9104fe377ee655a0c74aae13ae5b1939`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      })
      .then(function(jsonifiedResponse) {
        getElements(jsonifiedResponse);
      });
  });
});