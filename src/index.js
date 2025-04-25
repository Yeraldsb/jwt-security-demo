const express = require('express');
const jwt = require('jsonwebtoken');
const SECRET = "supersecret";


const app = express();
app.use(express.json());

app.post("/login", (req, res) => {
    //Curl -X POST http://localhost:3000/login -H "Content-Type: application/json" -d '{"username":"user","password":"user"}'

  const { username, password  } = req.body;


  if (username === "user" && password === "user") {
    return res.json({
        token: jwt.sign({ userid: "user" }, SECRET),
    });
  }

  if (username === "admin" && password === "admin") {
    return res.json({
        token: jwt.sign({ userid: "admin" }, SECRET),
    });
  }
  return res
  .status(401)
  .json({
    message: "Username or password is invalid"});
});
  
app.get("/dashboard", (req, res) => {
  //curl -i http://localhost/dashboard --header 'Authorization: Bearer <token>'
  const token = req.headers.authorization.split(' ')[1];
  if (!token) return res.status(401).json('unauthorized');
      try {   
          const decoded = jwt.decode(token, SECRET);
          req.user = decoded;
      }
      catch (e) {
          res.status(401).json(e)
      }

      return res.status(200).json({message: `Welcome to the dashboard" ${req.user.userid}`}); 
  

})  

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});