import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCEdXQzqvtEHFl3ARyyZoJCr4HO1uJFVXc',
  authDomain: 'my-subscriptions-24595.firebaseapp.com',
  projectId: 'my-subscriptions-24595',
  storageBucket: 'my-subscriptions-24595.appspot.com',
  messagingSenderId: '215755479908',
  appId: '1:215755479908:web:d5c95da6e95d084af83871'
}

const db = firebase.initializeApp(firebaseConfig)
export default db.firestore()
