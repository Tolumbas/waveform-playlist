var playlist = WaveformPlaylist.init({
  samplesPerPixel: 3000,
  waveHeight: 100,
  container: document.getElementById("playlist"),
  state: 'interactive',
  bpm:90,
  quantize:1,
  colors: {
    waveOutlineColor: '#E0EFF1',
    timeColor: 'grey',
    fadeColor: 'black'
  },
  timescale: true,
  controls: {
    show: true, //whether or not to include the track controls
    width: 200 //width of controls in pixels
  },
  seekStyle : 'line',
  zoomLevels: [500, 1000, 3000, 5000]
});
/*
01_Um Pepino_Electric Guitar.mp3 
02_Um Pepino_Vibraphone.mp3 
03_Um Pepino_Volda Drumsyn.mp3 
04_Um Pepino_Volda Drumsyn.mp3 
05_Um Pepino_Drum Kit.mp3 
06_Um Pepino_Rhodia Synpad.mp3 
07_Um Pepino_Fjoria Syn.mp3 
08_Um Pepino_SFX.mp3 
09_Um Pepino_SFX 2.mp3
*/
playlist.load([
  
  {
    "src": "media/audio/01_Um Pepino_Electric Guitar.mp3 ",
    "name": "01",
    "cuein": 0,
    "waveOutlineColor": '#c0dce0'
  },
  {
    "src": "media/audio/02_Um Pepino_Vibraphone.mp3 ",
    "name": "02",
    "cuein": 0,
    "waveOutlineColor": '#c0dce0'
  },
  {
    "src": "media/audio/03_Um Pepino_Volda Drumsyn.mp3 ",
    "name": "03",
    "cuein": 0,
    "waveOutlineColor": '#c0dce0'
  },
  {
    "src": "media/audio/04_Um Pepino_Volda Drumsyn.mp3 ",
    "name": "04",
    "cuein": 0,
    "waveOutlineColor": '#c0dce0'
  },
  {
    "src": "media/audio/05_Um Pepino_Drum Kit.mp3 ",
    "name": "05",
    "cuein": 0,
    "waveOutlineColor": '#c0dce0'
  },
  {
    "src": "media/audio/06_Um Pepino_Rhodia Synpad.mp3 ",
    "name": "06",
    "cuein": 0,
    "waveOutlineColor": '#c0dce0'
  },
  {
    "src": "media/audio/07_Um Pepino_Fjoria Syn.mp3 ",
    "name": "07",
    "cuein": 0,
    "waveOutlineColor": '#c0dce0'
  },
  {
    "src": "media/audio/08_Um Pepino_SFX.mp3 ",
    "name": "08",
    "cuein": 0,
    "waveOutlineColor": '#c0dce0'
  },
  {
    "src": "media/audio/09_Um Pepino_SFX 2.mp3",
    "name": "09",
    "cuein": 0,
    "waveOutlineColor": '#c0dce0'
  },
  
]).then(function() {
  //can do stuff with the playlist.

  //initialize the WAV exporter.
  playlist.initExporter();
});