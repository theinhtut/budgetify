// import * as firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/database';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyBx81Ipn_paDjifrouYkdKAJTR1ryS1UZ8',
  authDomain: 'budgetify-ffd10.firebaseapp.com',
  databaseURL: 'https://budgetify-ffd10.firebaseio.com',
  projectId: 'budgetify-ffd10',
  storageBucket: 'budgetify-ffd10.appspot.com',
  messagingSenderId: '897997210768'
};
firebase.initializeApp(config);

const database = firebase.database();

database
  .ref('expenses')
  .once('value')
  .then(snapshot => {
    const expenses = [];

    snapshot.forEach(chileSnapshot => {
      expenses.push({
        id: chileSnapshot.key,
        ...chileSnapshot.val()
      });
    });

    console.log(expenses);
});

database.ref('expenses').on('value', snapshot => {
  const expenses = [];

  snapshot.forEach(chileSnapshot => {
    expenses.push({
      id: chileSnapshot.key,
      ...chileSnapshot.val()
    });
  });

  console.log(expenses);
});

// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: 324274384738
// });

// database.ref('expenses').push({
//     description: 'Phone Bill',
//     note: '',
//     amount: 9500,
//     createdAt: 324274384738
// });

// database.ref('expenses').push({
//     description: 'Food',
//     note: '',
//     amount: 1200,
//     createdAt: 324274384738
// });

// database.ref('notes').push({
//     title: 'To Do',
//     body: 'Go for a run'
// });

// database.ref().set(
//     {
//         name: 'Thein Htut',
//         age: 25,
//         isSingle: false,
//         location: {
//             city: 'KL',
//             country: 'Malaysia'
//         }
//     }
// ).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This is failed', e);
// });

// database.ref()
// .once('value')
// .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// })
// .catch((e) => {
//     console.log('Error fetching data', e);
// });

// database.ref()
// .remove()
// .then(() => {
//     console.log('Data is removed');
// })
// .catch((e) => {
//     console.log('This is failed', e);
// });
