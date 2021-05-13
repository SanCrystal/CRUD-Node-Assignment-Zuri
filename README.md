# CRUD-Node-Assignment-Zuri
A simple application that connects to the database and performs CRUD operations

### GIT URL 
    ** https://github.com/SanCrystal/CRUD-Node-Assignment-Zuri


### DEPLOYED URL ON HEROKU 
    ** https://crud-node-assignment-zuri.herokuapp.com/

##  APP ROUTES
*test id* --- *609cfe54ecde3f2cb8816b3b*



**_Home page_** >  [home](https://crud-node-assignment-zuri.herokuapp.com/)
---

**_Create New user_** >  [create a new user](https://crud-node-assignment-zuri.herokuapp.com/users/register)
---

**_Fetch single user_** >  [fetch a single user](https://crud-node-assignment-zuri.herokuapp.com/users/:id)
---

**_Fetch all users_** >  [fetch all users](https://crud-node-assignment-zuri.herokuapp.com/users)
---

**_update a user_** >  [update a user](https://crud-node-assignment-zuri.herokuapp.com/users/:id)
---

**_delete a user_** >  [delete a user](https://crud-node-assignment-zuri.herokuapp.com/users/:id)
---
## CRUD APP 
### Technology /Tools 
    1. Node
    2. Postman (route/api testing)
    3. Mongodb (database)

### requirements / application dependencies
    1. Express
    2. Mongoose
    3. Nodemon (for development purposes)

**FOLDER STRUCTURE** 


    **src**


        | --- controllers --> usersController


        | --- database --> db


        | --- models --> userSchema


        | --- router --> usersRouter


        | --- app (entry file)
    

### steps 
    - [1.] Setup an express server by requiring express and calling it.
    - [2.] Setup an ORM for interating with the database (Mongoose)

        **Mongoose Setup** 
            | --- require mongoose
            | --- declare the connection string pointing to the database of choice
            | --- connect to the database
            | --- setup a Schema
            | --- create a model 

    - [3.] Create the route with  POST method (to create/add data to the database)
    - [4.] Create a route with the GET method (to fetch data from the database)
    - [5.] Create a route with the PUT method ( to fetch and update data from the database )
    - [6.] Create a rooute with the GET method (to fetch and remove data from the database)


    - [7.] test app routes with postman and validate the Schemas and handle errors by sending a response json object message  to client. 
    
    - [8.] refactor code and abstract into conventional MVC folder structure
    - [9.] write a README.md