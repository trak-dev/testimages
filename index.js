function getRandomSize(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
  
  var allImages = "";
  
  for (var i = 0; i < 15; i++) {
    var width = getRandomSize(400, 600);
    var height =  getRandomSize(400, 600);
    allImages += '<img src="https://placekitten.com/'+width+'/'+height+'" alt="pretty kitty">';
  }
  
  $('#photos').append(allImages);