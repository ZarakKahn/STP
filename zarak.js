//server.js
const express = require("express");
const sql = require("mssql");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// SQL Server configuration
const config = {
    user: "powerbi", 
    password: "powerbi",
    server: "192.168.0.12",
    database: "PowerBI", 
    options: {
        encrypt: false
    }
};

// Connect to SQL Server
sql.connect(config)
    .then(() => console.log("Connection Successful!"))
    .catch(err => console.error("Connection error:", err));

// Define route for fetching data from SQL Server
app.get("/", async (req, res) => {
    try {
        const result = await new sql.Request().query("SELECT * FROM Portal_users");
        res.json(result.recordset);
    } catch (err) {
        console.error("Error executing query:", err);
        res.status(500).send("Error fetching data");
    }
});

// Insertion route
app.post("/addUser", async (req, res) => {
    const { username, latitude, longitude } = req.body;
    const query = `INSERT INTO Portal_users (username, latitude, longitude) VALUES (@username, @latitude, @longitude)`;
    
    try {
        await new sql.Request()
            .input('username', sql.NVarChar, username)
            .input('latitude', sql.Float, latitude)
            .input('longitude', sql.Float, longitude)
            .query(query);
        res.send("Data inserted successfully");
    } catch (err) {
        console.error("Error executing query:", err);
        res.status(500).send("Error inserting data");
    }
});

// Start the server
const PORT = process.env.PORT || 5501;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

//post request in my react component 
try {
    await axios.post('http://192.168.0.12:5501/addUser', {
        username: email,
        latitude: latitude,
        longitude: longitude
    });
} catch (error) {
    console.error("Error inserting user:", error);
}
