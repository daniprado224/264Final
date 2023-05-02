/* 
Elyse Adamo
Daniella Prado 
Luisa Slomp
CSE 264- Final Project: CrossWord Puzzle 
This file is for the client of the crossword puzzle */

// Values to store which puzzle is currently being played
let easyPuzzle = false;
let medPuzzle = false;
let hardPuzzle = false;

// Function that adds the easy puzzle clues and creates the easy puzzle with information from the server
function easyMake() {
  easyPuzzle = true;
  $.ajax(
    "/easymake", 
    {   
      type: "GET",
      processData: false,
      dataType: "json",
      success: function(info) {
        $("#websitetitle").empty(); 
        $("#websitetitle").append("Web Systems Programming Crossword Puzzle"); 
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

// Function that adds the medium puzzle clues and creates the medium puzzle with information from the server
function medMake() {
  medPuzzle = true;
  $.ajax(
    "/medmake", 
    {   
      type: "GET",
      processData: false,
      dataType: "json",
      success: function(info) { 
        $("#websitetitle").empty(); 
        $("#websitetitle").append("Lehigh Computer Science Crossword Puzzle"); 
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

// Function that adds the hard puzzle clues and creates the hard puzzle with information from the server
function hardMake() {
  hardPuzzle = true;
  $.ajax(
    "/hardmake", 
    {   
      type: "GET",
      processData: false,
      dataType: "json",
      success: function(info) {  
        $("#websitetitle").empty(); 
        $("#websitetitle").append("Life at Lehigh Crossword Puzzle");         
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


// Function to check which puzzle is being played and check if the entered letters are correct
function submit(){
  var elements = document.getElementsByTagName("input");; // Get all elements that have input
  let str = "";
  for(i = 0; i < elements.length; i++) {
    if(elements[i].type == "text") {
      str = str + elements[i].value; // If the element is a textbox, add its value to the string
    }
  }
  var act = "";
  $("#websitetitle").empty();
  if(easyPuzzle == true){
    act = "tyjpaovghjavascriptjamaplxhy";
    if(str == act){ // Check if it is right for easy puzzle
      $("#websitetitle").append("You won!");     
    }
    else{
      $("#websitetitle").append("You did not win, try again.");
    }
    easyPuzzle = false;
  }
  else if(medPuzzle == true){
    act = "pgiifcapstonenhmwicsuicubsshntlearsandbox";
    if(str == act){ // check if it is right for med puzzle
      $("#websitetitle").append("You won!");     
    }
    else{
      $("#websitetitle").append("You did not win, try again.");
    }
    medPuzzle = false;
  }
  else if(hardPuzzle == true){
    act = "clutchuflelafpackardisanbtdhelblerrgoodmanmiarathboney";
    if(str == act){ // check if it is right for hard puzzle
      $("#websitetitle").append("You won!");     
    }
    else{
      $("#websitetitle").append("You did not win, try again.");
    }
    hardPuzzle = false;
  }
  $("#results").empty();
  $("#centered").empty();
}