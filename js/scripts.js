$(function(){
  $("#formOne").submit(function(event){
    $(".TOS").hide();
    $(".TNG").hide();
    $(".DS9").hide();

    var ageInput = parseInt($("input#age").val());
    var adventureType = $("#adventure-type").val();

    if(ageInput >= 50 && adventureType === "Cheesy"){
      $(".TOS").show("slow");

    } else if (ageInput > 50 && adventureType === "Adventurous"){
      $(".TNG").show("slow");

    } else if (ageInput > 50 && adventureType === "Battle!"){
      $(".DS9").show("slow");

    } else if (ageInput >= 35 && ageInput <=49 && adventureType ==="Cheesy"){
      $(".TOS").show("slow");

    } else if (ageInput >=35 && ageInput <=49 && adventureType === "Adventurous"){
      $(".TNG").show("slow");

    } else if (ageInput >=35 && ageInput <=49 && adventureType === "Battle!"){
      $(".DS9").show("slow");

    } else if (ageInput < 35 && adventureType === "Cheesy"){
      $(".TOS").show("slow");

    } else if (ageInput < 35  && adventureType === "Adventurous"){
      $(".TNG").show("slow");

    } else if (ageInput < 35  && adventureType === "Battle!"){
      $(".DS9").show("slow");
    }
    event.preventDefault();
  });

  $("#captain-quiz").submit(function(event) {
    event.preventDefault();
    $(".captain-picard").hide();
    $(".captain-kirk").hide();
    $(".captain-janeway").hide();
    $(".red-shirt").hide();

    var diplomacy = $("input:radio[name=first-question]:checked").val();
    var firstOfficer = $("input:radio[name=second-question]:checked").val();
    var klingon = $("input:radio[name=third-question]:checked").val();

    if (diplomacy === "kirk1" && firstOfficer === "kirk2" && klingon === "kirk3") {
      $(".captain-kirk").show();
    } else if (diplomacy === "kirk1" && firstOfficer === "kirk2") {
      $(".captain-kirk").show();
    } else if (firstOfficer === "kirk2" && klingon === "kirk3") {
      $(".captain-kirk").show();
    } else if (diplomacy === "kirk1" && klingon === "kirk3") {
      $(".captain-kirk").show();
    } else if (diplomacy === "picard1" && firstOfficer === "picard2" && klingon === "picard3") {
      $(".captain-picard").show();
    } else if (diplomacy === "picard1" && firstOfficer === "picard2") {
      $(".captain-picard").show();
    } else if (firstOfficer === "picard2" && klingon === "picard3") {
      $(".captain-picard").show();
    } else if (diplomacy === "picard1" && klingon === "picard3") {
      $(".captain-picard").show();
    } else if (diplomacy === "janeway1" && firstOfficer === "janeway2" && klingon === "janeway3") {
      $(".captain-janeway").show();
    } else if (diplomacy === "janeway1" && firstOfficer === "janeway2") {
      $(".captain-janeway").show();
    } else if (firstOfficer === "janeway2" && klingon === "janeway3") {
      $(".captain-janeway").show();
    } else if (diplomacy === "janeway1" && klingon === "janeway3") {
      $(".captain-janeway").show();
    } else {
      $(".red-shirt").show();
    }
  });
});
