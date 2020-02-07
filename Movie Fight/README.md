Website where you can compare the movies.

Used http://www.omdbapi.com/ for movie reference.

Used https://bulma.io/ for css framework.

Used Axios for fetching the data.

Notice that when you click the title after typing it, it will automaticall change the title that you typed. 

For searching the movie, the first thing that we will do is do it by title(parameter s) and the another code for the details (parameter i).

When user search for a movie, they will see the details and highlights the difference/better scores.

Created different JS files for utilities and autocomplete so the min index.js file looks clean and easier to understand

The Focus on this app/Website :

The goal on the createAutoComplete function is to create a widget that is reusable. If not for this function, you will need to go to all code and change them one by one . You can basically use it to other projects if you'll use bulma. 


Whenever we create a reusable widget, it is important to loacate all the html for that inside the widget itself instead of on the html file. If you'll add it on the HTML file, for every autocomplete you want to show, will need to put it inside the html file. 

How to figure out how to run the comparison between the movies. On movieTemplete function, we decided upfront to extract all the relevant values(info) and store them inside of our DOM. It made it easier to pull them out later on from the runComparison function by simply finding those elements and referencing the appropriate data setvalue. 
