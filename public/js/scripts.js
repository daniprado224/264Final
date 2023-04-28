/* 
Elyse Adamo
Daniella Prado 
Luisa Slomp
CSE 264- Final Project: CrossWord Puzzle 
This file is for the backend of the crossword puzzle */

function easyMake() {
  $.ajax(
    "/easymake", 
    {   
      type: "GET",
      processData: false,
      dataType: "json",
      success: function(info) {
        $("#centered").empty(); 
        $("#centered").append("Clues");
        $("#centered").append("<br></br>");
        $("#centered").append(info.contents);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        alert("Error: " + jqXHR.responseText);
        alert("Error: " + textStatus);
        alert("Error: " + errorThrown);
      }
    }
  );
}

function medMake() {
  $.ajax(
    "/medmake", 
    {   
      type: "GET",
      processData: false,
      dataType: "json",
      success: function(info) {  
        $("#centered").empty(); 
        $("#centered").append("Clues");
        $("#centered").append("<br></br>");
        $("#centered").append(info.contents);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        alert("Error: " + jqXHR.responseText);
        alert("Error: " + textStatus);
        alert("Error: " + errorThrown);
      }
    }
  );
}

function hardMake() {
  $.ajax(
    "/hardmake", 
    {   
      type: "GET",
      processData: false,
      dataType: "json",
      success: function(info) {  
        $("#centered").empty(); 
        $("#centered").append("Clues");
        $("#centered").append("<br></br>");
        $("#centered").append(info.contents);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        alert("Error: " + jqXHR.responseText);
        alert("Error: " + textStatus);
        alert("Error: " + errorThrown);
      }
    }
  );
}