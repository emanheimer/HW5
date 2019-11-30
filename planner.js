//Declaring global variables
var dayContainer = $("#currentDay");
var timeContainer = $(".container");
var today = moment().format('LL');
var timeBlock = $(".time-block");
var saveButton = $(".saveBtn"); 
var textBox = $("input"); 
var textArray = []; 

//Display the current date
dayContainer.text(today);

//Create hover effect
timeBlock.hover(
    
    function() {
    $(this).css("border", "solid green 3px");
    },
    
    function() {
    $(this).css("border", "solid black 1px");
    }
)

//Loop over table rows
    //Get time of row
        //Check if is before current time
var td = $('td.hour');

td.each(function() {
    var hour = $(this).text(); //grabbing text from td rather than setting it
    var rowTime = moment(hour,"hh:mm a");
    var formattedTime = rowTime.format("HH:mm"); 
    var currentTime = new moment().format("HH:mm");
    
    formattedTime = formattedTime.split(':')[0]; 
    currentTime = currentTime.split(':')[0];
    formattedTime = parseInt(formattedTime, 10);
    currentTime = parseInt(currentTime, 10);

    //Get values from local storage on load
    var localStorageValue = localStorage.getItem(hour); 
    $(this).parent().find(textBox).val(localStorageValue);//setting the value of textBox to localStorageValue
    
    if (formattedTime < currentTime) {
        $(this).next().css('background', 'grey');
    }
    else if (formattedTime > currentTime) {
        $(this).next().css('background', 'green'); 
    }
     else if ( formattedTime === currentTime ) {
        $(this).next().css('background', 'red');
     }
    }
)

//
saveButton.on ("click", function() {
    var key = $(this).parent().find('.hour').text(); 
    var inputText = $(this).parent().find(textBox).val(); 
    localStorage.setItem(key, inputText); 
})

