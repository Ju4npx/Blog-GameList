# Blog Gamelist

Blog-like web application to rate, explore, add and consult your favorite games and those of others using the MEVN stack.

*API, CRUD, image upload, likes function, search function, JWT, google authentication.*

## [Try demo](https://blog-gamelist.herokuapp.com/)

<img src="./preview.jpeg">

### Table of contents 📃

- [Blog Gamelist](#my-unsplash---simple-clone)
    - [Table of contents 📃](#table-of-contents-)
  - [Starting 🚀](#starting-)
    - [Pre-requirements 📋](#pre-requirements-)
    - [Installation 🔧](#installation-)
  - [Deployment 📦](#deployment-)
  - [Built with 🛠️](#built-with-️)


## Starting 🚀
  
### Pre-requirements 📋

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/es/download/)
* [Vue.js 3](https://vuejs.org/guide/quick-start.html)
* [Mongo database](https://www.mongodb.com/)

### Installation 🔧

Local installation:

```bash
# Clone this repository
$ git clone https://github.com/Ju4npx/Blog-GameList.git

# Change directory to the project path
$ cd Blog-GameList
```

Server setup:
```bash
# Change directory to the server path
$ cd server_express

# Install dependencies
$ npm install

# Copy .env file
$ cp .env.example .env
```

server **.env** file setup:

```shell
PORT=5000
MONGODB_CNN=mongodb+srv://user:password@clusterrestaurant.rgq1n.mongodb.net/schema
JWT_SECRET_KEY=RANDOMKEY

GOOGLE_CLIENT_ID=your-client-id.apps.googleusercontent.com

CLOUDINARY_URL=cloudinary://your-cloudinary-url@user
```

Client setup:
```bash
# Go back to the project path
$ cd ..

# Change directory to the client path
$ cd client_vue

# Install dependencies
$ npm install
```
> If you changed the port in the server .env file, you should change the client's base URL in "**client-vue/src/main.js**" >> "**axios.defaults.baseURL**"

## Deployment 📦

```bash
# Go to the project path
$ cd ..

# Change directory to the server path and run
$ cd server_express
$ npm run dev

$ cd ..

# Change directory to the client path and run
$ cd client_vue
$ npm run serve
```
Open [http://localhost:8080](http://localhost:8080) to view it in your browser.

## Built with 🛠️

Stack MEVN:

* [MongoDB](https://www.mongodb.com/) - NoSQL database
* [Express.js](https://expressjs.com/) - Backend framework
* [Vue.js](https://es.vuejs.org/) - Frontend framework
* [Node.js](https://nodejs.org/) - Javascript runtime environment

---
⌨️ with ❤️ by [Juan Pablo Machado](https://github.com/Ju4npx ) 😊 