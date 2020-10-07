let urls = [
    WIKI_URL, RSS_URL, RSS_VIDEO_URL, GITEA_URL, FILES_URL, FILE_FEED_URL, CALENDAR_URL, BUDGET_URL
]
let ids = [
    "wiki", "rss", "rssvideo", "gitea", "files", "filefeed", "calendar", "budget"
]
let status_url = `http://localhost:8080?${urls.join("&")}`
fetch(status_url)
    .then( response => response.text())
    .then( response => {
        response.split("\n").forEach((el, i)=> {
            if(el == "") { return }
            console.log(urls[i], ids[i], el)
            let htmlEl = document.getElementById(ids[i])
            let newEl = document.createElement("span")
            if(el == "up"){
                newEl.className = "status-up"
            } else {
                newEl.className = "status-down"
            }
            htmlEl.insertBefore(newEl, htmlEl.lastChild);
        }) 
    })

