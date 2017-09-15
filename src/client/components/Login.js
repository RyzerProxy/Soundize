import React, { Component } from "react"

const scopes = [
  "user-read-private",
  "playlist-read-private",
  "playlist-modify-public",
  "playlist-modify-private",
  "user-library-read",
  "user-library-modify",
  "user-follow-read",
  "user-follow-modify"
]
const client_id = "8d7cb1d087644280982de543cbb92989"
const redirect_uri = "http://localhost:8080/app"

let url =
  "https://accounts.spotify.com/authorize?client_id=" +
  client_id +
  "&redirect_uri=" +
  encodeURIComponent(redirect_uri) +
  "&scope=" +
  encodeURIComponent(scopes.join(" ")) +
  "&response_type=token"

class Login extends Component {
  render() {
    console.log(url)

    return (
      <div>
        <a
          href="https://accounts.spotify.com/authorize?client_id=8d7cb1d087644280982de543cbb92989&redirect_uri=http://localhost:8080/app&response_type=token&state=123"
          className="button"
        >
          Login
        </a>
        <a href={url} className="button">
          LoginTest
        </a>
      </div>
    )
  }
}

export default Login
