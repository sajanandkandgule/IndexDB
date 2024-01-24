import { openDB } from "idb";

const dbName = "TestDb";
export const LOCATION_STORE = "LOCATION_STORE";
export const USER_STORE = "USER_STORE";

let dbConnection;

async function getDatabase() {
  if (!dbConnection) {
    dbConnection = await openDB(dbName, 1, {
      upgrade(db) {
        if (!db.objectStoreNames.contains(LOCATION_STORE)) {
          db.createObjectStore(LOCATION_STORE, {
            autoIncrement: true,
          });
        }
        if (!db.objectStoreNames.contains(USER_STORE)) {
          db.createObjectStore(USER_STORE, { keyPath: 'username' });
        }

      },
    });
  }
  return dbConnection;
}


export async function addStaticUserData() {
  const db = await getDatabase();
  const userData = { username: 'admin', password: 'adminpassword' };

  try {
    await db.add(USER_STORE, userData);
  } catch (error) {
    console.error("Error adding static user data:", error);
    throw error;
  }
  addStaticUserData();
}





export async function addData(storeName, data) {
  const db = await getDatabase();
  try {
    return await db.add(storeName, data);
  } catch (error) {
    console.error("Error adding data:", error);
    throw error;
  }
}

export async function getData(storeName, id) {
  const db = await getDatabase();
  try {
    return await db.get(storeName, id);
  } catch (error) {
    console.error("Error retrieving data:", error);
    throw error;
  }
}

export async function getAllData(storeName) {
  const db = await getDatabase();
  try {
    const allData = await db.getAll(storeName);
    const allKeys = await db.getAllKeys(storeName);
    return allData.map((data, index) => {
      data["idbID"] = allKeys[index];
      return data;
    });
  } catch (error) {
    console.error("Error retrieving all data:", error);
    throw error;
  }
}

export async function updateData(storeName, data) {
  const db = await getDatabase();
  try {
    return await db.put(storeName, data);
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
}

export async function deleteData(storeName, id) {
  const db = await getDatabase();
  try {
    return await db.delete(storeName, id);
  } catch (error) {
    console.error("Error deleting data:", error);
    throw error;
  }
}

export async function deleteDatabase(dbName) {

  try {
    await indexedDB.deleteDatabase(dbName);
    console.log(`Database '${dbName}' deleted successfully.`);
  } catch (error) {
    console.error(`Error deleting database '${dbName}':`, error);
    throw error;
  }
}


