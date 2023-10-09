window.onload = () => {
    fetch("https://run.mocky.io/v3/4ae4857a-ea9e-4f05-aaa1-999a42b6838f").then(function (response){
        return response.json()
    }).then(function (object){
        const videos = object.videos
        console.log(videos)
        const list = document.getElementById("p1")
        let videosHTML = ""
        for(let i = 0; i < videos.length; i++)
        {
            videosHTML += `
                <div class="video">
                    <img src="${videos[i].thumbnail}">
                    <div class="info">
                    <div>${videos[i].title}</div>
                    <div>${videos[i].likes}</div>
                    </div>
                </div>
            `
        }
        list.innerHTML = videosHTML
    })
}