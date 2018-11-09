/* Input data from org_page.html */

/* Save array to table */
function saveEvents () {
  var table = [];

  $("table#data_table tr").each(function() {
    var arrayRow = [];
    var tableData = $(this).find('td');
    if (tableData.length > 0) {
      tableData.each(function() {arrayRow.push($(this).text()); });
      table.push(arrayRow);
    }
  });

  /* Save data into local storage as string */
  localStorage.setItem("fratEvents", JSON.stringify(table));

  /* Retrieve list of events added as string */
  var retrievedEvents = localStorage.getItem("fratEvents");
  /* Parse string into array */
  var eventsArray = JSON.parse(retrievedEvents);
/*
  for (i= 1; i < eventsArray.length; i++) {
    for (j = 1; j < eventsArray.length; j++) {
      if (retrievedEvents[i][j] != 'null') {
        console.log(retrievedEvents[i][j]);
      }
    }
  } */

  console.log(eventsArray);
}

function saveDescription() {
  var savedDescription = document.getElementById("desc_box").value;
  localStorage.setItem("savedDescription", savedDescription);
  var descriptionString = localStorage.getItem("savedDescription");
  console.log(descriptionString);
}
