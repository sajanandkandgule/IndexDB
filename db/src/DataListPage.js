// DataListPage.js
import React, { useState, useEffect } from 'react';
import { getAllData, deleteData, deleteDatabase, LOCATION_STORE } from './idb';

const DataListPage = () => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    // Fetch all data from IndexedDB on component mount
    getAllData(LOCATION_STORE)
      .then((res) => {
        setDataList(res);
      })
      .catch((error) => {
        console.error('Error fetching data from IndexedDB:', error);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      // Delete the data from IndexedDB
      await deleteData(LOCATION_STORE, id);

      // Update the UI by removing the deleted entry
      setDataList((prevDataList) => prevDataList.filter((item) => item.idbID !== id));
    } catch (error) {
      console.error('Error deleting data from IndexedDB:', error);
    }
  };

  const handleDeleteAllData = async () => {
    try {
      // Delete all data from IndexedDB
      await Promise.all(dataList.map((data) => deleteData(LOCATION_STORE, data.idbID)));

      // Update the UI by clearing the data list
      setDataList([]);
    } catch (error) {
      console.error('Error deleting all data from IndexedDB:', error);
    }
  };

  const handleDeleteDatabase = async () => {
    try {
      // Delete the entire database
      await deleteDatabase('TestDb');

      // Update the UI by clearing the data list
      setDataList([]);
    } catch (error) {
      console.error('Error deleting the entire database:', error);
    }
  };

  

  return (
    <div>
      <h2>Data List Page</h2>
      <button type="button" onClick={handleDeleteAllData}>
          Delete All Data
        </button>
        <button type="button" onClick={handleDeleteDatabase}>
          Delete Database
        </button>
      <ul>
        {dataList.map((data) => (
          <li key={data.idbID}>
            <p>partnumbar: {data.partnumbar}</p>
            <p>Text: {data.text}</p>
            <p>Quantity: {data.quantity}</p>
            <p>To: {data.to}</p>
            <p>To Quantity: {data.toQuantity}</p>
            <p>Remaining Quantity: {data.quantity - data.toQuantity}</p>
            <button type="button" onClick={() => handleDelete(data.idbID)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataListPage;


//aboue is right
