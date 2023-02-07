// Client facing scripts here
//form submission
$(() => {
  $("#search-form").submit(function (event) { //the callback is called when u click the search button
    event.preventDefault();
    const input = $('.text').val(); //record the input from the user

    $.ajax({
      type: 'POST',
      url: '/users/search', //link that will give up control in server.js
      data: {search: input}, //'data' key only works with object-typed key value. Data's key value = the req.body in the server
      success: function(result) {
        console.log('app.js:' + result); //result in AJAX = the value in res.send(value) sent back from the server.
          //Value could be an obj, array, or a string => could be utilized to create if statements to direct the browser to different pages!!
        // window.location.href = 'http://localhost:8080/api/users'; //redirect the user to the /api/users page if the request was sent successfully
      },
      error: function(err) {
        console.log('app.js error:', err);
      }
    });
  })
});

//below are my own note, don't bother reading it
//e.g. of $.ajax
// $.ajax({
//   url: "test.html",
//   context: document.body
// }).done(function() {
//   $( this ).addClass( "done" );
// });

/*
$.ajax({
  method: 'POST',
  data: input, //only works with object
  url: '/search',
  success: function(result) {
    console.log('app.js:' + result);
    // $input.addClass
  },
  error: function(err) {
    console.log(err);
  }
})

$.ajax({
    type: 'POST',
    url: 'loginCheck',
    data: $(formLogin).serialize(),
    success: function(result){
        console.log('my message' + result);
    }
});

great e.g. of $.ajax
https://stackoverflow.com/questions/10214723/jquery-ajax-post-data-in-a-java-servlet

Save some data to the server and notify the user once it's complete.
$.ajax({
  method: "POST",
  url: "some.php",
  data: { name: "John", location: "Boston" }
})
  .done(function( msg ) {
    alert( "Data Saved: " + msg );
  });
*/

