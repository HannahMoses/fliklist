

var model = {
  watchlistItems: [],
  browseItems: []


}


var api = {
  root: "https://api.themoviedb.org/3",
  token: "7d56a879b0e7e3160ad6f6426f8f38dc" // TODO 0 put your api key here
}


/**
 * Makes an AJAX request to themoviedb.org, asking for some movies
 * if successful, updates the model.browseItems appropriately, and then invokes
 * the callback function that was passed in
 */
function discoverMovies(callback) {
	$.ajax({
		url: api.root + "/discover/movie",
		data: {
			api_key: api.token,
		},
		success: function(response) {
			console.log("We got a response from The Movie DB!");
			console.log(response);

			// TODO 2//done
			// update the model, setting its .browseItems property equal
            // to the movies we recieved in the response
            model.browseItems = response.results;
			// invoke the callback function that was passed in.
			callback();
		}
	});

}


/**
 * re-renders the page with new content, based on the current state of the model
 */
function render() {
  // TODO 7
  // clear everything from both lists

  // TODO 6
  // for each movie on the user's watchlist, insert a list item into
  // the <ul> in the watchlist section
// model.watchlistItems.forEach(function(movie) {
//     var movie2watch = $("<li></li>").text(movie.title);
//     $("#section-watchlist ul").append(movie2watch);
// }
  // for each movie on the current browse list,
  console.log(model.browseItems);
  model.browseItems.forEach(function(movie) {
		// TODO 3
		// insert a list item into the <ul> in the browse section
         var movieList = $("<li></li>").text(movie.title);
         $("#section-browse ul").append(movieList);
		// TODO 4
		// the list item should include a button that says "Add to Watchlist"
        movieList.append(" <button>Add to my watchlist </button>");
		// TODO 5
		// when the button is clicked, this movie should be added
        // to the model's watchlist and render() should be called again
        movieList.on('click', 'button', function(){
               var movie2watch = $("<li></li>").text(movie.title);
               $("#section-watchlist ul").append(movie2watch);
               render()
        });


  });

}


// When the HTML document is ready, we call the discoverMovies function,
// and pass the render function as its callback
$(document).ready(function() {
  discoverMovies(render);
  // invokes discoverMovies and passes in something called render as the
  //callback. In other words, we are saying: Go fetch some results from
  //the API, and when you get a response back, invoke this other function
  // called render.
  //
});
