import locations from "./store/locations";
import '../css/style.css'
import './plugins/index'

locations.init().then(res => {
    console.log(res)
    console.log(locations)
    console.log(locations.getCitiesByCountryCode('PE'))
})

