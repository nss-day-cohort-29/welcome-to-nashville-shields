
// Get and Query methods.  long,lat,loc within, 5mi, ?q=

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
        return fetch("http://localhost:8088/restaurants",
        {headers: { "user-key": "b370c0e063c48a8441ba08df6238f015" }})
        .then(foodDataContainer => foodDataContainer.json());
    },

    queryResourcesFood(foodSearchUserInput){
        return fetch(`http://localhost:8088/restaurants?q=${foodSearchUserInput}`,
        {headers: { "user-key": "b370c0e063c48a8441ba08df6238f015" }})
        .then(foodDataContainer => foodDataContainer.json());
    },

    getResourcesMeetup(){
        return fetch("https://www.eventbriteapi.com/v3/events/search/?token=MSVL4Q3GQBOU2GKYHRP2#",
        {Authorization: {Bearer: "MSVL4Q3GQBOU2GKYHRP2#"}})
        .then(MeetUpNashville => MeetUpNashville.json());
    },

//BROKEN
    queryResourcesMeetup (meetupSearchUserInput){
        return fetch(`https://www.eventbriteapi.com/v3/events/search?q=&location.within=5mi&location.latitude=36.16&location.longitude=86.78&token=MSVL4Q3GQBOU2GKYHRP2#&${meetupSearchUserInput}`,
        {Authorization: {Bearer: "MSVL4Q3GQBOU2GKYHRP2#"}})
        .then(MeetUpNashville => MeetUpNashville.json());
    },

    getResourcesConcert(){
        return fetch("https://app.ticketmaster.com/discovery/v2/events.json?apikey=55BlEfJmY55sowbvAYAaU7P5KzxOGaOL",
        {Authorization: {Bearer: "55BlEfJmY55sowbvAYAaU7P5KzxOGaOL"}})
        .then(concertData => concertData.json());
    },

//BROKEN
    queryResourcesConcert (concertSearchUserInput){
        return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=55BlEfJmY55sowbvAYAaU7P5KzxOGaOL&?q=${concertSearchUserInput}`,
        {Authorization: {Bearer: "55BlEfJmY55sowbvAYAaU7P5KzxOGaOL"}})
        .then(concertData => concertData.json());
}   


};
// API DATA REQUEST TEST
//    searchData.getResourcesPark()
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

// searchData.getResourcesMeetup()
// .then(fetchedMeetupData => {
//     console.log(fetchedMeetupData);
// });

//API SEARCH TEST
// searchData.queryResourcesConcert("Paul")
// .then(userQuery => {
//     console.log (userQuery);
// });

// searchData.queryResourcesFood("Burger")
// .then(userQuery => {
//     console.log (userQuery);
// });

searchData.queryResourcesMeetup("code")
.then(userQuery => {
    console.log (userQuery);
});


// searchData.queryResourcesPark("disc_golf")
// .then(userQuery => {
//     console.log (userQuery);
// });

// let concertData = {};
// fetch("https://app.ticketmaster.com/discovery/v2/events.json?apikey=55BlEfJmY55sowbvAYAaU7P5KzxOGaOL",
//    {Authorization: {Bearer: "55BlEfJmY55sowbvAYAaU7P5KzxOGaOL"}})
//    .then(concertData => concertData.json())
//    .then(concertData => {
//        console.table(concertData);
//     });

// parkData.getResources()
// .then(fetchedData => {
//     console.log(fetchedData);
// });
   

// parkData.queryResources("swimming_pool")
// .then(userQuery => {
//     console.log (userQuery);

// });

// Zomato API - Nick

// let foodData = {};
// fetch("https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&count=10&radius=25",
//    {headers: {
//         "user-key": "b370c0e063c48a8441ba08df6238f015"
// }})
//     .then(foodData => foodData.json())
//     .then(foodData => {
//         console.table(foodData);
//     });

// //Dek's API
// let MeetUpDataNashvile = {};
// fetch("https://www.eventbriteapi.com/v3/events/search/?token=MSVL4Q3GQBOU2GKYHRP2#",
//     {Authorization: {Bearer: "MSVL4Q3GQBOU2GKYHRP2#"}})
//     .then(MeetUpNashvile => MeetUpNashvile.json())
//     .then(MeetUpNashvile => {
//         console.table(MeetUpNashvile);
//       });

