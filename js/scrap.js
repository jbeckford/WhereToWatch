  function findAndDisplayMovies(moviesSearchTerm){
    var foundMovies = searchForMovies(moviesSearchTerm);
    clearImages();
    addImages(foundMovies);
  }

  function searchForMovies(moviesSearchTerm){
    var foundMovies = [];

    var pattern = new RegExp(moviesSearchTerm, "i");

    for(imageIdIndex = 0; imageIdIndex < imageIds.length; imageIdIndex++) {
      if(pattern.test(imageIds[imageIdIndex])){
        foundMovies.push(imageIds[imageIdIndex]);
      }
    }
    return foundMovies;
  }

  function simulateSearch(moviesSearchTerm) {
    var foundMovies = [];
    startingIndex = Math.floor((Math.random() * imageIds.length)); 

    for(i = 0; i < 10; i++){
      foundMovies[i] = imageIds[(startingIndex + i) % imageIds.length];
    }

    return foundMovies;
  }

  function addImages(images){
    for(imageIndex = 0; imageIndex < images.length; imageIndex++){
      addImage2(images[imageIndex]);
    }
  }

  function addImage(imageId){
    getThumbNailContainer().append(getThumbNailElementHtml(imageId));
  }

    this.findVideosFake = function(moviesSearchTerm){
      var foundMovies = [];

      var pattern = new RegExp(moviesSearchTerm, "i");
      var thisProviderVideoPattern = new RegExp(this.providerName.charAt(0), "i");

      for(imageIdIndex = 0; imageIdIndex < imageIds.length; imageIdIndex++) {
        if(thisProviderVideoPattern.test(this.videos[imageIdIndex]) && pattern.test(imageIds[imageIdIndex])){
          foundMovies.push(this.videos[imageIdIndex]);
        }
      }
      return foundMovies;
    };

  function getNextImageId(){
    if(imageIndex >= imageIds.length){
      imageIndex = 0;
    }

    var imageId = imageIds[imageIndex];
    imageIndex = imageIndex + 1;
    return imageId;
  }

  function monthSorter(a, b) {
    if (a.month < b.month) return -1;
    if (a.month > b.month) return 1;
    return 0;
  }

  function getThumbNailElementHtmlByImageId(imageId){
    return "<div class=\"col-lg-3 col-md-4 col-xs-6 thumb\">" +
           "<a class=\"thumbnail\" href=\"#\">" + 
           "<img class=\"img-responsive\" " +
           "src=\"smiley.gif\" alt=\"\" " +
           "</a>" +
           "</div>";
  }

  function getThumbNailElementHtml(imageId){
    return "<div class=\"col-lg-3 col-md-4 col-xs-6 thumb\">" +
           "<a class=\"thumbnail\" href=\"#\">" + 
           "<img class=\"img-responsive\" " + 
           "src=\"" + 
           getImagePathByImageId(imageId) + 
           "\" alt=\"\"" +
           // "style=\"width:400px;height:300px;border:0\"" + 
           ">" + 
           "</a>" +
           "</div>";
  }

  function removeImages(images){
    for(imageIndex = 0; imageIndex < images.length; imageIndex++){
      removeImage(images[imageIndex]);
    }
  }

  function removeImage(imageId){
    $(getImageIdSelector(imageId)).remove();
  }

  function getImageIdSelector(imageId){
    return "#" + imageId;
  }

  function displayProviderVideos(){
    var videoProviderControls = $(getVideoProviderFilterControlClassSelector())
    $(getImageClassSelector()).hide();

    for(var videoProviderControlIndex = 0; videoProviderControlIndex < videoProviderControls.length; videoProviderControlIndex++) {
      if(videoProviderControls[videoProviderControlIndex].checked){
        $("." + getVideoProviderName(videoProviderControls[videoProviderControlIndex].id));

      }

    }
  }
  function addImage2(imageId){
    getThumbNailContainer2(imageId).appendTo(getThumbNailsContainerSelector());
  }

