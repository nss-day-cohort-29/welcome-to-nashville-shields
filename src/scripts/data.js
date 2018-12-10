let concertData = {};
fetch("https://app.ticketmaster.com/discovery/v2/events.json?apikey=55BlEfJmY55sowbvAYAaU7P5KzxOGaOL",
   {Authorization: {Bearer: "55BlEfJmY55sowbvAYAaU7P5KzxOGaOL"}})
   .then(concertData => concertData.json())
   .then(concertData => {
       console.table(concertData);
    });
    



 