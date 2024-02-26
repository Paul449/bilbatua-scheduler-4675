// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var bodyContainer = $('body').children().eq(1);

                                                                                      /*jQuery selectors section*/




                                                                                            /*time blocks*/
  // In this section, I will define the rest of the time blocks                                                                                        

                                                                                            /*hour 9 10 and 11*/
var hour9;

var hour10;

var hour11;



                                                                                            /*hour 12 */

var hour12 = $('<div>');

var inner12 = $('<div>');

var textArea12 = $('<textarea>');

var btn12 = $('<button>');

var i12 = $('<i>');

hour12.attr({id:'hour-12', class:'row time-block future'});


inner12.attr('class','col-2 col-md-1 hour text-center py-3');

inner12.text('12PM');

textArea12.attr({class:"col-8 col-md-10 description", rows:"3"});

btn12.attr({class:'btn saveBtn col-2 col-md-1', 'aria-label':'save'});

i12.attr({class:'fas fa-save', 'aria-hidden':'true'});


bodyContainer.append(hour12);

hour12.append(inner12);

hour12.append(textArea12);

hour12.append(btn12);

btn12.append(i12);

var timeNow12 = new Date();

timeNow12.setHours(12);



                                                                                            /*hour 13*/

var hour13 = $('<div>');

var inner13 = $('<div>');

var textArea13 = $('<textarea>');

var btn13 = $('<button>');

var i13 = $('<i>');

hour13.attr('id','hour-13');

hour13.attr('class','row time-block future');

inner13.attr('class','col-2 col-md-1 hour text-center py-3');

inner13.text('1PM');

textArea13.attr('class',"col-8 col-md-10 description");

textArea13.attr('rows',"3");

btn13.attr('class','btn saveBtn col-2 col-md-1');

btn13.attr('aria-label','save');

i13.attr('class','fas fa-save');

i13.attr('aria-hidden','true');

bodyContainer.append(hour13);

hour13.append(inner13);

hour13.append(textArea13);

hour13.append(btn13);

btn13.append(i13);

var timeNow13 = new Date();

timeNow13.getHours(13);



                                                                                            /*hour 14*/ 

var hour14 = $('<div>');

var inner14 = $('<div>');

var textArea14 = $('<textarea>');

var btn14 = $('<button>');

var i14 = $('<i>');

hour14.attr('id','hour-14');

hour14.attr('class','row time-block future');

inner14.attr('class','col-2 col-md-1 hour text-center py-3');

inner14.text('2PM');

textArea14.attr('class',"col-8 col-md-10 description");

textArea14.attr('rows',"3");

btn14.attr('class','btn saveBtn col-2 col-md-1');

btn14.attr('aria-label','save');

i14.attr('class','fas fa-save');

i14.attr('aria-hidden','true');

bodyContainer.append(hour14);

hour14.append(inner14);

hour14.append(textArea14);

hour14.append(btn14);

btn14.append(i14);

var timeNow14 = new Date();

timeNow14.setHours(14);



                                                                                            /*hour 15 */

var hour15 = $('<div>');

var inner15 = $('<div>');

var textArea15 = $('<textarea>');

var btn15 = $('<button>');

var i15 = $('<i>');

hour15.attr('id','hour-15');

hour15.attr('class','row time-block future');

inner15.attr('class','col-2 col-md-1 hour text-center py-3');

inner15.text('3PM');

textArea15.attr('class',"col-8 col-md-10 description");

textArea15.attr('rows',"3");

btn15.attr('class','btn saveBtn col-2 col-md-1');

btn15.attr('aria-label','save');

i15.attr('class','fas fa-save');

i15.attr('aria-hidden','true');

bodyContainer.append(hour15);

hour15.append(inner15);

hour15.append(textArea15);

hour15.append(btn15);

btn15.append(i15);

var timeNow15 = new Date();

timeNow15.getHours(15);




                                                                                            /*hour 16 */

var hour16 = $('<div>');

var inner16 = $('<div>');

var textArea16 = $('<textarea>');

var btn16 = $('<button>');

var i16 = $('<i>');

hour16.attr('id','hour-16');

hour16.attr('class','row time-block future');

inner16.attr('class','col-2 col-md-1 hour text-center py-3');

inner16.text('4PM');

textArea16.attr('class',"col-8 col-md-10 description");

textArea16.attr('rows',"3");

btn16.attr('class','btn saveBtn col-2 col-md-1');

btn16.attr('aria-label','save');

i16.attr('class','fas fa-save');

i16.attr('aria-hidden','true');

bodyContainer.append(hour16);

hour16.append(inner16);

hour16.append(textArea16);

hour16.append(btn16);

btn16.append(i16);

var timeNow16 = new Date();

timeNow16.setHours(16);



                                                                                            /*hour 17 */

var hour17 = $('<div>');

var inner17 = $('<div>');

var textArea17 = $('<textarea>');

var btn17 = $('<button>');

var i17 = $('<i>');

hour17.attr('id','hour-17');

hour17.attr('class','row time-block future');

inner17.attr('class','col-2 col-md-1 hour text-center py-3');

inner17.text('5PM');

textArea17.attr('class',"col-8 col-md-10 description");

textArea17.attr('rows',"3");

btn17.attr('class','btn saveBtn col-2 col-md-1');

btn17.attr('aria-label','save');

i17.attr('class','fas fa-save');

i17.attr('aria-hidden','true');

bodyContainer.append(hour17);

hour17.append(inner17);

hour17.append(textArea17);

hour17.append(btn17);

btn17.append(i17);

var timeNow17 = new Date();

timeNow17.setHours(17);




                                                                                            /*display current day*/

var currentDayBox = $('#currentDay'); // targeting the HTML element where the current day function will apply using the jQuery method equal to getElementById

var Day = dayjs().format('dddd, MMMM D: ');

var Hours = dayjs().format('h:mm A');

currentDayBox.append(Day);

currentDayBox.append(Hours);

var myArray = [timeNow12,timeNow13,timeNow14,timeNow15,timeNow16,timeNow17];

var myhours = [hour12,hour13,hour14,hour15,hour16,hour17];



                                                                                            /*functions */



function colorBlocks() { // changes color of timeblocks depend on the current time (past:grey, present:red, future:green)

for(var i = 0; i < myArray; i++){

  console.log(myArray[i]);
}
}
  
colorBlocks();


function saveButton() {  // function which performs the task to save text inside the timeblocks and display a text saying "Appointment added to local storage";



}

function refreshWP() { //function which refresh webpage and keeps the text inside of it without erasing it.



}

                                                                                              /* addEventListeners */


                                                                                              


$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
