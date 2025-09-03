require('dotenv').config()
const express = require('express')
const app = express()
const github={
"login": "shafikul7",
"id": 63946398,
"node_id": "MDQ6VXNlcjYzOTQ2Mzk4",
"avatar_url": "https://avatars.githubusercontent.com/u/63946398?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/shafikul7",
"html_url": "https://github.com/shafikul7",
"followers_url": "https://api.github.com/users/shafikul7/followers",
"following_url": "https://api.github.com/users/shafikul7/following{/other_user}",
"gists_url": "https://api.github.com/users/shafikul7/gists{/gist_id}",
"starred_url": "https://api.github.com/users/shafikul7/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/shafikul7/subscriptions",
"organizations_url": "https://api.github.com/users/shafikul7/orgs",
"repos_url": "https://api.github.com/users/shafikul7/repos",
"events_url": "https://api.github.com/users/shafikul7/events{/privacy}",
"received_events_url": "https://api.github.com/users/shafikul7/received_events",
"type": "User",
"user_view_type": "public",
"site_admin": false,
"name": "Md.Shafikul Islam",
"company": null,
"blog": "https://shafikul.dev/",
"location": "Dhaka,Bangladesh",
"email": null,
"hireable": true,
"bio": "Software Engineer  | Competitive Programmer",
"twitter_username": "shafkulislam",
"public_repos": 52,
"public_gists": 0,
"followers": 54,
"following": 57,
"created_at": "2020-04-19T06:45:09Z",
"updated_at": "2025-06-29T15:49:24Z"
}
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/sk',(req,res)=>{
    res.send(github)
})

app.listen(process.env.PORT, () => {
  console.log('Example app listening on port')
})