import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDYzbCEYgZWRJUAc-vAGIVGHbc2u8jxWb4",
    authDomain: "fir-react-72763.firebaseapp.com",
    databaseURL: "https://fir-react-72763.firebaseio.com",
    projectId: "fir-react-72763",
    storageBucket: "fir-react-72763.appspot.com",
    messagingSenderId: "312716913880",
    appId: "1:312716913880:web:5bfd3aa014dd79c48abbad",
    measurementId: "G-83VWR664EW"
  };

  const fire = firebase.initializeApp(firebaseConfig);
export default fire;