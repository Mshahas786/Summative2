

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






  function displayCards(j){
    $('#result').append('<div class="card mb-3" style="max-width: 540px;">'+
  '<div class="row no-gutters">'+
    '<div class="col-md-5">'+
      '<img src="..." class="card-img" alt="..."> </div>'+
    '<div class="col-md-7">'+
      '<div class="card-body">'+
        '<h5 class="card-title">Card title</h5>'+
        '<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>'+
        '<p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>'+
      '</div>'+
  '</div>'+
  '</div>'+
'</div>'

);// append ends here
}; //displayCards


