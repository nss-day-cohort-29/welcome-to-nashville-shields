const data = {
    getResources() {
      return fetch("https://app.ticketmaster.com/discovery/v2/events.json?apikey=55BlEfJmY55sowbvAYAaU7P5KzxOGaOL")
      .then(function(response){
        response.json();
      })
      .then(response => response.json());
    }
  };
  console.log(getResources)