import express, { response } from "express";
import { PORT, MONGODBURL } from "./config.js";
import mongoose from "mongoose";
import cors from "cors";
import booksRoute from "./routes/bookRoute.js"


const app = express();

//Middleware for parsing request body
app.use(express.json());

//Middleware for handling CORS policy
app.use(cors());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('hi');
});

app.use('/books', booksRoute);


mongoose
    .connect(MONGODBURL)
    .then(() => {
        console.log("App connected to database");
        app.listen(PORT, () => {
            console.log(`App is listening to: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    })