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
        $("#websitetitle").empty(); 
        $("#websitetitle").append("Easy Crossword Puzzle"); 
        $("#centered").empty(); 
        $("#centered").append("Easy Puzzle Clues:").addClass("clue");
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
  $.ajax(
    "/makeeasypuzzle", 
    {   
      type: "GET",
      processData: false,
      dataType: "json",
      success: function(info) {
        $("#results").empty(); 
        $("#results").append(info.contents).addClass("puzzle");
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
        $("#websitetitle").empty(); 
        $("#websitetitle").append("Medium Crossword Puzzle"); 
        $("#centered").empty(); 
        $("#centered").append("Medium Puzzle Clues:").addClass("clue");;
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
  $.ajax(
    "/makemedpuzzle", 
    {   
      type: "GET",
      processData: false,
      dataType: "json",
      success: function(info) {
        $("#results").empty(); 
        $("#results").append(info.contents).addClass("puzzle");
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
        $("#websitetitle").empty(); 
        $("#websitetitle").append("Hard Crossword Puzzle");         
        $("#centered").empty(); 
        $("#centered").append("Hard Puzzle Clues:").addClass("clue");
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
  $.ajax(
    "/makehardpuzzle", 
    {   
      type: "GET",
      processData: false,
      dataType: "json",
      success: function(info) {
        $("#results").empty(); 
        $("#results").append(info.contents).addClass("puzzle");
      },
      error: function(jqXHR, textStatus, errorThrown) {
        alert("Error: " + jqXHR.responseText);
        alert("Error: " + textStatus);
        alert("Error: " + errorThrown);
      }
    }
  );
}

function easysend() {
  $.ajax(
    "/easysend", 
    {   
      type: "GET",
      processData: false,
      dataType: "json",
      success: function(info) {
        $("#results").empty(); 
        $("#centered").append(info.contents).addClass("clue");
      },
      error: function(jqXHR, textStatus, errorThrown) {
        alert("Error: " + jqXHR.responseText);
        alert("Error: " + textStatus);
        alert("Error: " + errorThrown);
      }
    }
  );
}

function submit(){
  var elements = $('input:text'); // get all text box values
  if($('input:text').text() == "tyjpaovghjavascriptjamaplxhy"){ // check if it is right for easy puzzle
    $("#centered").append(elements);
    $("#centered").append("winner");
  }
  else{
    $("#results").empty();
    $("#centered").append(elements);
    $("#centered").append("loser");
  }
}