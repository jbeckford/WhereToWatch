$(function() {
  var thumbNailHtmlTemplate = detatchThumbNailHtmlTemplate();

  subscribeToSubmitEvent();

  function detatchThumbNailHtmlTemplate() {
    thumbNailHtmlTemplate = $(".thumb").clone();
    removeThumbNailHtmlTemplate();
    return thumbNailHtmlTemplate;
  }

  function removeThumbNailHtmlTemplate() {
    $(".thumb").remove();
  }

  function subscribeToSubmitEvent(){
    // Use $.on(submit) or $.click to figure out when the user clicks the "submit" button
    $("#submit-btn").click(handleSubmit);
  }

  function handleSubmit(){
    // Prevent a form submission using the event.preventDefault() functionUse the $.ready() handler to delay your code from executing until all DOM assets have been loaded
    event.preventDefault();
    addImage2(getNextImageId());    
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

  function addImage2(imageId){
    getThumbNailContainer2(imageId).appendTo(getThumbNailsContainerSelector());
  }

  function getThumbNailContainer2(imageId){
    thumbNailContainer = thumbNailHtmlTemplate.clone();
    thumbNailContainer.attr("id", "imageId");
    thumbNailContainer.children(0).children(0).attr("src", getImagePathByImageId(imageId));
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