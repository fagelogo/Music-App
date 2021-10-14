window.onload = () => {
  
  const song_title = document.querySelector("#title");
  const song_artist = document.querySelector("#artist");

 
  const play_btn = document.querySelector("#playicon");
  const prev_btn = document.querySelector("#previous");
  const next_btn = document.querySelector("#next");
  

  const audio_player = document.querySelector("#player");

  let current_song_index;
  let next_song_index;

  const songs = [
    {
      title: "Courage",
      artist: "Celine Dion",
      song_path: "music/celine_dion_courage.mp3",
     
    },
    {
      title: "Your Man",
      artist: "Josh Turner",
      song_path: "music/your_man_by_josh_turner.mp3",
      
    },
  ];

  function TogglePlaySong() {
    if (audio_player.paused) {
      audio_player.play();
      document.getElementById("playicon").src = "./icons/pauseicon.png";
      
    } else {
      audio_player.pause();
      document.getElementById("playicon").src = "./icons/playicon.png";
    }
  }

  play_btn.addEventListener("click", () => TogglePlaySong());

  next_btn.addEventListener("click", () => ChangeSong());
  prev_btn.addEventListener("click", () => ChangeSong(false));

  function InitPlayer() {
    current_song_index = 0;
    next_song_index = current_song_index + 1;
    UpdatePlayer();
  }
  InitPlayer();

  function UpdatePlayer() {
    let song = songs[current_song_index];

    
    song_title.innerText = song.title;
    song_artist.innerText = song.artist;
    audio_player.src = song.song_path;
  }
  function ChangeSong(next = true) {
    if (next) {
      current_song_index++;
      next_song_index = current_song_index + 1;

      if (current_song_index > songs.length - 1) {
        current_song_index = 0;
        next_song_index = current_song_index + 1;
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
};
