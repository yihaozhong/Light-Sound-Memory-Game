*Memory Game*

**Memory Game** is a Light & Sound Memory game

**YIHAO LARRY ZHONG**

Link to project: https://glitch.com/edit/#!/endurable-sunset-redcurrant?path=README.md%3A1%3A0
https://endurable-sunset-redcurrant.glitch.me/

## Functionality


* [YES] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [YES] "Start" button toggles between "Start" and "Stop" when clicked. 
* [YES] Game buttons each light up and play a sound when clicked. 
* [YES] Computer plays back sequence of clues including sound and visual cue for each button
* [YES] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [YES] User wins the game after guessing a complete pattern
* [YES] User loses the game after an incorrect guess
* [YES] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [YES] Buttons use a pitch (frequency) other than the ones in the tutorial
* [YES] More than 4 functional game buttons
* [YES] Playback speeds up on each turn
* [YES] Computer picks a different pattern each time the game is played
* [YES] Player only loses after 3 mistakes (instead of on the first mistake)
* [YES] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

- [YES] Develop a window telling player how many strikes they have left.
- [YES] START and STOP button with colors and different font color for better visual.

## Video Walkthrough (GIF)


Overall:
https://recordit.co/TKsXOQclYP

3 strikes:
https://recordit.co/l9EbGLbqve

random pattern:
https://recordit.co/jT3EpxHNGM

## Citation
https://stackoverflow.com/questions/493296/css-display-an-image-resized-and-cropped
https://www.w3schools.com/css//css_font_websafe.asp
https://stackoverflow.com/questions/5836833/create-an-array-with-random-values
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings

## Some reflections
The difficulty is to create the images under the button and make them hidden before the user clicks it. I was able to embed the images but failed to crop them in a proper size, and other than that, I was not able to make their position exactly the same under the buttons. I tried to do by arranging the positional variable of images to be the same as the button but it is quite amount of works. So I stopped searching and debugging and came back to the original codes the tutorial provided. I therefore quickly find out that the all we need is to change the background from color to image url and crop it. Another difficulty is understanding the corresponding relationship among CSS files, Javascript files, and HTML files. When we declare a global variable in javascript file, can we use it in HTML files? Somewhat similar is that is the “communication” holds true for functions, classes among these three? The answer gradually becoming clear to me by studying how we reference other files at the top of HTML files and the relationship among these files: CSS is in charge of displaying content style, Javascript is controlling the logistics of content, and HTML is taking care of the interaction with users and overall display structure. 


## License

    Copyright Yihao Zhong Larry

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
