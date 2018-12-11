
// added eventListener that listens whenever we write something in the park search field 
// and shows the result.
document.querySelector("#search--button_parks").addEventListener("click", function(event){
    let parkUserInput = document.querySelector("#search--userInput__parks");
     let parkSearchUserInput = parkUserInput.value;
     let parkClass = document.querySelector(".park_search_input");
     parkClass.textContent = parkSearchUserInput;
 });
//  added eventListener that listens whenever we write something in the food search field 
//  and shows the result.
 document.querySelector("#search--button_food").addEventListener("click", function(event){
    let foodUserInput = document.querySelector("#search--userInput__food");
     let foodSearchUserInput = foodUserInput.value;
     let foodClass = document.querySelector(".FoodResultTemp");
     foodClass.textContent = foodSearchUserInput;
     console.log(foodSearchUserInput);
 });
//  added eventListener that listens whenever we write something in the meet-ups search field 
//  and shows the result.

 document.querySelector("#search--button_meetups").addEventListener("click", function(event){
    let meetupsUserInput = document.querySelector("#search--userInput__meetups"); 
    let meetupsSearchUserInput = meetupsUserInput.value;
    let meetupsCLass = document.querySelector(".MeetupResultTemp");
    meetupsCLass.textContent = meetupsSearchUserInput;
     console.log(meetupsSearchUserInput);
 });
//  added eventListener that listens whenever we write something in the concerts search field 
//  and shows the result.
 document.querySelector("#search--button_concerts").addEventListener("click", function(event){
    let concertsUserInput = document.querySelector("#search--userInput__concerts");
     let concertsSearchUserInput = concertsUserInput.value;
     let concertClass = document.querySelector(".ConcertsResultTemp");
     concertClass.textContent = concertsSearchUserInput;
     console.log(concertsSearchUserInput);
 });






