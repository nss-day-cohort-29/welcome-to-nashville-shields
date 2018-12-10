let MeetUpDataNashvile = {};
fetch("https://www.eventbriteapi.com/v3/events/search/?token=MSVL4Q3GQBOU2GKYHRP2#",
    {Authorization: {Bearer: "MSVL4Q3GQBOU2GKYHRP2#"}})
    .then(MeetUpNashvile => MeetUpNashvile.json())
    .then(MeetUpNashvile => {
        console.table(MeetUpNashvile)})
