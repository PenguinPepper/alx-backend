import { createClient } from 'redis';
import redis from 'redis';
import { promisify } from 'util';

const client = createClient();
client.on('error', err => console.log(`Redis client not connected to the server: ${err}`));

client.on('connect', () => console.log(`Redis client connected to the server`));

const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

async function setNewSchool(schoolName, value) {
  try{
    await setAsync(schoolName, value);
    console.log(value);
  } catch (err) {
    console.log('Ooops i did it again');
  }
}

async function displaySchoolValue(schoolName) {
  try{
    const value = await getAsync(schoolName);
    console.log(value);
  } catch (err) {
    console.log('Ooops i did it again');
  }
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
