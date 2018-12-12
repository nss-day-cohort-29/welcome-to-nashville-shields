
// added eventListener that listens whenever we write something in the park search field 
// and shows the result.
document.querySelector("#search--button_parks").addEventListener("click", function(ParkSearchResult){
    let parkUserInput = document.querySelector("#search--userInput__parks");
     let parkSearchUserInput = parkUserInput.value;
     let parkClass =  document.querySelector(".park_search_input");
     parkClass.textContent = parkSearchUserInput;
 });
 
 document.querySelector(".park_search_button").addEventListener("click", function(ParkSearchSaved){
let ParkSaveButtonResults = document.querySelector(".ParkResultSaved");
let  FianlParkItenireary = document.querySelector("#search--userInput__parks");
ParkSaveButtonResults.textContent = FianlParkItenireary.value;
console.log(ParkSaveButtonResults);
});


//  added eventListener that listens whenever we write something in the food search field 
//  and shows the result.
    document.querySelector("#search--button_food").addEventListener("click", function(foodSearchResult){
    let foodUserInput = document.querySelector("#search--userInput__food");
     let foodSearchUserInput = foodUserInput.value;
     let foodClass = document.querySelector(".FoodResultTemp");
     foodClass.textContent = foodSearchUserInput;
     console.log(foodSearchUserInput);
 });
 document.querySelector(".food_search_button").addEventListener("click", function(foodSearchSaved){
    let foodSaveButtonResults = document.querySelector(".FoodResultSaved");
    let  FianlfoodItenireary = document.querySelector("#search--userInput__food");
   foodSaveButtonResults.textContent = FianlfoodItenireary.value;
    console.log(foodSaveButtonResults);
    });


//  added eventListener that listens whenever we write something in the meet-ups search field 
//  and shows the result.
 document.querySelector("#search--button_meetups").addEventListener("click", function(meetupsSearchResult){
    let meetupsUserInput = document.querySelector("#search--userInput__meetups"); 
    let meetupsSearchUserInput = meetupsUserInput.value;
    let meetupsCLass = document.querySelector(".MeetupResultTemp");
    meetupsCLass.textContent = meetupsSearchUserInput;
     console.log(meetupsSearchUserInput);
 });
 document.querySelector(".MeetupResultTempButton").addEventListener("click", function(meetupsSearchSaved){
    let MeetupSaveButtonResults = document.querySelector(".MeetupResultSaved");
    let  FianlMeetupItenireary = document.querySelector("#search--userInput__meetups");
    MeetupSaveButtonResults.textContent = FianlMeetupItenireary.value;
    console.log(MeetupSaveButtonResults);
    });



//  added eventListener that listens whenever we write something in the concerts search field 
//  and shows the result.
 document.querySelector("#search--button_concerts").addEventListener("click", function(concertsSearchResult){
    let concertsUserInput = document.querySelector("#search--userInput__concerts");
     let concertsSearchUserInput = concertsUserInput.value;
     let concertClass = document.querySelector(".ConcertsResultTemp");
     concertClass.textContent = concertsSearchUserInput;
     console.log(concertsSearchUserInput);
 });
 document.querySelector(".ConcertsResultTempButton").addEventListener("click", function(concertsSearchSaved){
    let concertsSaveButtonResults = document.querySelector(".ConcertsResultSaved");
    let  FianlconcertsItenireary = document.querySelector("#search--userInput__concerts");
    concertsSaveButtonResults.textContent = FianlconcertsItenireary.value;
    console.log(concertsSaveButtonResults);
    });
