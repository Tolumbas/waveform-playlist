const $ = s=>document.querySelector(s);
const emit = (s,e)=>playlist.ee.emit(s,e);

$("#play-button").onclick = e=>emit("play",0);
$("#prev-button").onclick = e=>emit("stopAndRollback",e);
$("#render").onclick = e=>emit('startaudiorendering', 'wav');
$("#save").onclick = e=>emit("save",e);
$("#reset").onclick = e=>emit("reset",e);

function displayDownloadLink(link){
    l = $("#download-link");
    if (l.href){
        window.URL.revokeObjectURL(l.href);
    }
    l.download = "name-of-song.wav";
    l.href = link;
    l.innerHTML = "download ready";

}

playlist.ee.on('audiorenderingfinished', function (type, data) {
    if (type == 'wav'){
        downloadUrl = window.URL.createObjectURL(data);
        displayDownloadLink(downloadUrl);
    }
});
playlist.ee.on('name-change',str=>{
    $("#name").innerHTML = str;
})
playlist.ee.on('bpm-change',bpm=>{
    $("#bpm").innerHTML = bpm;
})
emit('name-change',playlist.name);//initial setting
emit('bpm-change',playlist.bpm);//initial setting
  