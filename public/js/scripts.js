/* 
Elyse Adamo
Daniella Prado 
Luisa Slomp
CSE 264- Final Project: CrossWord Puzzle 
This file is for the backend of the crossword puzzle */

let easyPuzzle = false;
let medPuzzle = false;
let hardPuzzle = false;

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
  var elements = document.getElementsByTagName("input");; // get all elements that have input
  let str = "";
  for(i = 0; i < elements.length; i++) {
    if(elements[i].type == "text") {
      str = str + elements[i].value; // if the element is a textbox, add its value to the string
    }
  }
  var act = "";
  $("#websitetitle").empty();
  if(easyPuzzle == true){
    act = "tyjpaovghjavascriptjamaplxhy";
    if(str == act){ // check if it is right for easy puzzle
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