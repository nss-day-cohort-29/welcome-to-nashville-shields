
// Get and Query methods. 

let parkDataContainer = {};
let foodData = {};
let MeetUpDataNashville = {};
let concertData = {};


const searchData = {

   getResourcesPark() {
      return fetch("https://data.nashville.gov/resource/xbru-cfzi.json?$$app_token=lfAtpDX8XuYvee5T9U6FnVpFP",
      {Authorization: {Bearer: "lfAtpDX8XuYvee5T9U6FnVpFP"}})
      .then(parkDataContainer => parkDataContainer.json());
   },

    queryResourcesPark(parkSearchUserInput){
        return fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?$$app_token=lfAtpDX8XuYvee5T9U6FnVpFP&${parkSearchUserInput}=Yes`,
        {Authorization: {Bearer: "lfAtpDX8XuYvee5T9U6FnVpFP"}})
        .then(parkDataContainer => parkDataContainer.json());

    },
    
    getResourcesFood() {
        return fetch("https://localhost8088/restaurant",
        {headers: { "user-key": "b370c0e063c48a8441ba08df6238f015" }})
        .then(foodDataContainer => foodDataContainer.json());

    },

    queryResourcesFood(foodSearchUserInput){
        return fetch(`https://localhost8088?q=${foodSearchUserInput}`,
        {headers: { "user-key": "b370c0e063c48a8441ba08df6238f015" }})
        .then(foodDataContainer => foodDataContainer.json());

    },

    getResourcesMeetup(){
        return fetch("https://www.eventbriteapi.com/v3/events/search/?token=MSVL4Q3GQBOU2GKYHRP2#",
        {Authorization: {Bearer: "MSVL4Q3GQBOU2GKYHRP2#"}})
        .then(MeetUpNashville => MeetUpNashville.json());
    },

    queryResourcesMeetup (meetupSearchUserInput){
        return fetch(`https://www.eventbriteapi.com/v3/events/search/?token=MSVL4Q3GQBOU2GKYHRP2&q=${meetupSearchUserInput}&location.latitude=86.78&location.longitude=36.16`,
        {Authorization: {Bearer: "MSVL4Q3GQBOU2GKYHRP2#"}})
        .then(MeetUpNashville => MeetUpNashville.json());
    },

    getResourcesConcert(){
        return fetch("https://app.ticketmaster.com/discovery/v2/events.json?apikey=55BlEfJmY55sowbvAYAaU7P5KzxOGaOL",
        {Authorization: {Bearer: "55BlEfJmY55sowbvAYAaU7P5KzxOGaOL"}})
        .then(concertData => concertData.json());
   
    },

    queryResourcesConcert (concertSearchUserInput){
         return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=55BlEfJmY55sowbvAYAaU7P5KzxOGaOL?q=${concertSearchUserInput}`,
         {Authorization: {Bearer: "55BlEfJmY55sowbvAYAaU7P5KzxOGaOL"}})
         .then(concertData => concertData.json());
   
    }   


   };

// searchData.getResourcesPark()
// .then(fetchedResourceData => {
//     console.log(fetchedResourceData);
// });

// searchData.getResourcesFood()
// .then(fetchedFoodData => {
//     console.log(fetchedFoodData);
// });
   
// searchData.getResourcesConcert()
// .then(fetchedConcertData => {
//     console.log(fetchedConcertData);
// });

searchData.queryResourcesMeetup("code")
.then(fetchedMeetupData => {
    console.log(fetchedMeetupData);
});

// parkData.queryResources("swimming_pool")
// .then(userQuery => {
//     console.log (userQuery);

// });


// parkData.getResources()
// .then(fetchedData => {
//     console.log(fetchedData);
// });
   




