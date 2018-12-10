let MeetUpDataNashvile = {};
fetch("https://www.eventbriteapi.com/v3/events/search/?token=MSVL4Q3GQBOU2GKYHRP2#",
    {Authorization: {Bearer: "MSVL4Q3GQBOU2GKYHRP2#"}})
    .then(MeetUpNashvile => MeetUpNashvile.json())
    .then(MeetUpNashvile => {
        console.table(MeetUpNashvile)})
const parkData = {
    getResources() {
      return fetch("https://data.nashville.gov/resource/xbru-cfzi.json")
      .then(function(response){
        response.json()
    })
    .then(response => console.log(response));
    },
    queryResources(userInput) {
      return fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?q=${userInput}`)
      .then(response => response.json());
    }
  };

  parkData.getResources();
