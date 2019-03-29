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

    var diplomacy = $("input:radio[name=first-question]:checked").val();
    var firstOfficer = $("input:radio[name=second-question]:checked").val();
    var klingon = $("input:radio[name=third-question]:checked").val();

    var diplomacyKirk = $("input:radio[name=first-question]:checked").attr("kirk1");
    var firstOfficerKirk = $("input:radio[name=first-question]:checked").attr("kirk2");
    var klingonKirk = $("input:radio[name=first-question]:checked").attr("kirk3");

    var diplomacyPicard = $("input:radio[name=second-question]:checked").attr("picard1");
    var firstOfficerPicard = $("input:radio[name=second-question]:checked").attr("picard2");
    var klingonPicard = $("input:radio[name=second-question]:checked").attr("picard3");

    var diplomacyJaneway = $("input:radio[name=third-question]:checked").attr("janeway1");
    var firstOfficerJaneway = $("input:radio[name=third-question]:checked").attr("janeway2");
    var klingonJaneway = $("input:radio[name=third-question]:checked").attr("janeway3");

    if(diplomacy === diplomacyKirk && firstOfficer === diplomacyKirk && klingon === klingonKirk) {
      $(".captain-kirk").show();
    }
    console.log("diplomacy", diplomacy);
    console.log("firstOfficer", firstOfficer);
    console.log("klingon", klingon);
  });
});
