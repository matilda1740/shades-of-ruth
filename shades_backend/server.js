import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import prettyjson from 'prettyjson'

const app = express(); 

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

// app.post("/mpesa", (request, response) => {
//     console.log('----------- Received M-Pesa -----------');
//     console.log(prettyjson.render(request.body))
//     console.log('----------- DONE -----------');

//     response.json("SUCCESS MESSAGE")
// })

// const server = app.listen(5000, () => {
//   let host = server.address().address;
//   let port = server.address().port;
//   console.log(`server listening on port ${port}` );
// });