# [ChatBot Using Node JS](https://github.com/null-buster/ChatBot_NodeJS)
Welcome to our project **ChatBot Using NodeJS** !!

This application was developed with the intent to design a ChatBot that could aid in customer purchase. The customer in order to interact with the ChatBot would have to login to the application using the credentials used during sign up to access the chatbot window. This would not be feasible in a real world application but was done to fulfill our internship criteria.

![Home Page](https://github.com/null-buster/ChatBot_NodeJS/blob/master/Documentation/Images/Home_Page.jpeg)

## Instructions for running application:

Please ensure that you have the following dependencies installed before you start the application.
* bcryptjs
* body-parser
* express
* jsonwebtoken
* mongoose
* morgan
* nodemon(optional)

The project could be run by typing `npm start` from the terminal to run the **NodeJS server**. Once the server is up and running, the pages can be accessed by opening a browser and typing the full path of the `index.html` file an example of which can be `D:\VSCodeProjects\ChatBot_NodeJS\index.html`. This would open up our [Home Page](https://github.com/null-buster/ChatBot_NodeJS/blob/master/Documentation/Images/Home_Page.jpeg).

## Model Architecture:

The application is divided into three segments. The web side or the user-end has been developed using HTML, CSS and JavaScript. The router is created with Node.js and Express which receives the requests from the user and forwards then to the controller. The controller creates and reads the data models defined with the Mongoose library. The user data gets stored in the MongoDB database.

The model architecture is as follows:

![Model Architecture](https://github.com/null-buster/ChatBot_NodeJS/blob/master/Documentation/Images/model_architecture.png)

## UI Pages:

* Home Page
* Login
* Sign-up
* Chatbot
* Admin


## UI Flow:

Our application has the following UI flow:

![UI Flow](https://github.com/null-buster/ChatBot_NodeJS/blob/master/Documentation/Images/Chatbot_Flow.png)

## UI features:
The UI is written entirely using HTML, CSS, and JavaScript elements and you can get a feel of the various pages namely the [Login](https://github.com/null-buster/ChatBot_NodeJS/blob/master/Documentation/Images/login.jpeg), [Sign-up](https://github.com/null-buster/ChatBot_NodeJS/blob/master/Documentation/Images/Sign-up.jpeg) and [Admin](https://github.com/null-buster/ChatBot_NodeJS/blob/master/Documentation/Images/Admin_credentials.jpeg) from [ ChatBot_NodeJS/Documentation/Images/](https://github.com/null-buster/ChatBot_NodeJS/tree/master/Documentation/Images).

The static files needed by **Express.js** to render out the pages except for the chatbot page are present in `ChatBot_NodeJS/resources/` and the css and other static files for the chatbot are at `ChatBot_NodeJS/dist/`.

## Chatbot :

![ChatBot in action](https://github.com/null-buster/ChatBot_NodeJS/blob/master/Documentation/Images/ChatBot_NodeJS_Interaction.png)

Our application in this NodeJS implementation uses _hard coded questionnaire_ to interact with the user and those questions are present in ` ChatBot_NodeJS/chatbot.html ` file.  It records user's selection to those questions and stores them to our cloud MongoDB server along with the user's other details that they enter during login. If the user is already registered then his new responses are updated. These features are coded inside the `axios.js` file present in our `root directory`. The `URI` of our MongoDB server is present in our `server.js` file at the path `ChatBot_NodeJS/server.js /`.

Note: The chatbot dialogue flow flowchart is present [here](https://github.com/null-buster/ChatBot_NodeJS/blob/master/Documentation/Chatbot_Dialogue_Flowchart.pdf) for reference.

## Authentication Details:
The authentication backend along with our `controllers, models and routes` are present inside seperate folders inside the `server` dir. The **passwords are salted** for increased security and are decrypted for authentication verification only. The necessary code for this can be viewed inside `AuthController.js /` at the path `ChatBot_NodeJS/server/controllers/AuthController.js /`.

## Admin Page:

![Admin Page](https://github.com/null-buster/ChatBot_NodeJS/blob/master/Documentation/Images/Admin%20Page.jpeg)

The Admin Page can be accessed by entering the following credentials in the login page `username- admin@gmail.com` and `password- password`.
This is a dynamic page and is generated from the chat history table from the database and can be used to generate novel insights into consumer behavior.

## License:
[MIT](https://github.com/null-buster/ChatBot_NodeJS/blob/master/LICENSE)
