function executeSearch(searchQuery, searchDataFile) {
  $.getJSON(searchDataFile, function (data) {

    var fuseOptions = {
      keys: ['name'], // what we're searching
      threshold: 0.2,
      distance: 90
    };


    var fuse = new Fuse(data, fuseOptions);

    // Run the search
    var result = fuse.search(searchQuery);
    console.log({
      "matches": result
    });

    $('#searchResults').html("")
    if (result.length > 0) {
      $('#searchResults').append("<h3>Matching plays</h3>");
      $('#searchResults').append(SearchResults(result));
    } else {
      $('#searchResults').append("<p>No plays found</p>");
    }
  });
}

function SearchResults(results) {
  htmlreturn = ""
  for (var i = 0; i < results.length; i++) {
    result = results[i]
    htmlreturn = htmlreturn.concat('<p><a href="' + result.url + '">' + result.name + " - " + result.date + "</a></p>")
  }
  return htmlreturn
}


function searchButton(searchDataFile) {
  searchQuery = document.getElementById("playSearch").value;
  if (searchQuery) {
    $("#playSearch").val(searchQuery);
    executeSearch(searchQuery, searchDataFile);
  } else {
    $('#searchResults').html("<p>Please enter a search phrase</p>");
  }
  return false
}
