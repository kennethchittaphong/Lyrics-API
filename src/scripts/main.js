// USE WITH FIREBASE AUTH
// import checkLoginStatus from './helpers/auth';
import axios from 'axios';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

// RENDER TO DOM
const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};

// API CALL
const getLyrics = (artist, song) => new Promise((resolve, reject) => {
  axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// UI presentation (HTML ON THE DOm)
const lyricsOnDom = (artist, song) => {
  getLyrics(artist, song).then((response) => {
    document.querySelector('#app').innerHTML = response.lyrics;
  });
};

// BUTTON
const btnClick = () => {
  let domString = '';
  domString = `<button type="button" class="btn btn-primary"
  style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
Log lyrics
</button>`;
  renderToDom('#btnContainer', domString);
};

// FORM
const inputForm = () => {
  let domString = '';
  domString = `<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
</div>

<label for="basic-url" class="form-label">Your opinion</label>

<div class="input-group">
  <span class="input-group-text">With textarea</span>
  <textarea class="form-control" aria-label="With textarea"></textarea>
</div>

<button type="button" class="submitBtn"
  style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
Submit
</button>
`;
  renderToDom('#formContainer', domString);
};

const startApp = () => {
  lyricsOnDom('nav', 'myself');
  btnClick();
  inputForm();
};

startApp();
