$(function(){
  $("#formOne").submit(function(event){
    var ageInput = parseInt($('input#age').val());
    var adventureType = $('#adventure-type').val();

    $('.TOS').hide();
    $('.TNG').hide();
    $('.DS9').hide();

    if(ageInput >= 50 && adventureType === "Cheesy"){
      $('.TOS').show('slow');

    }else if (ageInput > 50 && adventureType === "Adventurous"){
      $('.TNG').show('slow');

    }else if (ageInput > 50 && adventureType === "Battle!"){
      $('.DS9').show('slow');

    }else if (ageInput >= 35 && ageInput <=49 && adventureType ==="Cheesy"){
      $('.TOS').show('slow');

    }else if (ageInput >=35 && ageInput <=49 && adventureType === "Adventurous"){
      $('.TNG').show('slow');

    }else if (ageInput >=35 && ageInput <=49 && adventureType === "Battle!"){
      $('.DS9').show('slow');

    }else if (ageInput < 35 && adventureType === "Cheesy"){
      $('.TOS').show('slow');

    }else if (ageInput < 35  && adventureType === "Adventurous"){
      $('.TNG').show('slow');

    }else if (ageInput < 35  && adventureType === "Battle!"){
      $('.DS9').show('slow');
    }
    event.preventDefault();
  });

  $("#captain-quiz").submit(function(event) {
    var diplomacy = $("input:radio[name=first-question]:checked").val();
    var firstOfficer = $("input:radio[name=second-question]:checked").val();
    var klingon = $("input:radio[name=third-question]:checked").val();

    $(".picard").hide();
    $(".kirk").hide();
    $(".janeway").hide();

    if(diplomacy === "kirk")
    console.log(kirk);
  });
});
