const FPS = 5;
const SIZE = 33;
const COLUMNS = 9;
const ROWS = 9;

const SNAKE_SIZE = 2;

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
