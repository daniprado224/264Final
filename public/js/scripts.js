/* 
Elyse Adamo
Daniella Prado 
Luisa Slomp
CSE 264- Final Project: CrossWord Puzzle 
This file is for the backend of the crossword puzzle */

$(function () {
    $("#easy").click((evt) =>{  
      console.log("easy");
    });
});

$(function () {
  $("#med").click((evt) =>{  
    console.log("med");
  });
});

$(function () {
  $("#hard").click((evt) =>{  
    console.log("hard");
  });
});

function easyMake() {
  $.ajax(
    "/search", 
    {   
      type: "GET",
      processData: false,
      dataType: "json",
      success: function(info) {  
        $("#container").html(info);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        alert("Error: " + jqXHR.responseText);
        alert("Error: " + textStatus);
        alert("Error: " + errorThrown);
      }
    }
  );
}