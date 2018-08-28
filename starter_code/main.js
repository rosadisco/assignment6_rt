var cities = ['nyc', 'sf', 'la', 'atx', 'syd']

var selectBox = $('#city-type')

cities.forEach(function(city) {
  selectBox.append('<option>' + city + '</option>')
})
