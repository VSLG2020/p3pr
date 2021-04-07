const express = require('express');
const exptress_graphql = require('expres_graphql');
const {buildSchema} = require('graphql');

// graphQL schema Section
const schema = buildSchema(`
    type Query {
        message: String
    }
`);


// Root REsolver
const root = {
    message: () => 'Hello WORLD'
};

//Create an express server and a a Grahphql endpoint

const app = express();
app.user('/graphql', exptress_graphql({
    schema: schema, 
    rootValue: root,
    graphiql: true
}));


app.listenerCount(4000, () => console.log('Express GraphQL Server Now Running on Localhost:4000/graphql'))