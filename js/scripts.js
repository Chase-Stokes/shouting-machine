$(document).ready(function(){
  $("#formOne").submit(function(event){
    const toShout = $("input#toShout").val().toUpperCase().concat("!!!!");

    $(".toShout").text(toShout);

    event.preventDefault();
  })
})