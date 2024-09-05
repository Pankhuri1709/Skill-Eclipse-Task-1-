const music = new Audio("audio/1.mp3");


const songs = [
    {
        id: 1,
        songName: `Humdard<br><div class="subtitle">Arjit Singh</div>`,
        poster: "img/1.jpg"
    },
    {
        id: 2,
        songName: `Baarishein<br><div class="subtitle">Anuv Jain</div>`,
        poster: "img/2.jpg"
    },
    {
        id: 3,
        songName: `Dil Galti Kar Baitha Hai <br><div class="subtitle">Jubin Nutiyal</div>`,
        poster: "img/3.jpg"
    },
    {
        id: 4,
        songName: `Soniyo <br><div class="subtitle">Shreya Ghoshal, Shaan</div>`,
        poster: "img/4.jpg"
    },
    {
        id: 5,
        songName: `Tera Rang Balle Balle<br><div class="subtitle">Sonu Nigam,Jaspinder Narula</div>`,
        poster: "img/5.jpg"
    },
    {
        id: 6,
        songName: `Kya Mujhe Pyaar Hai <br><div class="subtitle">KK</div>`,
        poster: "img/6.jpg"
    },
    {
        id: 7,
        songName: `Main Teri Ho Gayi<br><div class="subtitle">Miland Gabba</div>`,
        poster: "img/7.jpg"
    },
    {
        id: 8,
        songName: `Lahore<br><div class="subtitle">Guru Randhawa</div>`,
        poster: "img/8.jpg"
    },
    {
        id: 9,
        songName: `Yaad Teri<br><div class="subtitle">Rahul Vaidya</div>`,
        poster: "img/9.jpg"
    },
    {
        id: 10,
        songName: `Radha Kaise Na Jale<br><div class="subtitle">A.R.Rahman,Asha Bhosle</div>`,
        poster: "img/10.jpg"
    },
    {
        id: 11,
        songName: `Teri Aakhon Mein<br><div class="subtitle">Darshan Raval,Neha Kakkar</div>`,
        poster: "img/11.jpg"
    },
    {
        id: 12,
        songName: `Akkad Bakkad<br><div class="subtitle">Badshah,Neha Kakkar</div>`,
        poster: "img/12.jpg",

    },
    {
        id: 13,
        songName: `Call Me Maybe <br><div class="subtitle">Carly Rae Jepson</div>`,
        poster: "img/13.jpg"
    },
    {
        id: 14,
        songName: `Hey,Soul Sister<br><div class="subtitle">Train</div>`,
        poster: "img/14.jpg "
    },
    {
        id: 15,
        songName: `Soni Soni(From "Ishq Vishq Rebound")<br><div class="subtitle">Darshan Raval,Jonita Gandhi</div>`,
        poster: "img/15.jpg "
    },
    {
        id: 16,
        songName: `Tauba Main Vyah Karke Pachhtaya<br><div class="subtitle">Pritam,Shahid Mallya</div>`,
        poster: "img/16.jpg "
    },
    {
        id: 17,
        songName: `Never Been In Love<br><div class="subtitle">Haley Mae Campbell</div>`,
        poster: "img/17.jpg "
    },
    {
        id: 18,
        songName: `What If I told You I Like You <br><div class="subtitle">Johnny Orlando,Kenzie</div>`,
        poster: "img/18.jpg "
    },
    {
        id: 19,
        songName: `Smiles For You<br><div class="subtitle">Hayden Summerall</div>`,
        poster: "img/19.jpg "
    },
    {
        id: 20,
        songName: `Saudebazi(Encore)<br><div class="subtitle">Javed Ali,Pritam</div>`,
        poster: "img/20.jpg"
    },
    {
        id: 21,
        songName: `Savera Ho Raha<br><div class="subtitle">Akhil Sachdeva</div>`,
        poster: "img/21.jpg "
    },
    {
        id: 22,
        songName: `Ding Dong<br><div class="subtitle">KK,Sunidhi Chauhan</div>`,
        poster: "img/22.jpg "
    },
]

let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
})

pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
})

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];


pop_art_right.addEventListener('click', () => {
    item.scrollLeft += 330;
})

pop_art_left.addEventListener('click', () => {
    item.scrollLeft -= 330;
})


Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster
    e.getElementsByTagName('img')[0].innerHTML = songs[i].songName
})


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
})

const makeAllplays = () => {
    Array.from(document.getElementsByClassName('playlistPlay')).forEach((el) => {
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}

const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
        el.style.background = 'rgb(105, 105,105,.0)';
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playlistPlay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        //console.log(index);
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let { songName } = elss;
            title.innerHTML = songName;
        });
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105,105,.1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    });
})

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementById('dot');
music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    //console.log(min1);
    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;

    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    //console.log(seek.value);
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
})

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementById('vol_bar');
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
})

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', () => {
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
    });
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105,105,.1)";
    makeAllplays();
    e.target.classList.remove('bi-play-circle-fill');
    l.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
})

next.addEventListener('click', () => {
    index++;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
    });
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105,105,.1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
})

let shuffle = document.getElementById('shuffle');
shuffle.addEventListener('click', () => {
    let a = shuffle.innerHTML;
    switch (a) {
        case 'next':
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = 'random';
            break;
        case 'random':
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'next';
            break;
    }
})

const next_music = () =>{
    if (index  == songs.length) {
        index = 1 
    } else {
        index ++;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
    });
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105,105,.1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
}

const random_music = () =>{
    if (index  == songs.length) {
        index = 1 
    } else {
        index = Math.floor((Math.random()*songs.length) + 1)
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
    });
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105,105,.1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
};

music.addEventListener('ended', () => {
    let b = shuffle.innerHTML;
    switch (b) {
        case 'random':
            random_music();
            break;
        case 'next':
            next_music();
            break;
    }
});