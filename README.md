# 454Project

# Instructions for testing:

## Known issues (please read first):
Unfortunately we were unable to connect the frontend and backend of our project. To elaborate, actions that require saving to a database do not work. For example, signing up does not actually create an account however the UI does work. So if you entered in a password, the view password button does show or hide the password. Other features that do not work: signing in, saving user or recruiter profiles, and getting job matches.

## Getting started:
1. Install and open Visual Studio Code
2. Go to File > Open Folder and select where you have the project code
3. In Visual Studio Code, add the Live Server extension
4. Make sure you have the file index.html selected and open in VS Code
5. On the blue bar across the window, click "Go Live" on the bottom right. This should open up a new tab in your browser and you should see the home page for Linker! If the broswer does not open up automatically, you can go to http://127.0.0.1:[PORT NUMBER]/index.html where the PORT NUMBER is the port number displayed by Live Server when you clicked the "Go Live" button.


# !!! Development Instructions under construction !!!

## How to start the server

1.Run the command: $ node app

You will see Server running on port 8082.
You can also check it from the browser: open the browser and enter http://localhost:8082

2. Wf we change anything, we need to restart the server manually.

## Connecting to MongoDB

1. In Mongo, Click on the CONNECT button and fill in the username and password form for your database.
2. Hit the Create MongoDB User button. You can also choose either your current IP address or a different IP address, it’s up to you.
3. If you follow the CONNECT button or the Choose a connection method button, you will see some different methods.
4. Select the Connect Your Application section.
5. In your terminal, run the command: $ node app

## Run the project in dev mode

1. Go to the cis454_app folder
2. To run the app in development mode: $ npm start
3. Now open http://localhost:3000 to view it in the browser. This page will automatically reload if you make changes to the code.
