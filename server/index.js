const express = require("express")
const  mongoose = require("mongoose")
const cors = require("cors")
const userModel = require("./models/Users")
const bodyparser = require("body-parser")
const lyricsfinder = require("lyrics-finder")
const SpotifyWebApi = require("spotify-web-api-node")


const app = express()
app.use(express.json())
app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

mongoose.connect("mongodb://127.0.0.1:27017/users")



app.post('/login',(req,res)=>{
    const {user,pass} =req.body;
    userModel.findOne({user:user})
    .then(user =>{
        if(user){
            if(user.pass===pass){
                res.json("Success")
            }else{
                res.json("The password is incorrect")
            }
        }else{
            res.json("No record found")
        }
    })
})


app.post('/info',(req,res)=>{
    userModel.create(req.body)
    .then(userinfo=> res.json(userinfo))
    .catch(err => res.json(err))

})

app.post("/refresh", (req, res) => {
    const refreshToken = req.body.refreshToken
    const spotifyApi = new SpotifyWebApi({
      redirectUri: "http://localhost:5173/search",
      clientId: "b9e7f4a1fe48400790a362c6de406e4a",
      clientSecret: "9b5b9d5c8edd41e7adb74f0ce3066b2e",
      refreshToken,
    })
  
    spotifyApi
      .refreshAccessToken()
      .then(data => {
        res.json({
          accessToken: data.body.accessToken,
          expiresIn: data.body.expiresIn,
        })
      })
      .catch(err => {
        console.log(err)
        res.sendStatus(400)
      })
  })
  
  app.post("/loginto", (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
      redirectUri: "http://localhost:5173/search",
      clientId: "b9e7f4a1fe48400790a362c6de406e4a",
      clientSecret: "9b5b9d5c8edd41e7adb74f0ce3066b2e",
    })
  
    spotifyApi
      .authorizationCodeGrant(code)
      .then(data => {
        res.json({
          accessToken: data.body.access_token,
          refreshToken: data.body.refresh_token,
          expiresIn: data.body.expires_in,
        })
      })
      .catch(err => {
        res.sendStatus(400)
      })
  })
  
  app.get("/lyrics", async (req, res) => {
    const lyrics = (await lyricsfinder(req.query.artist, req.query.track))
       || "No Lyrics Found"
    res.json({ lyrics })
  
    
    
  })




















app.listen(3001,()=>{
    console.log("server is running on port 3001")
})