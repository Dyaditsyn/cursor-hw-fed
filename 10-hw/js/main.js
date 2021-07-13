"use strict";
const WHITE_KEYS = ['a', 's', 'd', 'f', 'g', 'h', 'j'];
const BLACK_KEYS = ['w', 'e', 't', 'y', 'u'];

const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key-w');
const blackKeys = document.querySelectorAll('.key-b');

keys.forEach(key => {
    key.addEventListener('click', () => playNote(key));
});

document.addEventListener('keydown', e => {
    const key = e.key.toLowerCase();
    const whiteKeyIndex = WHITE_KEYS.indexOf(key);
    const blackKeyIndex = BLACK_KEYS.indexOf(key);
    if(whiteKeyIndex > -1) {
        playNote(whiteKeys[whiteKeyIndex])
    }
    if(blackKeyIndex > -1) {
        playNote(blackKeys[blackKeyIndex])
    }
});

function playNote(key) {
    const note = document.getElementById(key.dataset.note)
    key.classList.add('active');
    note.currentTime = 0;
    note.play();
    note.addEventListener('ended', () => {
        key.classList.remove('active');
    })
}



