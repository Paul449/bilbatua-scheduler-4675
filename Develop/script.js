// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the HTML.
var header = $('body').children().eq(0);
var bodyContainer = $('body').children().eq(1);

/* jQuery selectors section */

/* Time blocks */
// In this section, I will define the rest of the time blocks

/* Hour 9, 10, and 11 */
var hour9 = $('#hour-9'); // targeting the hour-9 HTML element
var textArea9 = $('body').children().eq(1).children().eq(0).children().eq(1);
var timeNow9 = new Date(); // capturing the current hour
//var specificbtn9;
timeNow9.setHours(9); // setting a specific hour for hour-9

var hour10 = $('#hour-10'); // targeting the hour-10 HTML element
var textArea10 = $('body').children().eq(1).children().eq(1).children().eq(1);
var timeNow10 = new Date();
//var specificbtn10;
timeNow10.setHours(10);

var hour11 = $('#hour-11').children().eq(2); // targeting the hour-11 HTMl element
var textArea11 = $('body').children().eq(1).children().eq(2).children().eq(1);
var timeNow11 = new Date();
//var specificbtn11;
timeNow11.setHours(11);

/* Hour 12 */
var hour12 = $('<div>');
var inner12 = $('<div>');
var textArea12 = $('<textarea>');
var btn12 = $('<button>');
var specificbtn12 = $('btn12');
var i12 = $('<i>');

hour12.attr({ id: 'hour-12', class: 'row time-block future' });
inner12.attr('class', 'col-2 col-md-1 hour text-center py-3');
inner12.text('12PM');
textArea12.attr({ class: "col-8 col-md-10 description b-12", rows: "3"});
btn12.attr({ class: 'btn saveBtn col-2 col-md-1', 'aria-label': 'save' });
i12.attr({ class: 'fas fa-save', 'aria-hidden': 'true' });

bodyContainer.append(hour12);
hour12.append(inner12);
hour12.append(textArea12);
hour12.append(btn12);
btn12.append(i12);

var timeNow12 = new Date();
timeNow12.setHours(12);

/* Hour 13 */
var hour13 = $('<div>');
var inner13 = $('<div>');
var textArea13 = $('<textarea>');
var btn13 = $('<button>');
var i13 = $('<i>');

hour13.attr('id', 'hour-13');
hour13.attr('class', 'row time-block future');
inner13.attr('class', 'col-2 col-md-1 hour text-center py-3');
inner13.text('1PM');
textArea13.attr('class', "col-8 col-md-10 description b-13");
textArea13.attr('type', 'text');
textArea13.attr('rows', "3");
btn13.attr('class', 'btn saveBtn col-2 col-md-1');
btn13.attr('aria-label', 'save');
btn13.attr('id','b-13');
i13.attr('class', 'fas fa-save');
i13.attr('aria-hidden', 'true');

bodyContainer.append(hour13);
hour13.append(inner13);
hour13.append(textArea13);
hour13.append(btn13);
btn13.append(i13);

var timeNow13 = new Date();
timeNow13.setHours(13);

/* Hour 14 */
var hour14 = $('<div>');
var inner14 = $('<div>');
var textArea14 = $('<textarea>');
var btn14 = $('<button>');
var i14 = $('<i>');

hour14.attr('id', 'hour-14');
hour14.attr('class', 'row time-block future');
inner14.attr('class', 'col-2 col-md-1 hour text-center py-3');
inner14.text('2PM');
textArea14.attr('class', "col-8 col-md-10 description b-14");
textArea14.attr('rows', "3");
btn14.attr('class', 'btn saveBtn col-2 col-md-1 ');
btn14.attr('aria-label', 'save');
btn14.attr('id','b-14');
i14.attr('class', 'fas fa-save');
i14.attr('aria-hidden', 'true');

bodyContainer.append(hour14);
hour14.append(inner14);
hour14.append(textArea14);
hour14.append(btn14);
btn14.append(i14);

var timeNow14 = new Date();
timeNow14.setHours(14);

/* Hour 15 */
var hour15 = $('<div>');
var inner15 = $('<div>');
var textArea15 = $('<textarea>');
var btn15 = $('<button>');
var i15 = $('<i>');

hour15.attr('id', 'hour-15');
hour15.attr('class', 'row time-block future');
inner15.attr('class', 'col-2 col-md-1 hour text-center py-3');
inner15.text('3PM');
textArea15.attr('class', "col-8 col-md-10 description b-15");
textArea15.attr('rows', "3");
btn15.attr('class', 'btn saveBtn col-2 col-md-1');
btn15.attr('aria-label', 'save');
btn15.attr('id','b-15');
i15.attr('class', 'fas fa-save');
i15.attr('aria-hidden', 'true');

bodyContainer.append(hour15);
hour15.append(inner15);
hour15.append(textArea15);
hour15.append(btn15);
btn15.append(i15);

var timeNow15 = new Date();
timeNow15.setHours(15);

/* Hour 16 */
var hour16 = $('<div>');
var inner16 = $('<div>');
var textArea16 = $('<textarea>');
var btn16 = $('<button>');
var i16 = $('<i>');

hour16.attr('id', 'hour-16');
hour16.attr('class', 'row time-block future');
inner16.attr('class', 'col-2 col-md-1 hour text-center py-3');
inner16.text('4PM');
textArea16.attr('class', "col-8 col-md-10 description b-16");
textArea16.attr('rows', "3");
btn16.attr('class', 'btn saveBtn col-2 col-md-1');
btn16.attr('aria-label', 'save');
btn16.attr('id','b-16');
i16.attr('class', 'fas fa-save');
i16.attr('aria-hidden', 'true');

bodyContainer.append(hour16);
hour16.append(inner16);
hour16.append(textArea16);
hour16.append(btn16);
btn16.append(i16);

var timeNow16 = new Date();
timeNow16.setHours(16);

/* Hour 17 */
var hour17 = $('<div>');
var inner17 = $('<div>');
var textArea17 = $('<textarea>');
var btn17 = $('<button>');
var i17 = $('<i>');

hour17.attr('id', 'hour-17');
hour17.attr('class', 'row time-block future');
inner17.attr('class', 'col-2 col-md-1 hour text-center py-3');
inner17.text('5PM');
textArea17.attr('class', "col-8 col-md-10 description b-17");
textArea17.attr('rows', "3");
btn17.attr('class', 'btn saveBtn col-2 col-md-1');
btn17.attr('aria-label', 'save');
btn17.attr('id','b-17');
i17.attr('class', 'fas fa-save');
i17.attr('aria-hidden', 'true');

bodyContainer.append(hour17);
hour17.append(inner17);
hour17.append(textArea17);
hour17.append(btn17);
btn17.append(i17);

var timeNow17 = new Date();
timeNow17.setHours(17);

/* Display current day */
var currentDayBox = $('#currentDay'); // targeting the HTML element where the current day function will apply using the jQuery method equal to getElementById
var Day = dayjs().format('dddd, MMMM D');
currentDayBox.append(Day);

var myArray = [timeNow9, timeNow10, timeNow11, timeNow12, timeNow13, timeNow14, timeNow15, timeNow16, timeNow17]; // targeting the hours for each time block

/* Functions */

// changes color of time blocks depending on the current time (past:grey, present:red, future:green)


function colorBlocks() {
  var Hours = dayjs().hour();
  for(var i = 0; i < myArray.length; i++){
    if(myArray[i] < Hours){
     $('textarea').addClass('past').removeClass('present future');
    } else if(myArray[i] === Hours) {
      $('textarea').addClass('present').removeClass('past future');
    } else {
      $('textarea').addClass('future').removeClass('past present');
    }
  }
}
colorBlocks();


/* Add event listener for inputting any text inside time blocks */

$('.description').attr('name', 'insert something');



$('.description').on('input', function(enterData) {

 let inputText = $('.description[name]').val(); // refers to textarea

});

/* Save text to local storage */


const saveButton = function() { // this function will store inputted text on the time blocks after clicking the buttons located on the right
  
  var buttonID = $('.description[name]').val();
  localStorage.setItem('enter:', buttonID); // setting my local storage to store value inputted on the time blocks
 
}

let savedValue = localStorage.getItem('enter:');

if (savedValue !== null) {
  $('.description[name]').val(savedValue);
}

/* Add event listener to click */

$(document).on('click','.btn',saveButton);



                                                                                              


                                                                                              



