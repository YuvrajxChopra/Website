# whisper.web

A Full-stack Social Media website made using MERN stack (MongoDB, ExpressJS, ReactJS & NodeJS) and chatengine.io/socket.io. It is platform that is like your typical social media website post, with friends, like, comment, & chatting features and the overall theme of the social media platform is that it prompts free speech and has no restrictions for your post.


Features list:
- Login/Register
- Homepage (lets you post and create posts)
- Create Post
- Comment
- Like
- Profile Page
- Make Friends
- Chat Room
- Dark Mode


## How to run


1. Unzip the file
2. Open up the command prompt and type:
   ``` cd Website ```
   ``` cd client ```
   ``` npm install ```
   after it is done
   ``` cd.. ```
   ``` cd server ```
   ``` npm install ```
3. Create a .env file inside the **./server** folder and put:
    ```
    MONGO_URL = "?"
    JWT_SECRET = '?'
    CHAT_ENGINE_PRIVATE_KEY = "?"
    CHAT_ENGINE_PROJECT_ID= "?"
    PORT = 3001
    ```
    replace the **?** with your credentials.
4. Open up the project and you have to find **chatPage.jsx** file inside the **client** folder (location would be **./client/src/scenes/ChatPage/chatPage.jsx** ) and then change line 43:
   ``` "chatengineprojectapi" ``` with your api for the chatengine.io.
5. Finally, just run the client.
   ``` npm start ```
   
