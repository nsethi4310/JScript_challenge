// from data.js
var tbody = d3.select("tbody");

// Adding data on the html

data.forEach(function(ufoinfo){
  var row = tbody.append("tr");
  Object.entries(ufoinfo).forEach(function([key, value]) {
    var cell = row.append("td");
    cell.text(value);
  });
});

// Creating function to get the data and filter the data

 function DateCapture() {
     d3.event.preventDefault();
     var inputElement= d3.select("#datetime");
     var inputValue = inputElement.property("value");
     console.log(inputValue);
     var filteredData = data.filter(dt => dt.datetime === inputValue );
     console.log(filteredData);

     tbody.html("")

     filteredData.forEach(function(ufoinfo){
        var row = tbody.append("tr");
        Object.entries(ufoinfo).forEach(function([key, value]) {
          var cell = row.append("td");
          cell.text(value);
        });
      });
      
 }

 //Enabling button click and calling function

 var button = d3.select("#filter-btn");

 button.on("click", DateCapture)
 button.on("submit", DateCapture)


