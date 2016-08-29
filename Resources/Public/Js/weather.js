  // Docs at http://simpleweatherjs.com
$(document).ready(function() {
  $.simpleWeather({
    woeid: woeidValue, //http://woeid.rosselliot.co.nz/
    location: '',
    unit: 'c',
    success: function(weather) {
        var codes = new Array();

        codes[0] = "Tornade"
        codes[1] = "Tempête tropicale"
        codes[2] = "Ouragan"
        codes[3] = "Orages sévères"
        codes[4] = "Orages"
        codes[5] = "Pluie et neige mélangées"
        codes[6] = "Pluie et verglas mélangés"
        codes[7] = "Neige et verglas mélangés"
        codes[8] = "Bruine verglassée"
        codes[9] = "Bruine"
        codes[10] = "Pluie verglassée"
        codes[11] = "Averses"
        codes[12] = "Averses"
        codes[13] = "Bourrasques de neige"
        codes[14] = "Averse légères de neige"
        codes[15] = "Rafale de neige"
        codes[16] = "Neige"
        codes[17] = "Grêle"
        codes[18] = "Verglas"
        codes[19] = "Poussiere"
        codes[20] = "Brumeux"
        codes[21] = "Brume"
        codes[22] = "Fumeux"
        codes[23] = "Violent"
        codes[24] = "Venteux"
        codes[25] = "Froid"
        codes[26] = "Nuageux"
        codes[27] = "La plupart du temps nuageux"
        codes[28] = "La plupart du temps nuageux"
        codes[29] = "Partiellement nuageux"
        codes[30] = "Partiellement nuageux"
        codes[31] = "Clair"
        codes[32] = "Ensoleillé"
        codes[33] = "Moyen"
        codes[34] = "Moyen"
        codes[35] = "Pluie et grêle mélangées"
        codes[36] = "Chaud"
        codes[37] = "Orages isolés"
        codes[38] = "Orages dispersés"
        codes[39] = "Orages dispersés"
        codes[40] = "Averses dispersées"
        codes[41] = "Fortes chutes de neige"
        codes[42] = "Chutes de neige dispersées"
        codes[43] = "Fortes chutes de neige"
        codes[44] = "Partiellement nuageux"
        codes[45] = "Orages"
        codes[46] = "Chutes de neiges"
        codes[47] = "Orages isolés"
        codes[3200] = "Non disponible" 
         
      var jour = new Array();
      
      jour['Mon'] = "Lundi"
      jour['Tue'] = "Mardi"
      jour['Wed'] = "Mercredi"
      jour['Thu'] = "Jeudi"
      jour['Fri'] = "Vendredi"
      jour['Sat'] = "Samedi"
      jour['Sun'] = "Dimanche"
          
      html = '<h3 class="weatherCity">'+weather.city+', '+weather.country+'</h3>';
      html += '<h4 class="weatherCurrent"><i class="icon-'+weather.code+'"></i>' + weather.temp + '&deg;' + weather.units.temp + '</h4>';
      html += '<p class="currently">'+ codes[weather.code] +'</p>';
      html += '<ul  class="weatherInfo">';
      html += '<li>Min: '+weather.low+ '&deg;' + weather.units.temp + '</li>';
      html += '<li>Max: '+weather.high+ '&deg;' + weather.units.temp + '</li>';
      html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';
      html += '</ul>';     
      html += '<p class="weatherUpdate">Mise à jour: ' + weather.updated + '</p>';

      for (var i = 1; i < 6; i++) { //weather.forecast.length
        html += '<div class="row weatherForecast"><div class="col-xs-3 col-sm-3">' + jour[weather.forecast[i].day]+ ':</div><div class="col-xs-3 col-sm-1"><i class="icon-' + weather.forecast[i].code +'"></i></div><div class="col-xs-3 hidden-md hidden-lg">' + codes[weather.forecast[i].code] + '</div><div class="col-xs-3 col-sm-3">' + weather.forecast[i].low+ '&deg;' + weather.units.temp + '-' + weather.forecast[i].high + '&deg;' + weather.units.temp + '</div></div>';
      }
      html += '<a href="https://fr.news.yahoo.com/meteo/'+weather.country+'/'+weather.city+'/'+weather.city+'-'+woeidValue+'" target="_blank" alt="Météo de '+weather.city+' sur Yahoo Weather">Voir sur Yahoo Météo</a>';
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>' + error + '</p>');
    }
  });
});



