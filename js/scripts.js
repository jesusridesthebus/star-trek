$(function(){
  $("#formOne").submit(function(event){
    var ageInput = parseInt($('input#age').val());
    var adventureType = $('#adventure-type').val();

    if(ageInput >= 50 && adventureType === "Cheesy"){
      $('.TOS').show('slow');
      // $('.TNG').remove('.TNG');
      // $('.DS9').remove('.DS9');


    }else if (ageInput > 50 && adventureType === "Adventurous"){
      $('.TNG').show('slow');
      // $('.TOS').remove('.TOS');
      // $('.DS9').remove('.DS9');

    }else if (ageInput > 50 && adventureType === "Battle!"){
      $('.DS9').show('slow');
      // $('.TNG').remove('.TNG');
      // $('.TOS').remove('.TOS');

    }else if (ageInput >= 35 && ageInput <=49 && adventureType ==="Cheesy"){
      $('.TOS').show('slow');
      // $('.TNG').remove('.TNG');
      // $('.TOS').remove('.TOS');

    }else if (ageInput >=35 && ageInput <=49 && adventureType === "Adventurous"){
      $('.TNG').show('slow');
      // $('.TNG').remove('.TNG');
      // $('.TOS').remove('.TOS');

    }else if (ageInput >=35 && ageInput <=49 && adventureType === "Battle!"){
      $('.DS9').show('slow');
      // $('.TNG').remove('.TNG');
      // $('.TOS').remove('.TOS');

    }else if (ageInput < 35 && adventureType === "Cheesy"){
      $('.TOS').show('slow');
      // $('.TNG').remove('.TNG');
      // $('.TOS').remove('.TOS');

    }else if (ageInput < 35  && adventureType === "Adventurous"){
      $('.TNG').show('slow');
      // $('.TNG').remove('.TNG');
      // $('.TOS').remove('.TOS');

    }else if (ageInput < 35  && adventureType === "Battle!"){
      $('.DS9').show('slow');
      // $('.TNG').remove('.TNG');
      // $('.TOS').remove('.TOS');
    }

  // $('.btn').click(function(){
  //   $('.TNG').remove();
  //   $('.DS9').remove();
  //   $('.TOS').remove();
  // })

    event.preventDefault();
  });
});
