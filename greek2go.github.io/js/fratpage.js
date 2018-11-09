/*Not sure if this code will work, but kept it here just in case it's useful*/
$(document).ready(function () {
    var TableData=[];//declare your array
    $('#submit').click(function(){
          $('#grid row1 tr').each(function(row, tr){
            alert(row);
           TableData[row]={
            "Date" : $(tr).find('td:eq(0)').text()
            , "Time" :$(tr).find('td:eq(1)').text()
            , "Location" : $(tr).find('td:eq(2)').text()
            , "Description" : $(tr).find('td:eq(3)').text()
          }
            alert(JSON.stringify(TableData));
            console.log(TableData);//output [Object { productname="1", quantity="2", unit="3", more...}]
        });

        });

});
