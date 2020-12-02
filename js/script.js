var vehicles = [
  {
    id : 101 ,
    name : 'Leaf',
    company : 'Nissan',
    type : 'car',
    trans: 'Automatic',
    year : '2016',
    doors : 5,
    seats : 4,
    minPeople : 1,
    maxPeople : 2,
    minDay : 1,
    maxDay : 10,
    cost : 129,
    fuel : '8.5/100km',
    photo : 'nissanLeaf.png' 
  },

  {
    id : 102 ,
    name : 'Swift',
    company : 'Suzuki',
    type : 'car',
    trans: 'Automatic',
    year : '2017',
    doors : 5,
    seats : 4,
    minPeople : 1,
    maxPeople : 2,
    minDay : 1,
    maxDay : 10,
    cost : 129,
    fuel : '8.5/100km',
    photo : 'suzukiSwift.png' 
  },

  {
    id : 103 ,
    name : 'Vento',
    company : 'Volkswagen',
    type : 'car',
    trans: 'Automatic',
    year : '2018',
    doors : 5,
    seats : 4,
    minPeople : 1,
    maxPeople : 2,
    minDay : 1,
    maxDay : 10,
    cost : 129,
    fuel : '8.5/100km',
    photo : 'volkswagenVento.png' 
  },
  {
    id : 104 ,
    name : 'Kia Rio',
    company : 'Kia',
    type : 'car',
    trans: 'Automatic',
    year : '2020',
    doors : 5,
    seats : 4,
    minPeople : 1,
    maxPeople : 2,
    minDay : 1,
    maxDay : 10,
    cost : 129,
    fuel : '8.5/100km',
    photo : 'kiaRio.png' 
  },


  {
    id : 201 ,
    name : 'Sorento',
    company : 'Kia',
    type : 'SUV',
    trans: 'Automatic',
    year : '2015',
    doors : 5,
    seats : 7,
    minPeople : 1,
    maxPeople : 5,
    minDay : 3,
    maxDay : 10,
    cost : 144,
    fuel : '9.7/100km',
    photo : 'kiaSorento.png' 
  },

  {
    id : 202 ,
    name : 'cx-9',
    company : 'Mazda',
    type : 'SUV',
    trans: 'Automatic',
    year : '2016',
    doors : 5,
    seats : 7,
    minPeople : 1,
    maxPeople : 5,
    minDay : 3,
    maxDay : 10,
    cost : 144,
    fuel : '9.7/100km',
    photo : 'mazdacx-9.png' 
  },


  {
    id : 203 ,
    name : 'Evoque',
    company : 'Range Rover',
    type : 'SUV',
    trans: 'Automatic',
    year : '2020',
    doors : 5,
    seats : 7,
    minPeople : 1,
    maxPeople : 5,
    minDay : 3,
    maxDay : 10,
    cost : 144,
    fuel : '9.7/100km',
    photo : 'rangeRoverEvoque.png' 
  },

  {
    id : 204 ,
    name : 'Fortuner',
    company : 'Toyota', 
    type : 'SUV',
    trans: 'Automatic',
    year : '2019',
    doors : 5,
    seats : 7,
    minPeople : 1,
    maxPeople : 5,
    minDay : 3,
    maxDay : 10,
    cost : 144,
    fuel : '9.7/100km',
    photo : 'toyotaFortuner.png' 
  },

  {
    id : 301 ,
    name : 'A-Class',
    company : 'chausson',
    type : 'Motor home',
    trans: 'Automatic',
    year : '2018',
    doors : 3,
    seats : 8,
    minPeople : 2,
    maxPeople : 6,
    minDay : 2,
    maxDay : 15,
    cost : 200,
    fuel : '17/100km',
    photo : 'chausson.png' 
  },

  {
    id : 302 ,
    name : '4 Berth',
    company : 'Mercedes',
    type : 'Motor home',
    trans: 'Automatic',
    year : '2020',
    doors : 3,
    seats : 8,
    minPeople : 2,
    maxPeople : 6,
    minDay : 2,
    maxDay : 15,
    cost : 200,
    fuel : '17/100km',
    photo : '4Berth.png' 
  },

  {
    id : 303 ,
    name : 'Ducato',
    company : 'Fiat',
    type : 'Motor home',
    trans: 'Automatic',
    year : '2019',
    doors : 3,
    seats : 8,
    minPeople : 2,
    maxPeople : 6,
    minDay : 2,
    maxDay : 15,
    cost : 200,
    fuel : '17/100km',
    photo : 'ducato.png' 
  },

  {
    id : 304 ,
    name : 'Tribute',
    company : 'Trigano',
    type : 'Motor home',
    trans: 'Automatic',
    year : '2017',
    doors : 3,
    seats : 8,
    minPeople : 2,
    maxPeople : 6,
    minDay : 2,
    maxDay : 15,
    cost : 200,
    fuel : '17/100km',
    photo : 'tribute.png' 
  },

  {
    id : 401 ,
    name : 'YZFR15e',
    company : 'Yamaha',
    type : 'Motor bike',
    trans: 'manual',
    year : '2020',
    seats : 2,
    minPeople : 1,
    maxPeople : 1,
    minDay : 1,
    maxDay : 5,
    cost : 109,
    fuel : '3.7/100km',
    photo : 'YZFR15e.png' 
  },

  {
    id : 402 ,
    name : 'Cbr1000rr',
    company: 'Honda',
    type : 'Motor bike',
    trans: 'manual',
    year : '2014',
    seats : 2,
    minPeople : 1,
    maxPeople : 1,
    minDay : 1,
    maxDay : 5,
    cost : 109,
    fuel : '3.7/100km',
    photo : 'Cbr1000rr.png' 
  },

  {
    id : 403 ,
    name : 'S1000rr',
    company : 'Bmw',
    type : 'Motor bike',
    trans: 'manual',
    year : '2016',
    seats : 2,
    minPeople : 1,
    maxPeople : 1,
    minDay : 1,
    maxDay : 5,
    cost : 109,
    fuel : '3.7/100km',
    photo : 'S1000rr.png' 
  },

  {
    id : 404 ,
    name : 'Bullet 350',
    company : 'Royal Enfield',
    type : 'Motor bike',
    trans: 'manual',
    year : '2018',
    seats : 2,
    minPeople : 1,
    maxPeople : 1,
    minDay : 1,
    maxDay : 5,
    cost : 109,
    fuel : '3.7/100km',
    photo : 'bullet350.png' 
  }

];


var script = '<script src="https://maps.googleapis.com/maps/api/js?key='+ key +'&callback=initMap&libraries=places&v=weekly" async defer></script>';
 console.log(script);

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
  $('body').append(script);

  $('#vechicleSearchBtn').click(function () {
    $('#searchInputs').hide();
    $('.resultsPage').show();
  }); 


});






 function initMap() {

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




//////////////////////////////////////////////////////////////////////////
      //from autocomplete
      var start = new google.maps.places.Autocomplete(
        document.getElementById("pickup"),
        {
          types: ["(cities)"]

        }
      );//autocomplete start_address

      var wayPoints = new google.maps.places.Autocomplete(
        document.getElementById("wayPoints"),
        {
          types: ["(cities)"]

        }
      );//autocomplete end_address

   var end = new google.maps.places.Autocomplete(
        document.getElementById("dropoff"),
        {
          types: ["(cities)"]

        }
      );//autocomplete end_address
//////////////////////////////////////////////////////////////////////////

//directions distance and duration
const directionsService = new google.maps.DirectionsService();
const directionsRenderer = new google.maps.DirectionsRenderer();


//callilng map from directions
const map = new google.maps.Map(document.getElementById("map"), {
 zoom: 6,
 center: { lat: 41.85, lng: -87.65 },
 mapTypeId : 'satellite'

});//map

  directionsRenderer.setMap(map);


document.getElementById("vechicleSearchBtn").addEventListener("click", () => {
 calculateAndDisplayRoute(directionsService, directionsRenderer);
});
}


function calculateAndDisplayRoute(directionsService, directionsRenderer) {
const waypts = [];
const checkboxArray = document.getElementById("wayPoints");

for (let i = 0; i < checkboxArray.length; i++) {
 if (checkboxArray.options[i].selected) {
   waypts.push({
     location: checkboxArray[i].value,
     stopover: true,
   });
 }
}

directionsService.route(
 {
   origin: document.getElementById("pickup").value,
   destination: document.getElementById("dropoff").value,
   waypoints: waypts,
   optimizeWaypoints: true,
   travelMode: google.maps.TravelMode.DRIVING,
 },
 (response, status) => {
   if (status === "OK") {
     console.log(response);
     directionsRenderer.setDirections(response);
     const route = response.routes[0];
     const summaryPanel = document.getElementById("directions-panel");

     summaryPanel.innerHTML = "";

     // For each route, display summary information.
     for (let i = 0; i < route.legs.length; i++) {
       const routeSegment = i + 1;
       summaryPanel.innerHTML +=
         "<b>Route Segment: " + routeSegment + "</b><br>";
       summaryPanel.innerHTML += route.legs[i].start_address + " to ";
       summaryPanel.innerHTML += route.legs[i].end_address + "<br>";
       summaryPanel.innerHTML +=
         route.legs[i].distance.text + " and it takes " + route.legs[i].duration.text + " to reach."+ "<br><br>";
     }

   } else {
     window.alert("Directions request failed due to " + status);
   }
 }
);
}




function filterVehicles(d,p) {
  var i;
  console.log(vehicles);
  console.log(d,p);
  var vehicleType =[];
  
  for (i=0; i< vehicles.length; i++ ){
    console.log( vehicles[i].maxDay , vehicles[i].minDay,  vehicles[i].maxPeople ,vehicles[i].minPeople);

    if (((d <= vehicles[i].maxDay) && (d >= vehicles[i].minDay)) && ((p <= vehicles[i].maxPeople) && (p >= vehicles[i].minPeople))) {
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


function addFilterType(type){
  console.log(type);
  for (i=0; i< type.length; i++ ){
    $('#vehicleType').append('<div class="form-check">'+
    '<input class="form-check-input" type="checkbox" value="" id="">'+
    '<label class="form-check-label" for="defaultCheck1">'+ type[i] +'</label>'+
  '</div>')
  }
  
}



  function displayCards(j){
    console.log(j, vehicles);
    // $('#results').text('card');
    $('#results').append('<div class="card mb-3">'+
      
    '<div class="row no-gutters clearfix">'+
     '<div class="col-md-5">'+
     '<img src="images/' + vehicles[j].photo+ '" class="card-img" alt="..."> </div>'+

      '<div class="col-md-7">'+
        '<div class="card-body row no-gutters">'+
          '<h4 class="card-title col-12">' + vehicles[j].name + '</h4>'+
          '<h6 class="col-6">' + vehicles[j].company + '</h6>'+
          '<h6 class="card-title col-6">' + vehicles[j].trans + '</h6>'+
          '<h6 class="card-title col-6">' + vehicles[j].year + '</h6>'+
          '<div class="col-12">'+
          '<h4 class="text-right"> $' + vehicles[j].cost + '</h4>'+
          '<button href="#" class=" btn btn-success float-right">Book Now</button>'+
        '</div>'+
        '</div>'+
    '</div>'+
    '</div>'+
  '</div>'

);// append ends here
}; //displayCards

