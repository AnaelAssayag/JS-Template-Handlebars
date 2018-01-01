var countriesData = {
    countries:[
      {country:"France", city:"Marseille" ,years:"20"},
      {country:"France", city:"Paris", years:"2"},
      {country:"Ireland", city:"Dublin", years:"1"},
      {country:"Israel", city:"Tel Aviv", years:"2"}
  
    ]
  }
  
  var source = $('#store-template').html();
  
  var template = Handlebars.compile(source)
    
  var newHTML = template(countriesData);
  
    
  $('.countries').append(newHTML);
  