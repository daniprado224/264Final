const express = require("express");
const path = require("path");
const fs = require("fs"); 
const app = express();
const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

const easywords = fs.readFileSync("easywords.txt", "utf8"); // Read the csv file in 
const mediumwords = fs.readFileSync("mediumwords.txt", "utf8"); // Read the csv file in 
const hardwords = fs.readFileSync("hardwords.txt", "utf8"); // Read the csv file in 

class Words{
  constructor(number, word, clue){
    this.number = number; 
    this.word = word; 
    this.clue = clue; 
  }
}
const easylines = easywords.split("\n"); 
const mediumlines = mediumwords.split("\n"); 
const hardlines = hardwords.split("\n"); 

const fixeasy  = easylines.map( 
  // Passing a function to method map
  (line, index) => {
    const l = line.trim().split(", "); // Split each line based on the commas
    let num = l[0];
    let myword = l[1]; 
    let myclue = l[2]; 
    return new Words(l[0], l[1], l[2]); 
  }
)

const fixmedium  = mediumlines.map( 
  // Passing a function to method map
  (line, index) => {
    const l = line.trim().split(", "); // Split each line based on the commas
    let num = l[0];
    let myword = l[1]; 
    let myclue = l[2]; 
    return new Words(l[0],  l[1], l[2]); 
  }
)

const fixhard  = hardlines.map( 
  // Passing a function to method map
  (line, index) => {
    const l = line.trim().split(", "); // Split each line based on the commas
    let num = l[0];
    let myword = l[1]; 
    let myclue = l[2]; 
    return new Words(l[0],  l[1], l[2]); 
  }
)

app.get("/easymake", (req, res) => {
  let str = "";
  for(i = 0; i < 5; i++){
    str = str + (i+1).toString();
    str = str + ". ";
    str = str + fixeasy[i].clue;
    str = str + "<br></br>";
    str = str + "\n";
  }
  // console.log(str);
  let obj = {contents: str};
  res.end(JSON.stringify(obj)); 
})

app.get("/medmake", (req, res) => {
  let str = "";
  for(i = 0; i < 8; i++){
    str = str + (i+1).toString();
    str = str + ". ";
    str = str + fixmedium[i].clue;
    str = str + "<br></br>";
    str = str + "\n";
  }
  // console.log(str);
  let obj = {contents: str};
  res.end(JSON.stringify(obj)); 
})

app.get("/hardmake", (req, res) => {
  let str = "";
  for(i = 0; i < 10; i++){
    str = str + (i+1).toString();
    str = str + ". ";
    str = str + fixhard[i].clue;
    str = str + "<br></br>";
    str = str + "\n";
  }
  // console.log(str);
  let obj = {contents: str};
  res.end(JSON.stringify(obj)); 
})


app.get("/makeeasypuzzle", (req, res) => { 
  let index = 0;
  let temp = "";
  let str = "      t         y      j  p      a  o      v  g  hjavascript j    a  m a    p  l x    h         y   ";
  for(i = 0; i < 10; i++){
    temp = temp + "<tr>"; // Since we are entering a new row each loop, add a new opening tr tag
    for(j = 0; j < 10; j++){
      if(str[index] == undefined){
        break;
      }
      if(str[index] === " "){
        temp = temp + "<td>&nbsp;</td>"; // Add empty space to the cell
      } else {
        temp = temp + '<td><div style="background-color: white; display: inline-block; width: 40px; height: 40px;"></div></td>'; // Add white box to the cell
      }
      index = index + 1; // Move to the next value of grid
    }

    temp = temp + "</tr>"; // Since we are entering a new row each loop, add a new opening tr tag

  }
  
  let obj = {contents: temp};
  res.end(JSON.stringify(obj)); 
})


app.get("/makemedpuzzle", (req, res) => { 
  let index = 0;
  let temp = "";
  let str = "  p   g      i   i  f   capstone   n   h  m  wics u  i   c u b ssh    n    t     l    e     a    r sandbox    ";
  for(i = 0; i < 10; i++){
    temp = temp + "<tr>"; // Since we are entering a new row each loop, add a new opening tr tag
    for(j = 0; j < 11; j++){
      if(str[index] == undefined){
        break;
      }
      temp = temp + "<td>"; // Since we are entering a new column each loop, add a new opening td tag
      if(str[index] != " ") {
        temp = temp + "<div style='background-color: white; display: inline-block; width: 40px; height: 40px;'>&nbsp;</div>"; // Add a white box
      } else {
        temp = temp + "&nbsp;"; // Add an empty space
      }
      index = index + 1; // Move to the next value of grid
      temp = temp + "</td>"; // Close the column tag
    }
    temp = temp + "</tr>"; // Close the row tag
  }
  let obj = { contents: temp };
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(obj));
});


app.get("/makehardpuzzle", (req, res) => { 
  let index = 0;
  let temp = "";
  let str = "clutch              u    f lelaf    packard  i        s  a   n        b  t   d           e   e           r   r     goodman   m           i   a         rathbone          y      ";
  for(i = 0; i < 11; i++){
    temp = temp + "<tr>"; // Since we are entering a new row each loop, add a new opening tr tag
    for(j = 0; j < 16; j++){
      if(str[index] == undefined){
        break;
      }
      console.log(str[index]);
      temp = temp + "<td>"; // Since we are entering a new column each loop, add a new opening td tag
      
      if(str[index] === " "){
        temp = temp + "<td>&nbsp;</td>"; // Add empty space to the cell
      } else {
        temp = temp + '<td><div style="background-color: white; display: inline-block; width: 40px; height: 40px;"></div></td>'; // Add white box to the cell
      }
      index = index + 1; // Move to the next value of grid
    }

    temp = temp + "</tr>"; // Since we are entering a new row each loop, add a new opening tr tag

  }
  
  let obj = {contents: temp};
  res.end(JSON.stringify(obj)); 
})



app.use(function(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Invalid Request.");
});

app.listen(3000);