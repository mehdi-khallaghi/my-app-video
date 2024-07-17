import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/css/bootstrap.min.css'
import './assets/css/bootstrap.rtl.min.css'
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
// import { createStore } from 'redux';
import rootRaducers from './components/Redux/reducers';
import Users, { userSlice } from './features/Users';
import useReducer from './features/Users';
import movieRaducer from './features/movie'
import * as ServiceWorkerRegistration from './serviceWorkerRegistration'
import { register } from 'workbox-registration';  

const root = ReactDOM.createRoot(document.getElementById('root'));
const rejester = register(); 
ServiceWorkerRegistration.rejester();

// const store = createStore(rootRaducers);
const store = configureStore({
  reducer: {
    users: useReducer,
    movies: movieRaducer
  }
});

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>

);

//------------service worker--------------------------------
// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker.register('/sw.js').then((res) => {
//     if (res.installing) {
//       console.log('installing')
//     }
//     if (res.waiting) {
//       console.log('waiting')
//     }
//     if (res.active) {
//       console.log('active')
//     }
//   }).catch(rej => {
//     console.log('register has error')
//   })
// }
//---------------------install banner-------------------------------------

// window.addEventListener("beforeinstallprompt", (e) => {  
//   e.preventDefault();  
//   let deferredPrompt = e;  
//   let addBtn = document.getElementById('install_banner');  
//   let yesBtn = document.getElementById('yes');  
//   let noBtn = document.getElementById('no');  

//   addBtn.style.display = "block";  

//   yesBtn.addEventListener("click", (e) => {  
//     addBtn.style.display = "none";  
//     deferredPrompt.prompt();  
//     deferredPrompt.userChoice.then((choiceResult) => {  
//       if (choiceResult.outcome === "accepted") {  
//         console.log("کاربر پرومت نصب را پذیرفت");  
//       } else {  
//         console.log("کاربر پرومت نصب را رد کرد");  
//       }  
//       deferredPrompt = null;  
//     });  
//   });  

//   noBtn.addEventListener('click', (e) => {  
//     addBtn.style.display = "none";  
//   });  
// });

window.addEventListener("beforeinstallprompt", (e) => {
  console.log("رویداد beforeinstallprompt اتفاق افتاد");
  e.preventDefault();
  let deferredPrompt = e;
  let addBtn = document.getElementById('install_banner');
  let yesBtn = document.getElementById('yes');
  let noBtn = document.getElementById('no');

  addBtn.style.display = "block";

  yesBtn.addEventListener("click", (e) => {
    console.log("دکمه yes کلیک شد");
    addBtn.style.display = "none";
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("کاربر پرومت نصب را پذیرفت");
      } else {
        console.log("کاربر پرومت نصب را رد کرد");
      }
      deferredPrompt = null;
    });
  });

  noBtn.addEventListener('click', (e) => {
    addBtn.style.display = "none";
  });
});
//----------------------service workbox--------------------------------------------

export { rejester }; 
reportWebVitals();
