# 264 Final
Final project for web programming spring 2023. 
This project is a crossword puzzle with different levels of difficulty.
Each level has it's own theme and a different amount of words and clues. 
Easy level: 
    - This level is based on vocabulary words learned in this class. 
Medium level: 
    - This level is based on the Computer Science program at Lehigh. 
Hard level: 
    - This level is more general and is based on being an engineering student at Lehigh. 
A crossword puzzle is generated based on the player's choice. Once all the words are submitted by the player
an alert will let them know if they won or not. In the case the player filled out all the words but did not 
do it correctly, nothing will be alerted by the website. 

To create this project, the following steps were taken: 
1. The files index.html, styles.css, scripts.js and app.js were created. 
2. These were places under a public folder, where folders css and js were created. style.css was placed under css and scripts.js was placed under the js folder. 
3. Run npm init to create a package.json file.
4. Run npm to install the express, path, and fs modules. 
5. Colors were selected from color.adobe.com to pick the puzzle's color scheme. 
6. Add a title to the html file and a header with what you want to name your puzzle. 
7. Draw out in a piece of paper the formatting of the puzzles you want to create and create 3 different .txt files holding the word and the clue for each level. Place these files inside the public folder. 
HTML FILE
7. Add a container div and place the buttons you will need: easy, medium, hard and submit. 
8. Create two more divs for the table holding the clues and one for the crossword. 
App.js 