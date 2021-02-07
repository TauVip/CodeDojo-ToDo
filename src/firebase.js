import firebase from 'firebase'

firebase.initializeApp({
  apiKey: 'AIzaSyDuDJ8BOaUbfEoDnfnHnYVpFdRTwSTI6m4',
  authDomain: 'codedojo-todo.firebaseapp.com',
  projectId: 'codedojo-todo',
  storageBucket: 'codedojo-todo.appspot.com',
  messagingSenderId: '1022822789241',
  appId: '1:1022822789241:web:5e8f09250578e97bf264a8'
})

export const db = firebase.firestore()
