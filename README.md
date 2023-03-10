# My Movie DB APP

This project has been a long time in the making and the reason for it is to keep track of my own movie collection. 
#
#
## The App
The app uses:

1. React-Native
2. Expo to test and build apk
3. the MovieDb Api (personal key)
4. Firebase for storing data

#
#
## Version 1
The first version of the app is a basic design to allow a user to add and remove selected movies from a database. 

## How it works

When the app loads the first screen that you will see is the Search screen. Here you can search for a movie you want to add to your database.

For example if you wanted to add 'Stargate' you would enter the title into the search bar and click Search to find it.

After you press Search a list of films will be displayed. 

Tap on the movie title you want to look at and a Movie Details screen will apear.

On the movie details page you will be presented with a film Title, poster and synopsis for the film. To view the synopsis of the film press the red 'read more' link and a modal will me displayed. press 'close' to close the modal. 

To add the film to your collection all the user needs do is press the Add button and the movie will be stored in the database and the Details window will be closed. 

If you were to reopen the movie you have enterd into the database you will notice that where the 'Add' button was there is now a 'Remove' button. To remove the movie from the db just press it. There is no warning in version one of the app and the film will be deleted. 

## Your collection Screen 

Tap the Collection icon in the bottom nav bar to bring up your movie collection in a list. 

To view the details of one of the films in your collection press on the title you want to look at and the movie details screen will be opened.

On this screen you will see the same details as you would see if you had searched for a film and that you can remove the movie from this page.

If you choose to remove a movie press 'Remove' and you will be redirected back to your collection page and the movie you have removed will have been removed from the list. 


Version 1 dose not contain a search function for your collection database (this maybe added in a later version).

#
#
## Version 2 comming soon...... ish
In version 2 the features the app will be reciving include:
1. Warning when you try to remove a movie from the database. -- Added
2. Movie format, to show what you  have it on DVD/Blu-ray/4k. -- Added
3. Different colour button in Movie search to indicate what film is already in collection. -- Added.. Instead db is checked and if movie in db remove button displayed

### Possible Extras 
1. SQLite database (possible Version 3) with add/remove and export db
2. User Authentication (possible Version 3)
3. UI redesign - Full screen mode 