import { initializeApp } from 'firebase/app';



const firebaseConfig = {
  apiKey: "AIzaSyDF5JudBkhp8lAR2Sof3Dm7s_80pBwjxeU",
  authDomain: "periodico-hoy-db.firebaseapp.com",
  databaseURL: "https://periodico-hoy-db-default-rtdb.firebaseio.com",
  projectId: "periodico-hoy-db",
  storageBucket: "periodico-hoy-db.appspot.com",
  messagingSenderId: "758100973171",
  appId: "1:758100973171:web:7b1ffde4c754288204fc06"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyDF5JudBkhp8lAR2Sof3Dm7s_80pBwjxeU",
//   authDomain: "periodico-hoy-db.firebaseapp.com",
//   databaseURL: "https://periodico-hoy-db-default-rtdb.firebaseio.com",
//   projectId: "periodico-hoy-db",
//   storageBucket: "periodico-hoy-db.appspot.com",
//   messagingSenderId: "758100973171",
//   appId: "1:758100973171:web:7b1ffde4c754288204fc06"
// };



export const app = initializeApp(firebaseConfig)
