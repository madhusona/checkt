importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyB2M247g4MruADB7ulqJA-vwxzMW4mQvRk",
    authDomain: "quiz-b5c85.firebaseapp.com",
    databaseURL: "https://quiz-b5c85.firebaseio.com",
    projectId: "quiz-b5c85",
    storageBucket: "quiz-b5c85.appspot.com",
    messagingSenderId: "43594244658",
    appId: "1:43594244658:web:91994d8917d30e49fd522b"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.onBackgroundMessage(function(payload) {
    console.log('Received background message ', payload);
  
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
    };
  
    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });