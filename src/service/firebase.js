import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyCpxYmACoukA1GU3thKFBcXLv6mri0qFPM',
  authDomain: 'cropchat-4ce99.firebaseapp.com',
  databaseURL: 'https://cropchat-4ce99.firebaseio.com',
  projectId: 'cropchat-4ce99',
  storageBucket: 'cropchat-4ce99.appspot.com',
  messagingSenderId: '30640025043'
}

firebase.initializeApp(config)

export default {
  database: firebase.database()
}
