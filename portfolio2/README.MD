For this Portfolio 2 assignment, I revisited  Lab 11 from Week 13. I added a lot of styling to the console output. 

	To run this project use...
			
			node index.js

	...In the terminal/commandline of this projects directory.

I used two npm packages to do this: Colors and CFonts.

    CFonts: https://www.npmjs.com/package/cfonts

    Colors: https://www.npmjs.com/package/colors

Please install these with npm if the project does not work. (npm install colors, npm install cfonts)

As the assignment requested, the effects of these color changes are indeed "obvious";
Some of the colors used are a bit ridiculous but I will use a saner color scheme for projects I put in my actual portfolio.

Here is how the console.log text is styled:

    The text from the database output uses "America" as the color scheme. It is also bold and underlined and has the "inverse" option applied. I used the Colors package to style this text.
    
    The "Connected" and "Disconnected" messages are styled using CFonts and are much larger than their default size and include a gradient and a different font.
    
    The Error message is styled with "Trap". To see an error, simply remove any letter from the mongodb URL, save and run node index.js again. I recommend removing the .net portion of the url if you wish to see the styled error text.
