import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc
} from 'firebase/firestore'

const firebaseConfig = {
  // Placez ici vos identifiants Firebase (SDK) - Cf. diapos 14 et 15
  apiKey: 'AIzaSyB4W2URXiVrBUPWOCx3eF43VX_rlR0bVBo',
  authDomain: 'ican-blog.firebaseapp.com',
  projectId: 'ican-blog',
  storageBucket: 'ican-blog.firebasestorage.app',
  messagingSenderId: '903866325301',
  appId: '1:903866325301:web:12b9aaf4d145e7082c147c'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export const getArticles = callback => {
  const q = query(collection(db, 'articles'), orderBy('title', 'asc'))
  onSnapshot(q, snapshot => {
    let articles = []
    snapshot.forEach(doc => {
      articles.push({ id: doc.id, ...doc.data() })
    })
    callback(articles)
  })
}

export const addArticle = article => {
  addDoc(collection(db, 'articles'), article)
}

export const updateArticle = article => {
  updateDoc(doc(db, 'articles', article.id), article)
}

export const deleteArticle = article => {
  deleteDoc(doc(db, 'articles', article.id))
}
