
import Loginspotify from "./Loginspotify"
import Dashboardsongs from "./Dashboardsongs"

const code = new URLSearchParams(window.location.search).get("code")

function Appsong() {
  return code ? <Dashboardsongs code={code} /> : <Loginspotify />
  // return code ? <Dashboardsongs code={code} /> : <Dashboardsongs />
}

export default Appsong
