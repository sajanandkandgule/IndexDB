
// import './App.css';

// // App.js
// import React, { useState, useEffect } from 'react';
// import {  Router, Routes , Route } from 'react-router-dom';
// import Form from './Form';
// import Confirmation from './Confirmation';
// import { openDB, deleteDB, wrap, unwrap } from 'idb';

// const DB_NAME = 'appDB';
// const STORE_NAME = 'formData';

// const App = () => {
//   const [formData, setFormData] = useState(null);
//   const [isConfirmationPage, setConfirmationPage] = useState(false);

//   useEffect(() => {
//     // Initialize the IndexedDB database
//     const initDB = async () => {
//       const db = await openDB(DB_NAME, 1, {
//         upgrade(db) {
//           db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
//         },
//       });
//       unwrap(db);
//     };

//     initDB();

//     return () => {
//       // Cleanup IndexedDB on component unmount (optional)
//       deleteDB(DB_NAME);
//     };
//   }, []);

//   const handleSave = (data) => {
//     setFormData(data);
//     setConfirmationPage(true);
//   };

//   const handleCancel = () => {
//     setFormData(null);
//     setConfirmationPage(false);
//   };

//   const handleSubmit = async () => {
//     if (formData) {
//       // Open the IndexedDB database
//       const db = await openDB(DB_NAME, 1);

//       // Add the form data to the IndexedDB store
//       const tx = db.transaction(STORE_NAME, 'readwrite');
//       const store = tx.objectStore(STORE_NAME);
//       const id = await store.add(formData);

//       // Commit the transaction
//       await tx.done;

//       // Notify the user
//       alert(`Data saved to IndexedDB with ID: ${id}`);

//       // Reset formData and navigate to the form page
//       setFormData(null);
//       setConfirmationPage(false);
//     }
//   };

//   return (
//     <Routes>
//       <Route exact path="/">
//         {!isConfirmationPage ? (
//           <Form onSave={handleSave} onCancel={handleCancel} />
//         ) : null}
//       </Route>
//       <Route path="/confirmation">
//         {isConfirmationPage ? (
//           <Confirmation formData={formData} onSubmit={handleSubmit} onCancel={handleCancel} />
//         ) : null}
//       </Route>
//     </Routes>
//   );
// };

// export default App;

// // App.js
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';  // Updated import
// import { Switch } from 'react-router-dom';  // Added import for Switch
// import Form from './Form';
// import Confirmation from './Confirmation';
// import { openDB, deleteDB, wrap, unwrap } from 'idb';

// const DB_NAME = 'appDB';
// const STORE_NAME = 'formData';

// const App = () => {
//   const [formData, setFormData] = useState(null);
//   const [isConfirmationPage, setConfirmationPage] = useState(false);

//   useEffect(() => {
//     // Initialize the IndexedDB database
//     const initDB = async () => {
//       const db = await openDB(DB_NAME, 1, {
//         upgrade(db) {
//           db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
//         },
//       });
//       unwrap(db);
//     };

//     initDB();

//     return () => {
//       // Cleanup IndexedDB on component unmount (optional)
//       deleteDB(DB_NAME);
//     };
//   }, []);

//   const handleSave = (data) => {
//     setFormData(data);
//     setConfirmationPage(true);
//   };

//   const handleCancel = () => {
//     setFormData(null);
//     setConfirmationPage(false);
//   };

//   const handleSubmit = async () => {
//     if (formData) {
//       // Open the IndexedDB database
//       const db = await openDB(DB_NAME, 1);

//       // Add the form data to the IndexedDB store
//       const tx = db.transaction(STORE_NAME, 'readwrite');
//       const store = tx.objectStore(STORE_NAME);
//       const id = await store.add(formData);

//       // Commit the transaction
//       await tx.done;

//       // Notify the user
//       alert(`Data saved to IndexedDB with ID: ${id}`);

//       // Reset formData and navigate to the form page
//       setFormData(null);
//       setConfirmationPage(false);
//     }
//   };

//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/">
//           {!isConfirmationPage && <Form onSave={handleSave} onCancel={handleCancel} />}
//         </Route>
//         <Route path="/confirmation">
//           {isConfirmationPage && (
//             <Confirmation formData={formData} onSubmit={handleSubmit} onCancel={handleCancel} />
//           )}
//         </Route>
//       </Switch>
//     </Router>
//   );
// };

// export default App;


// App.js below is working fine ---------------------------------------------
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { openDB } from 'idb';
import Form from './Form';
import Confirmation from './Confirmation';
import { getData , LOCATION_STORE, getAllData} from './idb';
import DataListPage from './DataListPage';


const DB_NAME = 'appDB';
const STORE_NAME = 'formData';

const App = () => {
  const [formData, setFormData] = useState(null);
  const [isConfirmationPage, setConfirmationPage] = useState(false);
 

  useEffect(() => {
    // Close the database after initialization
    getAllData(LOCATION_STORE)
    .then(res=>{
      console.log(res)
    })
    
    return () => {
      // Cleanup IndexedDB on component unmount (optional)
      // No need to deleteDB, just close the connection
    };
  }, []);

  const handleSave = (data) => {
    setFormData(data);
    setConfirmationPage(true);
  };

  const handleCancel = () => {
    setFormData(null);
    setConfirmationPage(false);
  };

  const handleSubmit = async () => {
    if (formData) {
      try {
        // Open the IndexedDB database
        const db = await openDB(DB_NAME, 1);

        // Add the form data to the IndexedDB store
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const store = tx.objectStore(STORE_NAME);
        const id = await store.add(formData);

        // Commit the transaction
        await tx.done;

        // Notify the user
        alert(`Data saved to IndexedDB with ID: ${id}`);

        // Reset formData and navigate to the form page
        setFormData(null);
        setConfirmationPage(false);
      } catch (error) {
        console.error('Error storing data in IndexedDB:', error);
        // Handle error, show user a message, etc.
      }
    }
  };

  return (
    <Router>
      <Route exact path="/">
        {!isConfirmationPage && <Form onSave={handleSave} onCancel={handleCancel} />}
      </Route>
      <Route path="/confirmation">
        {isConfirmationPage && (
          <Confirmation formData={formData} onSubmit={handleSubmit} onCancel={handleCancel} />
        )}
      </Route>
      <Route path="/datalist">
        {/* Display all data from IndexedDB and allow deletion */}
        <DataListPage formData={formData} onSubmit={handleSubmit} onCancel={handleCancel} />
      </Route>
    </Router>
  );
};

export default App;



