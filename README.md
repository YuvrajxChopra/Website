# whisper.web

A Full-stack Social Media website made using MERN stack and chatengine.io/socket.io with this platform lets you post (text and images for now) and let others react to that post and comment, also have the option to create profiles and users can chat with each other as well.
Features list:
- Login/Register
- Homepage (lets you post and create posts)
- Create Post
- Comment
- Like
- Profile Page
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
   
