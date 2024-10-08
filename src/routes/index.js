import express from "express";
import phrase from "./phraseRouter.js";
import cors from "cors";

const routes = (app) => {
    app.use(
        express.json(),
        cors(), 
        phrase
    );
}

export default routes;