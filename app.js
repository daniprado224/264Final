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
console.log(fixhard); 

app.get("/easymake", (req, res) => {
  let str = "";
  for(i = 0; i < 5; i++){
    str = str + (i+1).toString();
    str = str + " ";
    str = str + fixeasy[i].clue;
    str = str + "<br></br>";
    str = str + "\n";
  }
  console.log(str);
  let obj = {contents: str};
  res.end(JSON.stringify(obj)); 
})

app.get("/medmake", (req, res) => {
  let str = "";
  for(i = 0; i < 8; i++){
    str = str + (i+1).toString();
    str = str + " ";
    str = str + fixmedium[i].clue;
    str = str + "<br></br>";
    str = str + "\n";
  }
  console.log(str);
  let obj = {contents: str};
  res.end(JSON.stringify(obj)); 
})

app.get("/hardmake", (req, res) => {
  let str = "";
  for(i = 0; i < 10; i++){
    str = str + (i+1).toString();
    str = str + " ";
    str = str + fixhard[i].clue;
    str = str + "<br></br>";
    str = str + "\n";
  }
  console.log(str);
  let obj = {contents: str};
  res.end(JSON.stringify(obj)); 
})


app.use(function(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Invalid Request.");
});

app.listen(3000);