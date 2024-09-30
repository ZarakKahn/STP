//server.js
const express = require("express");
const sql = require("mssql");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// SQL Server configuration
var config = {
    "user": "powerbi", 
    "password": "powerbi",
    "server": "192.168.0.12",
    "database": "PowerBI", 
    "options": {
        "encrypt": false 
    }
}

// Connect to SQL Server
sql.connect(config, err => {
    if (err) {
        throw err;
    } else {
    console.log("Connection Successful!");
    }
});

// Define route for fetching data from SQL Server
app.get("/", (request, response) => {
    // Execute a SELECT query
    new sql.Request().query("SELECT * FROM  Portal_users", (err, result) => {
        if (err) {
            console.error("Error executing query:", err);
        } else {
            response.send(result.recordset); // Send query result as response
            console.dir(result.recordset);
        }
    });
});

// insertion 
app.post("/addUser", (request, response) => {
    const {username, latitude, longitude} = request.body;
    const query = `INSERT INTO Portal_users (username, latitude, longitude) values (${username}, ${latitude}, ${longitude})`
    
    new sql.Request().query(query, (err, result) => {
        if (err) {
            console.error("Error executing query:", err);
            response.status(500).send("Error inserting data");
        } else {
            response.send("Data inserted successfully");
        }
    });
})

// Start the server on port 5501
const PORT = process.env.PORT || 5501;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//post request in my react component 
                  await axios.post('http://192.168.0.12:5501/addUser', {
                  username: email,
                  latitude: latitude,
                  longitude: longitude
                   });
