import firebase from 'firebase';

const firebaseConfig = {
 
  apiKey: "AIzaSyCVLPYCoBSMkWRmMlsHnriwjfJOwmH7dhU",
  authDomain: "attendance-app-f0cca.firebaseapp.com",
  databaseURL: "https://attendance-app-f0cca-default-rtdb.firebaseio.com",
  projectId: "attendance-app-f0cca",
  storageBucket: "attendance-app-f0cca.appspot.com",
  messagingSenderId: "623194884847",
  appId: "1:623194884847:web:2b6eaeee6d75307bc6291a"

};

 if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database();