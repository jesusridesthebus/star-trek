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
});
