function getRandomImage() {
  const randomImageApiUrl = "https://dog.ceo/api/breeds/image/random";

  // we are using fetch api to make rest api calls. you can use axios use.
  // we are also using promises here.
  fetch(randomImageApiUrl)
    .then(function (response) {
      // we get raw response. need to first convert it into json format so we can use the data easily
      return response.json();
    })
    .then(function (json) {
      var imageUrl = json.message;
      var img = document.createElement("img");
      img.src = imageUrl;
      document.getElementById("photos").appendChild(img);
    })
    .catch(function (error) {
      // if any error occurs like no internet connection then this callback will be called
      console.log(error);
    });
}
for (let i = 0; i <= 15; i++) {
  getRandomImage();
}
