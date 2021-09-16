import firebase from 'firebase';


    const firebaseConfig = {
      apiKey: "AIzaSyCvbYMDC0AJvWY248wBIMi6IgopfpRm4Gk",
      authDomain: "project-67-78591.firebaseapp.com",
      projectId: "project-67-78591",
      storageBucket: "project-67-78591.appspot.com",
      messagingSenderId: "1059007667539",
      appId: "1:1059007667539:web:6fd8b0c3957b3e758b15a6"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
 

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();