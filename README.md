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
8. Do a git add, commit, and push. 
HTML FILE
9. Add a container div and place the buttons you will need: easy, medium, hard and submit. 
10. Create two more divs for the table holding the clues and one for the crossword. 
11. Do a git add, commit, and push. 
App.js 
12. Read in all the .txt files and create a Word object holding word number, word, and clue.
13. fix each of the words by correctly separating them by newline and comma. 
14. Create routers to create each of the clues appear on the clues div per level.
15. Create other routers to create each of the puzzles per level. 
16. Do a git add, commit and push. 
Script.js 
17. Create functions to make the clues appear on the text box and connect to the routers made in app.js.
18. Create function to make the puzzle appear on the text box and connect to the routers made in app.js. 
19. Create an ajax function to send information back and forth. 
20. Create functions to send in results per each level. 
21. Create a function for the submit button. 
Style.css
22. Add any desired styles to the web page. 