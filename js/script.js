

// Example starter JavaScript for disabling form submissions if there are invalid fields
 (function () {
    'use strict';
    window.addEventListener('load', function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();


  $('.resultsPage').hide();

$(document).ready(function () {

  $('#vechicleSearchBtn').click(function () {
    $('#searchInputs').hide();
    $('.resultsPage').show();
  }); 


});


var vehicles = [
  {
    id : 101 ,
    name : 'Leaf',
    model : 'Nissan',
    type : 'car',
    trans: 'Automatic',
    year : '2016',
    doors : 5,
    seats : 4,
    minPeople : 1,
    maxpeople : 2,
    minDay : 1,
    maxDay : 10,
    cost : 129,
    fuel : '8.5/100km',
    photo : 'nissanLeaf.png' 
  },

  {
    id : 102 ,
    name : 'Swift',
    model : 'Suzuki',
    type : 'car',
    trans: 'Automatic',
    year : '2019',
    doors : 5,
    seats : 4,
    minPeople : 1,
    maxpeople : 2,
    minDay : 1,
    maxDay : 10,
    cost : 129,
    fuel : '8.5/100km',
    photo : 'suzukiSwift.png' 
  },

  {
    id : 103 ,
    name : 'Vento',
    model : 'Volkswagen',
    type : 'car',
    trans: 'Automatic',
    year : '2018',
    doors : 5,
    seats : 4,
    minPeople : 1,
    maxpeople : 2,
    minDay : 1,
    maxDay : 10,
    cost : 129,
    fuel : '8.5/100km',
    photo : 'volkswagenVento.png' 
  },
  {
    id : 104 ,
    name : 'Kia Rio',
    model : 'Kia',
    type : 'car',
    trans: 'Automatic',
    year : '2020',
    doors : 5,
    seats : 4,
    minPeople : 1,
    maxpeople : 2,
    minDay : 1,
    maxDay : 10,
    cost : 129,
    fuel : '8.5/100km',
    photo : 'kiaRio.png' 
  },


  {
    id : 201 ,
    name : 'Sorento',
    model : 'Kia',
    type : 'SUV',
    trans: 'Automatic',
    year : '2019',
    doors : 5,
    seats : 7,
    minPeople : 1,
    maxpeople : 5,
    minDay : 3,
    maxDay : 10,
    cost : 144,
    fuel : '9.7/100km',
    photo : 'kiaSorento.png' 
  },

  {
    id : 202 ,
    name : 'cx-9',
    model : 'Mazda',
    type : 'SUV',
    trans: 'Automatic',
    year : '2019',
    doors : 5,
    seats : 7,
    minPeople : 1,
    maxpeople : 5,
    minDay : 3,
    maxDay : 10,
    cost : 144,
    fuel : '9.7/100km',
    photo : 'mazdacx-9.png' 
  },


  {
    id : 203 ,
    name : 'Evoque',
    model : 'Range Rover',
    type : 'SUV',
    trans: 'Automatic',
    year : '2019',
    doors : 5,
    seats : 7,
    minPeople : 1,
    maxpeople : 5,
    minDay : 3,
    maxDay : 10,
    cost : 144,
    fuel : '9.7/100km',
    photo : 'rangeRoverEvoque.png' 
  },

  {
    id : 204 ,
    name : 'Fortuner',
    model : 'Toyota', 
    type : 'SUV',
    trans: 'Automatic',
    year : '2019',
    doors : 5,
    seats : 7,
    minPeople : 1,
    maxpeople : 5,
    minDay : 3,
    maxDay : 10,
    cost : 144,
    fuel : '9.7/100km',
    photo : 'toyotaFortuner.png' 
  },

  {
    id : 301 ,
    name : 'A-Class',
     model : 'chausson',
    type : 'Motor home',
    trans: 'Automatic',
    year : '2019',
    doors : 3,
    seats : 8,
    minPeople : 2,
    maxpeople : 6,
    minDay : 2,
    maxDay : 15,
    cost : 200,
    fuel : '17/100km',
    photo : 'kiaRio.png' 
  },

  {
    id : 302 ,
    name : 'A-Class',
     model : 'chausson',
    type : 'Motor home',
    trans: 'Automatic',
    year : '2019',
    doors : 3,
    seats : 8,
    minPeople : 2,
    maxpeople : 6,
    minDay : 2,
    maxDay : 15,
    cost : 200,
    fuel : '17/100km',
    photo : 'kiaRio.png' 
  },

  {
    id : 303 ,
    name : 'A-Class',
     model : 'chausson',
    type : 'Motor home',
    trans: 'Automatic',
    year : '2019',
    doors : 3,
    seats : 8,
    minPeople : 2,
    maxpeople : 6,
    minDay : 2,
    maxDay : 15,
    cost : 200,
    fuel : '17/100km',
    photo : 'kiaRio.png' 
  },

  {
    id : 304 ,
    name : 'A-Class',
     model : 'chausson',
    type : 'Motor home',
    trans: 'Automatic',
    year : '2019',
    doors : 3,
    seats : 8,
    minPeople : 2,
    maxpeople : 6,
    minDay : 2,
    maxDay : 15,
    cost : 200,
    fuel : '17/100km',
    photo : 'kiaRio.png' 
  }

  

];





// var script = '<script src="https://maps.googleapis.com/maps/api/js?key='+ key +'&callback=initMap&libraries=places&v=weekly" async defer></script>';
// console.log(script);


// function initMap() {

// date calculation
$('#pickupDate').datepicker({
  dateFormat : 'yy-mm-dd',
  changeMonth : true,
  minDate :new Date(),
  maxDate : '+1y',
  onSelect : function(date){
    var selectDate = new Date(date);
    var msecInADay  = 86400000;
    var stDate = new Date(selectDate.getTime() + msecInADay);

    $('#dropoffDate').datepicker('option', 'minDate', stDate);
    var enDate = new Date(selectDate.getTime() + 15 * msecInADay);

    $('#dropoffDate').datepicker('option', 'maxDate', enDate);

  }

});

$('#dropoffDate').datepicker({
  dateFormat : 'yy-mm-dd',
  changeMonth : true
});

$('#vechicleSearchBtn').click(function(){
  dateDiff();

});

function dateDiff(){
var start = $(pickupDate).datepicker('getDate');
var end = $(dropoffDate).datepicker('getDate');

var days = (end-start)/1000/60/60/24; //to get human readable days
console.log(days);

var people = parseInt($('#noOfPeoples').val());
console.log(people);

filterVehicles(days,people);


}
function filterVehicles(d,p) {
  var i;
  console.log(vehicles);
  console.log(d,p);
  var vehicleType =[];
  
  for (i=0; i< vehicles.length; i++ ){
    console.log( vehicles[i].maxDay , vehicles[i].minDay,  vehicles[i].maxpeople ,vehicles[i].minPeople);
    
    if (((d < vehicles[i].maxDay) && (d > vehicles[i].minDay)) && ((p < vehicles[i].maxpeople) && (p > vehicles[i].minPeople))) {
      console.log(vehicles[i].name);
      if (!((vehicleType).includes(vehicles[i].type))) {
        vehicleType.push(vehicles[i].type);
      }
      
      displayCards(i);
    }
  }
  console.log(vehicleType);
  addFilterType(vehicleType);
  
}



 //////////////////////////////////////////////////////////////////////////
      //from autocomplete
  //     var start = new google.maps.places.Autocomplete(
  //       document.getElementById("pickup"),
  //       {
  //         types: ["(cities)"]

  //       }
  //     );//autocomplete start_address

  //  var end = new google.maps.places.Autocomplete(
  //       document.getElementById("dropoff"),
  //       {
  //         types: ["(cities)"]

  //       }
  //     );//autocomplete end_address
//////////////////////////////////////////////////////////////////////////


// } //initMap end here

function addFilterType(type){
  console.log(type);
  for (i=0; i< type.length; i++ ){
    $('#vehicleType').append('<input class="" id="car" type="checkbox" name="" value="checked">' +
    '<label class="" for="car">' +type[i] + '</label> <br></br>')
  }
  
}



  function displayCards(j){
    console.log(j, vehicles);
    // $('#results').text('card');
    $('#results').append('<div class="card mb-3">'+
  '<div class="row no-gutters">'+
    '<div class="col-md-5">'+
      '<img src="images/' + vehicles[j].photo+ '" class="card-img" alt="..."> </div>'+
    '<div class="col-md-7">'+
      '<div class="card-body">'+
        '<h5 class="card-title">' + vehicles[j].name+ '</h5>'+
        '<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>'+
        '<p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>'+
      '</div>'+
  '</div>'+
  '</div>'+
'</div>'

);// append ends here
}; //displayCards


