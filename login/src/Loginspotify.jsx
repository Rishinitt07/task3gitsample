import React from "react"


const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=b9e7f4a1fe48400790a362c6de406e4a&response_type=code&redirect_uri=http://localhost:5173/search&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Loginspotify() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <a className="btn btn-success btn-lg text-white" href={AUTH_URL}>
        Login With Spotify
      </a>
    </div>
  )
}
