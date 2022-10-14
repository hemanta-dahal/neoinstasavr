const Express = require('express');
const app = Express();
const port = process.env.PORT || 3000;
const http = require("http");
const https = require("https");

http.globalAgent.maxSockets = Infinity;
https.globalAgent.maxSockets = Infinity;
process.setMaxListeners(Infinity);

const username = 'neodeveloperinstasaver'; // your temp instagram username for session cookie
const password = 'Dahalhemanta11'; // your password for session coookie

const cookiee = 'csrftoken=XWavFWtqlvSdecruPISIaBS7ONrvd8VS; rur=\"NCG\\05455554794009\\0541695480603:01f778483b569d39b8d4fa115aba46334fa609020bea586f4e704a14186e0b019068fdb7\"; ds_user_id=55554794009; sessionid=55554794009%3ASay2e4Yp9qmKGM%3A20%3AAYe1udWxxvwra7IbSPnkhwNrkv1ZvVAEcnaAxxdnYA';
/* How To Get Cookie 
Deploy Your App On Server The Visit Bellow Link

https://yourdomain.com/session

*/

const { igApi ,getCookie } = require("insta-fetcher");
// This Code Use insta-fetcher I respect The owner

let ig = new igApi(cookiee);


app.get("/api", async(req, res) => {
  const url = req.query.url
  if(url == '' || url == null){
    return res.status(400).send({
      success: false,
      message: "Query Can't Be Empty!",
      creator: "neo developer yt"
    });
  }
    ig.fetchPost(url).then((data) => {
  console.log(data);
  res.status(200).json({data})
});

})
app.get("/session", async(req, res) => {
    // this rout for get session id Make In Private for your Account Safety Chnage Rout Adresssss
(async () => {
  try {
    const cookie = await getCookie(username, password);
    res.status(200).json({cookie})
  } catch (error) {
    res.status(400).json({error})
  }
})();
})

app.get("/", (req, res) => {
    res.setHeader("Cache-Control", "public,max-age=0");
    res.status(200).json({
        YouTube: 'https://youtube.com/ytneodeveloper',
    })
})


app.listen(port, function(){
    console.log("Your App Running on", port);
/* This File Created By Neo Developer */
});
