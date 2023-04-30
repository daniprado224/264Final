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
  let accross = "<strong>Across:</strong>"; 
  across = accross + "<br></br>"; 
  let down = "<strong>Down:</strong>";
  down = down + "<br></br>";
  for(let i = 0; i < 5; i++){
    if(i + 1 === 1){
      accross = across + (i+1).toString();
      accross = accross + ". ";
      across = accross + fixeasy[i].clue;
      accross = across + "<br></br>";
      across = accross + "\n";
    }else{
        down = down + (i+1).toString();
        down = down + ". ";
        down = down + fixeasy[i].clue;
        down = down + "<br></br>";
        down = down + "\n";
    }
  }
  let str = "";
  str = across + down; 
  let obj = {contents: str};
  res.end(JSON.stringify(obj)); 
})

app.get("/medmake", (req, res) => {
  let str = "";
  let accross = "<strong>Across:</strong>"; 
  across = accross + "<br></br>"; 
  let down = "<strong>Down:</strong>";
  down = down + "<br></br>";
  for(i = 0; i < 8; i++){
    if(i+1 === 3 || i+1 === 4 || i+1 === 6 || i+1 === 8){
      accross = across + (i+1).toString();
      accross = accross + ". ";
      across = accross + fixmedium[i].clue;
      accross = across + "<br></br>";
      across = accross + "\n";
    }else{
      down = down + (i+1).toString();
      down = down + ". ";
      down = down + fixmedium[i].clue;
      down = down + "<br></br>";
      down = down + "\n";
    }
  }
  str = across + down; 
  let obj = {contents: str};
  res.end(JSON.stringify(obj)); 
})

app.get("/hardmake", (req, res) => {
  let str = "";
  let accross = "<strong>Across:</strong>"; 
  across = accross + "<br></br>"; 
  let down = "<strong>Down:</strong>";
  down = down + "<br></br>";

  for(i = 0; i < 10; i++){
    if(i+1 === 1 || i+1 === 4 || i+1 === 6 || i+1 === 8 || i+1 === 9){
      accross = across + (i+1).toString();
      accross = accross + ". ";
      across = accross + fixhard[i].clue;
      accross = across + "<br></br>";
      across = accross + "\n";
    }else{
      down = down + (i+1).toString();
      down = down + ". ";
      down = down + fixhard[i].clue;
      down = down + "<br></br>";
      down = down + "\n";
    }
  }
  str = across + down; 
  // console.log(str);
  let obj = {contents: str};
  res.end(JSON.stringify(obj)); 
})


app.get("/makeeasypuzzle", (req, res) => { 
  let index = 0;
  let temp = "";
  let str = "      t         y      j  p      a  o      v  g  hjavascript j    a  m a    p  l x    h         y   ";
  let jCount = 0; // Counter to track number of 'j's found
  let aCount = 0; // Counter to track number of 'a's found
  let hCount = 0; // Counter to track number of 'h's found
  let tCount = 0;
  for(i = 0; i < 10; i++){
    temp = temp + "<tr>"; // Since we are entering a new row each loop, add a new opening tr tag
    for(j = 0; j < 10; j++){
      if(str[index] == undefined){
        break;
      }
      if(str[index] === " "){
        temp = temp + "<td>&nbsp;</td>"; // Add empty space to the cell
      } else {
        if(str[index] === "j" && jCount === 0){ // java
          temp = temp + '<td><input type="text" maxlength="1" id="23"style="background-color: white; display: inline-block; width: 40px; height: 40px;">3</input></td>';
          jCount++;
        } else if(str[index] === "j" && jCount === 1){ // javascript
          temp = temp + '<td><input type="text" maxlength="1" style="background-color: white; display: inline-block; width: 40px; height: 40px;">1</input></td>';
          jCount++;
        } else if(str[index] === "h" && hCount === 0){ // html
          temp = temp + '<td><input type="text" maxlength="1" style="background-color: white; display: inline-block; width: 40px; height: 40px;">4</input></td>';
          hCount++;
        } else if(str[index] === "t" && tCount === 0){ // typography
          temp = temp + '<td><input type="text" maxlength="1" style="background-color: white; display: inline-block; width: 40px; height: 40px;">5</input></td>';
          tCount++;
        } else if(str[index] === "a" && aCount === 1){ // ajax
          temp = temp + '<td><input type="text" maxlength="1" style="background-color: white; display: inline-block; width: 40px; height: 40px;">2</input></td>';
        } else {
          temp = temp + '<td><input type="text" maxlength="1" style="background-color: white; display: inline-block; width: 40px; height: 40px;"></input></td>'; // Add white box to the cell
        } 
        if(str[index] === "a"){ // Increment the 'a' counter if an 'a' is found
          aCount++;
        }
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
  let fCount = 0; // Counter to track number of 'j's found
  let sCount = 0; // Counter to track number of 'a's found
  let wCount = 0; // Counter to track number of 'h's found
  let gCount = 0;
  let cCount = 0;
  let pCount = 0;
  for(i = 0; i < 10; i++){
    temp = temp + "<tr>"; // Since we are entering a new row each loop, add a new opening tr tag
    for(j = 0; j < 11; j++){
      if(str[index] == undefined){
        break;
      } 
      if(str[index] === " "){
        temp = temp + "<td>&nbsp;</td>"; // Add empty space to the cell
      //add numbers to boxes
      }else {
        if(str[index] === "f" && fCount === 0){ // femister
          temp = temp + '<td><input type="text" maxlength="1" style="background-color: white; display: inline-block; width: 40px; height: 40px;">1</input></td>';
          fCount++;
        } else if(str[index] === "s" && sCount === 1){ // sunlab
          temp = temp + '<td><input type="text" maxlength="1" style="background-color: white; display: inline-block; width: 40px; height: 40px;">2</input></td>';
        }else if(str[index] === "s" && sCount === 4){ // sunbox
          temp = temp + '<td><input type="text" maxlength="1" style="background-color: white; display: inline-block; width: 40px; height: 40px;">3</input></td>';
        }else if(str[index] === "s" && sCount === 2){ // ssh
          temp = temp + '<td><input type="text" maxlength="1" style="background-color: white; display: inline-block; width: 40px; height: 40px;">8</input></td>';
        } else if(str[index] === "w" && wCount === 0){ // wics
          temp = temp + '<td><input type="text" maxlength="1" style="background-color: white; display: inline-block; width: 40px; height: 40px;">4</input></td>';
          wCount++;
        } else if(str[index] === "g" && gCount === 0){ // github
          temp = temp + '<td><input type="text" maxlength="1" style="background-color: white; display: inline-block; width: 40px; height: 40px;">5</input></td>';
          gCount++;
        } else if(str[index] === "c" && cCount === 0){ // capstone
          temp = temp + '<td><input type="text" maxlength="1" style="background-color: white; display: inline-block; width: 40px; height: 40px;">6</input></td>';
          cCount++;
        } else if(str[index] === "p" && pCount === 0){ // picnic
          temp = temp + '<td><input type="text" maxlength="1" style="background-color: white; display: inline-block; width: 40px; height: 40px;">7</input></td>';
          pCount++;
        } else {
          temp = temp + '<td><input type="text" maxlength="1" style="background-color: white; display: inline-block; width: 40px; height: 40px;"></input></td>'; // Add white box to the cell
        } if(str[index] === "s"){ // Increment the 's' counter if an 's' is found
          sCount++;
        }
      }
      index = index + 1; // Move to the next value of grid
    }

    temp = temp + "</tr>"; // Since we are entering a new row each loop, add a new opening tr tag

  }
  
  let obj = {contents: temp};
  res.end(JSON.stringify(obj)); 
})


app.get("/makehardpuzzle", (req, res) => { 
  let index = 0;
  let temp = "";
  let str = "clutch              u    f lelaf    packard  i        s  a   n        b  t   d          helble           r   r     goodman   m           i   a         rathbone          y      ";
  let pCount = 0; // Counter to track number of 'j's found
  let hCount = 0; // Counter to track number of 'a's found
  let cCount = 0; // Counter to track number of 'h's found
  let lCount = 0;
  let rCount = 0;
  let gCount = 0;
  let fCount = 0;
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
        if(str[index] === "p" && pCount === 0){ // packard
          temp = temp + '<td><input type="text" maxlength="1" style="background-color: white; display: inline-block; width: 40px; height: 40px;">1</div></td>';
          pCount++;
        } else if(str[index] === "c" && cCount === 2){ // csb
          temp = temp + '<td><input type="text" maxlength="1" style="background-color: white; display: inline-block; width: 40px; height: 40px;">3</div></td>';
          cCount++;
        }else if(str[index] === "c" && cCount === 0){ // clutch
          temp = temp + '<td><input type="text" maxlength="1" style="background-color: white; display: inline-block; width: 40px; height: 40px;">5</div></td>';
          cCount++;
        }else if(str[index] === "c" && cCount === 1){ // cup
          temp = temp + '<td><input type="text" maxlength="1" style="background-color: white; display: inline-block; width: 40px; height: 40px;">10</div></td>';
          cCount++;
        } else if(str[index] === "l" && lCount === 2){ // linderman
          temp = temp + '<td><input type="text" maxlength="1" style="background-color: white; display: inline-block; width: 40px; height: 40px;">4</div></td>';
          lCount++;
        } else if(str[index] === "l" && lCount === 1){ // lelaf
          temp = temp + '<td><input type="text" maxlength="1" style="background-color: white; display: inline-block; width: 40px; height: 40px;">6</div></td>';
          lCount++;
        } else if(str[index] === "r" && rCount === 3){ // rathbone
          temp = temp + '<td><input type="text" maxlength="1" style="background-color: white; display: inline-block; width: 40px; height: 40px;">7</div></td>';
          rCount++;
        } else if(str[index] === "g" && gCount === 0){ // goodman
          temp = temp + '<td><input type="text" maxlength="1" style="background-color: white; display: inline-block; width: 40px; height: 40px; 40px;">8</div></td>';
          gCount++;
        } else if(str[index] === "f" && fCount === 0){ // fraternity
          temp = temp + '<td><input type="text" maxlength="1" style="background-color: white; display: inline-block; width: 40px; height: 40px;">9</div></td>';
          fCount++;
        } else {
          temp = temp + '<td><input type="text" maxlength="1" style="background-color: white; display: inline-block; width: 40px; height: 40px;"></div></td>'; // Add white box to the cell
        } 
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