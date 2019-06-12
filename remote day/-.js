<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>Favorite Movies</title>
  <style type="text/css">
    button,
    div,
    form,
    input {
      margin: 10px;
    }
  </style>
</head>

<body>

  <div class="container">
    <h1>Movie Search</h1>

     <!-- Rendered Buttons will get Dumped Here  -->
    <div id="buttons-view"></div>

    <form id="movie-form">
      <label for="movie-input">Add a Movie, Yo!</label>
      <input type="text" id="movie-input"><br>

      <!-- Button triggers new movie to be added -->
      <input id="add-movie" type="submit" value="Add a Movie, Yo!">
    </form>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript">
      // Initial array of movies
      var movies = ["The Matrix", "The Notebook", "Mr. Nobody", "The Lion King"];

      // Generic function for capturing the movie name from the data-attribute
      function alertMovieName() {

        // YOUR CODE GOES HERE!!!

      }

      // Function for displaying movie data
      function renderButtons() {

        // Deleting the movies prior to adding new movies
        // (this is necessary otherwise we will have repeat buttons)
        $("#buttons-view").empty();

        // Looping through the array of movies
        for (var i = 0; i < movies.length; i++) {

          // Then dynamicaly generating buttons for each movie in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button>");
          // Adding a class
          a.addClass("movie");
          // Added a data-attribute
          a.attr("data-name", movies[i]);
          // Provided the initial button text
          a.text(movies[i]);
          // Added the button to the HTML
          $("#buttons-view").append(a);
        }
      }

      // This function handles events where one button is clicked
      $("#add-movie").on("click", function(event) {
        event.preventDefault();

        // This line grabs the input from the textbox
        var movie = $("#movie-input").val().trim();

        // The movie from the textbox is then added to our array
        movies.push(movie);

        // Calling renderButtons which handles the processing of our movie array
        renderButtons();
      });

      // Function for displaying the movie info
      // We're adding a click event listener to all elements with the class "movie"
      // We're adding the event listener to the document itself because it will
      // work for dynamically generated elements
      // $(".movies").on("click") will only add listeners to elements that are on the page at that time
      $(document).on("click", ".movie", alertMovieName);

      // Calling the renderButtons function to display the intial buttons
      renderButtons();
    </script>
  </div>
</body>

</html>
