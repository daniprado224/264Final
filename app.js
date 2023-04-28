const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs"); 
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
//console.log(easylines); 
const mediumlines = mediumwords.split("\n"); 
const hardlines = hardwords.split("\n"); 

const fixeasy  = easylines.map( 
  // Passing a function to method map
  (line, index) => {
    const l = line.trim().split(", "); // Split each line based on the commas
    let num = l[0];
    let myword = l[1]; 
    let myclue = l[2]; 
    
    // Print out and return all the songs that are created, replacing different characters as specified in the assignment instructions
    console.log(new Words(num, myword, myclue));
    return new Words(l[0],  l[1], l[2]); // Create new song object that creates title, artist, and number one properties
    //return 1; 
  }
)

const fixmedium  = mediumlines.map( 
  // Passing a function to method map
  (line, index) => {
    const l = line.trim().split(", "); // Split each line based on the commas
    let num = l[0];
    let myword = l[1]; 
    let myclue = l[2]; 
    // Print out and return all the songs that are created, replacing different characters as specified in the assignment instructions
    console.log(new Words(num, myword, myclue));
    return new Words(l[0],  l[1], l[2]); // Create new song object that creates title, artist, and number one properties
    //return 1; 
  }
)

const fixhard  = hardlines.map( 
  // Passing a function to method map
  (line, index) => {
    const l = line.trim().split(", "); // Split each line based on the commas
    let num = l[0];
    let myword = l[1]; 
    let myclue = l[2]; 
    // Print out and return all the songs that are created, replacing different characters as specified in the assignment instructions
    console.log(new Words(num, myword, myclue));
    return new Words(l[0],  l[1], l[2]); // Create new song object that creates title, artist, and number one properties
    //return 1; 
  }
)

const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

app.use(function(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Invalid Request.");
});

app.listen(3000);