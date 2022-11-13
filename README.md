# audio.js
## embed
```html
<script src="https://audio.yiu.ch/audio.js" defer></script>
```
## usage
### embed
```html
<script src="https://audio.yiu.ch/audio.js" defer></script>
```
### implement
```html
<source class="sound" src="sound.mp3" type="audio/mp3">
<button class="sound:click">play sound</button>
```
### dispatch
[test here](https://audio.yiu.ch/)
## linking
linking is a simple process of putting the right classes on the right elements.  
to link sounds to events, put a class on the source element of the sound you want then place the same class with an optional colon with the event name to the element you want for the sound to be played when the event is dispatched. 
```html
<source class="name" src="file" type="audio/type">
<button class="name:event">dispatch event</button>
```
## configuration
the configuration is just like setting it on a regular html audio element and any changes to the configuration will be applied in an instant. 
### mute audio
```html
<script src="https://audio.yiu.ch/audio.js" defer muted></script>
```
### set volume
```html
<script src="https://audio.yiu.ch/audio.js" defer volume="0.5"></script>
```