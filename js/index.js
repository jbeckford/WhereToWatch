$(function() {
  var thumbNailHtmlTemplate = detatchThumbNailHtmlTemplate();
  subscribeToSearchTermChangedEvent();
  subscribeToSubmitEvent();

  function detatchThumbNailHtmlTemplate() {
    thumbNailHtmlTemplate = $(".thumb").clone();
    removeThumbNailHtmlTemplate();
    return thumbNailHtmlTemplate;
  }

  function removeThumbNailHtmlTemplate() {
    $(".thumb").remove();
  }

  function subscribeToSearchTermChangedEvent(){
    // Use $.on(submit) or $.click to figure out when the user clicks the "submit" button
    $("#searchTerm").on("input", handleSearchTermChanged);
  }

  function handleSearchTermChanged(){
    filterMovies();
  }

  function subscribeToSubmitEvent(){
    // Use $.on(submit) or $.click to figure out when the user clicks the "submit" button
    $("#formSearchMovies").submit(handleSubmit);
  }

  function handleSubmit(){
    // Prevent a form submission using the event.preventDefault() functionUse the $.ready() handler to delay your code from executing until all DOM assets have been loaded
    event.preventDefault();
    filterMovies();
  }

  function filterMovies() {
    var searchTerm = getSearchTerm(); 
    findAndDisplayMovies(searchTerm);
  }

  function getSearchTerm(){
    return $("#searchTerm").val();
  }

  function addImage(imageId){
    getThumbNailContainer().append(getThumbNailElementHtml(imageId));
  }

  function getThumbNailContainer(){
    return $("#thumbNailsContainer.row");
  }

  function getThumbNailsContainerSelector(){
    return "#thumbNailsContainer";
  }

  function findAndDisplayMovies(moviesSearchTerm){
    var foundMovies = searchForMovies(moviesSearchTerm);
    clearImages();
    addImages(foundMovies);
  }

  function searchForMovies(moviesSearchTerm){
    var foundMovies = [];

    var pattern = new RegExp(moviesSearchTerm);

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

  function removeImage(imageId){
    $(getImageIdSelector(imageId)).remove();
  }

  function getImageIdSelector(imageId){
    return "#" + imageId;
  }

  function removeImages(images){
    for(imageIndex = 0; imageIndex < images.length; imageIndex++){
      removeImage(images[imageIndex]);
    }
  }

  function clearImages() {
    $(".thumb").remove();
    // $(getImageClassSelector()).remove();
  }

  function getImageClassSelector(){
    return ".whereToWatchImage";
  }

  function addImage2(imageId){
    getThumbNailContainer2(imageId).appendTo(getThumbNailsContainerSelector());
  }

  function getThumbNailContainer2(imageId){
    thumbNailContainer = thumbNailHtmlTemplate.clone();
    thumbNailContainer.attr("id", "imageId");
    thumbNailContainer.children(0).children(0).attr("src", getImagePathByImageId(imageId));
    thumbNailContainer.addClass(getImageClassSelector());
    return thumbNailContainer;
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

  var imageIndex = 0;
  var imageIds = ["AbstractTheArtOfDesign", "AmandaKnox", "AmySchumerTheLeatherSpecial", "ArrestedDevelopment", "AudrieAndDaisy", "Barry", "BillBurrWalkYourWayOut", "BlackMirror", "BloodLine", "BuddyThindersTruck", "CallMeFrancis", "CedricTheEntertainerLiveFromTheVille", "ChefsTableFrance", "ChefsTableNewEpisodes", "ChewingGum", "Cooked", "DanaCarveyStraightWhiteMale60", "FourSeasonsInHavana", "FullerHouse", "GabrielIglesiasImSorryForWhatISaidWhenIWasHungry", "GilmoreGirlsAYearInTheLife", "GraceAndFrankie", "HipHopEvolution", "HouseOfCards", "IDontFeelAtHomeAnymore", "JimGaffiganCinco", "KeithRichardsUnderTheInfluence", "LaNina", "LimenySticketsASeriesOfUnfortunateEvents", "Love", "LukeCage", "MakingAMurderer", "MarvelJessicaJones", "MasterOfNone", "MikrBirbigliaThankGodForJokes", "Narcos", "OneDayAtATime", "OrangeIsTheNewBlack", "SantaClaritaDiet", "StrangerThings", "TalesByLight", "Tallulah", "The13th", "TheCrown", "TheCubaLibreStory", "TheDoOver", "TheFundamentalsOfCaring", "TheOA", "TheRanch", "TheWhiteHelmets", "TokyoStories", "TonyRobbinsIAmNotYourGuru", "TrevorNoahAfraidOfTheDark", "UltimateBeastMaster", "UnbreakableKimmySchmidt", "WhatHappenedMissSimone", "WhiteRabbitProject", "WinterOnFireUkrainesFightForFreedom"];


  function getImagePathByImageId(imageId){
    return "images/moviesArt/" + imageId + ".jpg";
  }

  function getNextImageId(){
    if(imageIndex >= imageIds.length){
      imageIndex = 0;
    }

    var imageId = imageIds[imageIndex];
    imageIndex = imageIndex + 1;
    return imageId;
  }
});