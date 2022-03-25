
function showLines() {
        const pLigne = document.querySelector("#listeLigne");
        fetch("https://api.tisseo.fr/v1/lines.json?key=a3732a1074e2403ce364ad6e71eb998cb")
        .then(response => response.json())
        .then(data => {
            const lignes = data.lines.line;
            console.log(lignes)
            for(ligne of lignes){
                pLigne.innerHTML += "<li class=\" btn btn-primary list-group-item list-group-item-action\" onclick=\"getStop("+ligne.id+")\" >" + ligne.name + "</li>"
            }

        })
        .catch(err => console.error(err))
    };
function getStop(id){
    const stopField = document.querySelector("#listeArret");
    fetch("https://api.tisseo.fr/v1/stop_points.json?key=a3732a1074e2403ce364ad6e71eb998cb&lineId="+id)
    .then(response => response.json())
    .then(data => {
        const stops = data.physicalStops.physicalStop;
        console.log(stops)
        for( stop of stops){
            stopField.innerHTML += "<li class=\"list-group-item list-group-item-action\" onclick=\"getTime("+stop.id+")\">" + stop.name + "</li>"
        }

    })
}
function getTime(id){
    const timeField = document.querySelector("#listeTime");
    fetch("https://api.tisseo.fr/v1/stops_schedules.json?key=a3732a1074e2403ce364ad6e71eb998cb&stopPointId="+id)
    .then(response => response.json())
    .then(data => {
        const departures = data.departures.departure;
        console.log(departures)
        for(dep of departures){
            timeField.innerHTML += "<li class=\"list-group-item list-group-item-action\">" + dep.dateTime + "</li>"
        }

    })
}
