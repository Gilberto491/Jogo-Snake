const FPS = 6;
const SIZE = 25;
const COLUMNS = 7;
const ROWS = 7;

const SNAKE_SIZE = 5;

const WIDTH = COLUMNS * SIZE;
const HEIGHT = ROWS * SIZE;
const SPACE_KEY_CODE = 32;

const score = document.createElement('div')
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.body.appendChild(score);
document.body.appendChild(canvas);
canvas.height = HEIGHT;
canvas.width = WIDTH;
