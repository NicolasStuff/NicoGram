Hello Stranger Visitor!

I created this Minimalist Instagram Clone with :

-React Js

-Firebase (Firestore and Storage)

-Framer Motion

To lunch this project 

Step 1 : Clone it :p

Step 2 : Install dependencies ==> npm install

Step 3 : Create in src a folder named firebase and a file inside it called config.js

In This file you'll have to paste the configuration key from Firebase after having created a web project.

ex : 

import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "BLABLABLA",
    authDomain: "BLABLABLA",
    projectId: "BLABLABLA",
    storageBucket: "BLABLABLA",
    messagingSenderId: "BLABLABLA",
    appId: "BLABLABLA",
    measurementId: "BLABLABLA"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  
  export {projectFirestore, projectStorage, timestamp}

Step 4 : Have Fun !!

Make sure to subscribe to my Github if you liked this project !

Peace ! :D
