/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

// import { input } from '@inquirer/prompts';
import input from '@inquirer/input';
// import fs from 'fs';
// import qr from 'qr-image';



const answer = await input({ message: 'Enter your name' });


// fs.writeFile('URL.txt', answer);

// var qr_svg = qr.image(answer, { type: 'svg' });
// qr_svg.pipe(fs.createWriteStream('i_love_qr.svg'));

// var svg_string = qr.imageSync(answer, { type: 'svg' });