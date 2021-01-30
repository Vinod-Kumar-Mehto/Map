     document.querySelector("#location").addEventListener("click", function(){
        navigator.geolocation.getCurrentPosition(c);
    return false
})
let c = function(pos){
        let lat = pos.coords.latitude,
            long = pos.coords.longitude,
            coords = lat + ", " + long;                                                                                                                                                               
        document.querySelector("#google_map").setAttribute(`src`, `https://maps.google.com/maps?q=`+ coords +`&t=1&z=17&output=embed`)

}   
