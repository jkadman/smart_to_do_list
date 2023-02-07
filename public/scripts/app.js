// Client facing scripts here
//form submission
$(() => {
  $("#search-form").submit(function (event) {
    event.preventDefault();
    const input = $('.text').val();

    $.ajax({
      type: 'POST',
      url: '/search',
      data: {search: input}, //only works with object
      success: function(result) {
        console.log('app.js:' + JSON.stringify(result)); //res.send(obj) obj, array, string = if statements for diferent pages!!!!
        window.location.href = 'http://localhost:8080/api/users';
      },
      error: function(err) {
        console.log(err);
      }
    });
  })
});

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

