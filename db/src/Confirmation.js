

// Confirmation.js
import React from 'react';
import { LOCATION_STORE, addData } from './idb';
// import { useNavigate } from 'react-router-dom';


const Confirmation = ({ data }) => {
    
    const {text, quantity, to , toQuantity, partnumbar} = data
    // const navigate = useNavigate();




    const onSubmit =()=>{
   addData(LOCATION_STORE, data)
//    navigate('/datalist');
    }


    const onCancel =()=>{
        // navigate("./Form")
    }

    const remaingQuantity = (data) => {
      const result =  quantity- toQuantity
      return result
    }

  return (
    <div>
      <h2>Confirmation Page</h2>
    
        <div>
            <p>partnumbar : {partnumbar}</p>
          <p>Text: {text}</p>
          <p>Quantity: {quantity}</p>
          <p>To: {to}</p>
          <p>To Quantity: {toQuantity}</p>
          <p>remaingQuantity: {remaingQuantity()}</p>
        </div>
  
      <button type="button" onClick={onSubmit}>
        Submit
      </button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </div>
  );
};

export default Confirmation;

// aboue is right




// Confirmation.js
// import React ,{ useState } from 'react';
// import { LOCATION_STORE, addData } from './idb';
// import { registerUser } from './auth';
// // import { useNavigate } from 'react-router-dom';


// const Confirmation = ({ data }) => {
    
//     const {text, quantity, to , toQuantity, partnumbar} = data
//     const [registered, setRegistered] = useState(false);
//     // const navigate = useNavigate();




// //     const onSubmit =()=>{
// //    addData(LOCATION_STORE, data)
// // //    navigate('/datalist');
// //     }

// const onSubmit = async () => {
//   try {
//     // Add data to IndexedDB
//     await addData(LOCATION_STORE, data);

//     // Register user (if not already registered)
//     if (!registered) {
//       await registerUser(data.username, data.password);
//       setRegistered(true);
//     }

//     // Handle further actions or redirections
//     // ...

//   } catch (error) {
//     console.error('Error submitting data:', error);
//   }
// };


//     const onCancel =()=>{
//         // navigate("./Form")
//     }

//     const remaingQuantity = (data) => {
//       const result =  quantity- toQuantity
//       return result
//     }

//   return (
//     <div>
//       <h2>Confirmation Page</h2>
    
//         <div>
//             <p>partnumbar : {partnumbar}</p>
//           <p>Text: {text}</p>
//           <p>Quantity: {quantity}</p>
//           <p>To: {to}</p>
//           <p>To Quantity: {toQuantity}</p>
//           <p>remaingQuantity: {remaingQuantity()}</p>
//         </div>
  
//       <button type="button" onClick={onSubmit}>
//         Submit
//       </button>
//       <button type="button" onClick={onCancel}>
//         Cancel
//       </button>
//     </div>
//   );
// };

// export default Confirmation;



