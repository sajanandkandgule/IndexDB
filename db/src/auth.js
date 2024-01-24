// auth.js not useing this just keept for refrence
import { addData, getData } from './idb';

const USER_STORE = 'USER_STORE';

export async function registerUser(username, password) {
  try {
    // Check if the user with the given username already exists
    const existingUser = await getUserByUsername(username);
    if (existingUser) {
      throw new Error('Username already exists. Please choose a different one.');
    }

    // If the username is unique, add the user to IndexedDB
    const userData = { username, password };
    await addData(USER_STORE, userData);

    return true; // Registration successful
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
}

export async function loginUser(username, password) {
  try {
    // Get user data by username
    const userData = await getUserByUsername(username);

    // Check if the user exists and the password is correct
    if (userData && userData.password === password) {
      return true; // Login successful
    } else {
      throw new Error('Invalid username or password.');
    }
  } catch (error) {
    console.error('Error logging in user:', error);
    throw error;
  }
}

async function getUserByUsername(username) {
  try {
    // Get user data by username from IndexedDB
    const userData = await getData(USER_STORE, username);
    return userData;
  } catch (error) {
    console.error('Error getting user by username:', error);
    throw error;
  }
}
