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