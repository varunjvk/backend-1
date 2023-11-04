import express from 'express'
import 'dotenv/config'

const app = express()

const port = process.env.PORT

const githubData = {
  login: "varunjvk",
  id: 97157497,
  node_id: "U_kgDOBcqBeQ",
  avatar_url: "https://avatars.githubusercontent.com/u/97157497?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/varunjvk",
  html_url: "https://github.com/varunjvk",
  followers_url: "https://api.github.com/users/varunjvk/followers",
  following_url: "https://api.github.com/users/varunjvk/following{/other_user}",
  gists_url: "https://api.github.com/users/varunjvk/gists{/gist_id}",
  starred_url: "https://api.github.com/users/varunjvk/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/varunjvk/subscriptions",
  organizations_url: "https://api.github.com/users/varunjvk/orgs",
  repos_url: "https://api.github.com/users/varunjvk/repos",
  events_url: "https://api.github.com/users/varunjvk/events{/privacy}",
  received_events_url: "https://api.github.com/users/varunjvk/received_events",
  type: "User",
  site_admin: false,
  name: "Varun Kumar",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 14,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2022-01-05T08:45:21Z",
  updated_at: "2023-09-26T08:38:22Z",
};

app.get('/', (req, res) => {
    res.send('Express Hello')
})

app.get('/login', (req, res) => {
    res.send('<h1>Login</h1>')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(port, () => { console.log(`Listening at port: ${port}`) })
