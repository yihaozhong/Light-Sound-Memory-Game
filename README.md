# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **YIHAO LARRY ZHONG**

Time spent: **5** hours spent in total

Link to project: https://glitch.com/edit/#!/endurable-sunset-redcurrant?path=README.md%3A1%3A0
https://endurable-sunset-redcurrant.glitch.me/

## Required Functionality

The following **required** functionality is complete:

* [YES] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [YES] "Start" button toggles between "Start" and "Stop" when clicked. 
* [YES] Game buttons each light up and play a sound when clicked. 
* [YES] Computer plays back sequence of clues including sound and visual cue for each button
* [YES] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [YES] User wins the game after guessing a complete pattern
* [YES] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [YES] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [YES] Buttons use a pitch (frequency) other than the ones in the tutorial
* [YES] More than 4 functional game buttons
* [YES] Playback speeds up on each turn
* [YES] Computer picks a different pattern each time the game is played
* [YES] Player only loses after 3 mistakes (instead of on the first mistake)
* [YES] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [YES] Develop a window telling player how many strikes they have left.
- [YES] START and STOP button with colors and different font color for better visual.

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

Overall:
https://recordit.co/TKsXOQclYP

3 strikes:
https://recordit.co/l9EbGLbqve

random pattern:
https://recordit.co/jT3EpxHNGM

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
https://stackoverflow.com/questions/493296/css-display-an-image-resized-and-cropped
https://www.w3schools.com/css//css_font_websafe.asp
https://stackoverflow.com/questions/5836833/create-an-array-with-random-values
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

The difficulty is to create the images under the button and make them hidden before the user clicks it. I was able to embed the images but failed to crop them in a proper size, and other than that, I was not able to make their position exactly the same under the buttons. I tried to do by arranging the positional variable of images to be the same as the button but it is quite amount of works. So I stopped searching and debugging and came back to the original codes the tutorial provided. I therefore quickly find out that the all we need is to change the background from color to image url and crop it. Another difficulty is understanding the corresponding relationship among CSS files, Javascript files, and HTML files. When we declare a global variable in javascript file, can we use it in HTML files? Somewhat similar is that is the “communication” holds true for functions, classes among these three? The answer gradually becoming clear to me by studying how we reference other files at the top of HTML files and the relationship among these files: CSS is in charge of displaying content style, Javascript is controlling the logistics of content, and HTML is taking care of the interaction with users and overall display structure. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
I am still thinking about how data is stored and represented in web development, and overall, how big projects in web development looks like. Despite learning web development from simple scratches, the game itself also triggered me to be particularly interested at how the structure and database are functioning in those websites we commonly used, like Google, LinkedIn, etc. I am curious on how those website’s basic logic on operation and their standard response procedure. Besides, while developing the game, I am having quite a hard time debugging the codes. Therefore, I am also wondering the overall debugging techniques in web development. As the web development can give us an instant feedback visually, there must be some techniques that is exclusive in front end development compared to back end’s.


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

I will love to learn about how to develop a user log in system that can track the previous performance of users and display for feedback. Based on that, I would like to develop more levels of difficulties of the game for user to choose of. For example, more quicker display time and less strikes. The most difficult level can be that the user need to remember 10 pattern at one time and only have two opportunities. And I would like to practice more on CSS by creating different theme of the game that allow user to select. A variety of themes will not take much time since we have already develop a theme and we can replicate the existing one. And I would like to challenge on creating a more dynamic website, adding some effect on font and the image, maybe creating a gif under the button and the gifs are randomly displayed under each button.


## Interview Recording URL Link

https://www.loom.com/share/e139dc2ad62b402eb67fd96faf17626d


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
