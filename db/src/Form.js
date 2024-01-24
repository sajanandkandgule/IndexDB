// Form.js
import React, { useState } from 'react';
import { LOCATION_STORE, addData } from './idb';
import Confirmation from './Confirmation';
const Form = ({ onSave, onCancel }) => {
    const [formData, setFormData] = useState({
        partnumbar:"",
        text: '',
        quantity: '',
        to: '',
        toQuantity: '',
    });
    const [save, setSave] = useState(false);



    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
        // Validate quantity and toQuantity
        // if (formData.quantity < 0 || formData.toQuantity > formData.quantity) {
        //     alert('Invalid input! Quantity should be non-negative, and toQuantity should not be greater than quantity.');
        // } else {

            setSave(true)


        // }
    };

    return (

        <div>
            {
                save?<Confirmation data ={formData}/>:
           
            <form onSubmit={handleSave}>
                 <label>
                    partnumbar:
                    <input type="number" name="partnumbar" value={formData.partnumbar} onChange={handleInputChange} />
                </label>
                <label>
                    Text:
                    <input type="text" name="text" value={formData.text} onChange={handleInputChange} />
                </label>
                <label>
                    Quantity:
                    <input type="number" name="quantity" value={formData.quantity} onChange={handleInputChange} />
                </label>
                <label>
                    To:
                    <input type="text" name="to" value={formData.to} onChange={handleInputChange} />
                </label>
                <label>
                    To Quantity:
                    <input type="number" name="toQuantity" value={formData.toQuantity} onChange={handleInputChange} />
                </label>
                <button type="button" onClick={handleSave}>Save</button>
                <button type="button" onClick={onCancel}>Cancel</button>
            </form> 
            }

        </div>
    );
};

export default Form;



// Form.js
// import React, { useState } from 'react';
// import { LOCATION_STORE, addData } from './idb';
// import Confirmation from './Confirmation';
// const Form = ({ onSave, onCancel }) => {
//     const [formData, setFormData] = useState({
//         username: '',
//         password: '',
//         partnumbar:"",
//         text: '',
//         quantity: '',
//         to: '',
//         toQuantity: '',
//     });
//     const [save, setSave] = useState(false);



//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSave = () => {
//         // Validate quantity and toQuantity
//         // if (formData.quantity < 0 || formData.toQuantity > formData.quantity) {
//         //     alert('Invalid input! Quantity should be non-negative, and toQuantity should not be greater than quantity.');
//         // } else {

//             setSave(true)


//         // }
//     };

//     return (

//         <div>
//             {
//                 save?<Confirmation data ={formData}/>:
           
//             <form onSubmit={handleSave}>
//                 <label>
//             Username:
//             <input type="text" name="username" value={formData.username} onChange={handleInputChange} />
//           </label>
//           <label>
//             Password:
//             <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
//           </label>
//                  <label>
//                     partnumbar:
//                     <input type="number" name="partnumbar" value={formData.partnumbar} onChange={handleInputChange} />
//                 </label>
//                 <label>
//                     Text:
//                     <input type="text" name="text" value={formData.text} onChange={handleInputChange} />
//                 </label>
//                 <label>
//                     Quantity:
//                     <input type="number" name="quantity" value={formData.quantity} onChange={handleInputChange} />
//                 </label>
//                 <label>
//                     To:
//                     <input type="text" name="to" value={formData.to} onChange={handleInputChange} />
//                 </label>
//                 <label>
//                     To Quantity:
//                     <input type="number" name="toQuantity" value={formData.toQuantity} onChange={handleInputChange} />
//                 </label>
//                 <button type="button" onClick={handleSave}>Save</button>
//                 <button type="button" onClick={onCancel}>Cancel</button>
//             </form> 
//             }

//         </div>
//     );
// };

// export default Form;
