window.onload = () => {
    // const albumart = document.querySelector('#albumart');
    const song_title = document.querySelector('#title');
    const song_artist = document.querySelector('#artist');

    const list = document.querySelector('#list');
    const play_btn = document.querySelector('#playicon');
    const prev_btn = document.querySelector('#previous');
    const next_btn = document.querySelector('#next');
    // const duration = document.querySelector('#seek');

    const audio_player = document.querySelector('#player');

    

    let current_song_index;
    let next_song_index;

    const songs = [
    {         
            title: 'Courage',
                    artist: "Celine Dion",
                    song_path: 'music/celine_dion_courage.mp3',
                    img_path: 'images/celine.png'
    },
                {
                    title: "Your Man",
                    artist: "Josh Turner",
                    song_path: 'music/your_man_by_josh_turner.mp3',
                    img_path: 'images/josh.jpg'
},
            ];

            function TogglePlaySong () {
                if (audio_player.paused) {
                    audio_player.play();
                    document.getElementById('playicon').src="./icons/pauseicon.png";
                    // document.getElementById('list').innerHTML= songs.title

                   
                } else {
                    audio_player.pause();
                    document.getElementById('playicon').src="./icons/playicon.png";
                    
                }
            }

            
            play_btn.addEventListener('click',() => TogglePlaySong());
    next_btn.addEventListener('click', () => ChangeSong());
    prev_btn.addEventListener('click', () => ChangeSong(false));
    

    

        function InitPlayer () {
            current_song_index = 0;
            next_song_index = current_song_index + 1;
            UpdatePlayer();
        }
        InitPlayer();

        
        function UpdatePlayer() {
            let song = songs[current_song_index];
    
            // albumart.style = "background-image: url( "+song.img_path +");";
            song_title.innerText = song.title;
            song_artist.innerText = song.artist;
            audio_player.src = song.song_path;
        }
        function ChangeSong (next = true) {
            if (next) {
                current_song_index++;
                next_song_index = current_song_index + 1;
    
                if (current_song_index > songs.length - 1) {
                    current_song_index = 0;
                    next_song_index = current_song_index+1;
                }
    
                if (next_song_index > songs.length - 1) {
                    next_song_index = 0;
                }
            } else {
                current_song_index--;
                next_song_index = current_song_index + 1;
    
                if (current_song_index < 0) {
                    current_song_index = songs.length - 1;
                    next_song_index = 0;
                }
            }
    
            UpdatePlayer();
            TogglePlaySong();
        }
    
        var timer;
var percent = 0;
audio_player.addEventListener("playing", function(_event) {
  var duration = _event.target.duration;
  advance(duration, audio_player);
});
audio_player.addEventListener("pause", function(_event) {
  clearTimeout(timer);
});
var advance = function(duration, element) {
  var progress = document.getElementById("seek");
  increment = 10/duration
  percent = Math.min(increment * element.currentTime * 10, 100);
  progress.style.width = percent+'%'
  startTimer(duration, element);
}
var startTimer = function(duration, element){ 
  if(percent < 100) {
    timer = setTimeout(function (){advance(duration, element)}, 100);
  }
}


    }
