# NYT-Movie-Reviews

This application allows users to search for Movie Reviews published by the New York Times (some dating all the way back to the early 20th century!)

## Setup Instructions

- Run ```git clone https://github.com/MTCawthray/nyt-movie-reviews.git``` into the terminal of your local machine.
- Run ```npm install``` to install dependencies
- Run ```npm start``` to open page in the browser

## Using the App

When the page first loads, the user will notice three things:
- a header that includes a search bar
- a list of 'Critic's Picks' articles on the left side bar
- a New York Times watermarked logo in the display area

If a user clicks on any of the articles listed in the side bar, the display area will populate with more details about the chosen article, as well as a link to the full article on the New York Times website.

A user can search for a query with the searchbar located in the header of the App. When submitted, the results of their search appear in the side bar and a user can click on a chosen article to see the details appear in the display area, just like  the aforementioned 'Critic's Picks'.

- full screen view:

![ezgif com-gif-maker](https://user-images.githubusercontent.com/81891209/140532403-c2b2bff4-714b-4a53-a807-a4b46cc2b7de.gif)

- mobile view:

![ezgif com-gif-maker copy](https://user-images.githubusercontent.com/81891209/140531803-4f7ebe1c-cd87-4d23-b5d9-091583edca1f.gif)


## Future Features

- Make the article list display a dropdown menu from the header. This will help with UI/UX, especially in mobile view.

- End to end cypress testing for all user flows. I ran out of time for the scope of this project, but would like to add flows for searching a query, clicking on an article, and viewing the critic's picks.

## Contributing

[Mark Cawthray](https://github.com/MTCawthray)
