import { createClient } from 'redis';

async function connectToClient() {
  const client = createClient();
  client.on('error', err => console.log(`Redis client not connected to the server: ${err}`));

  try{  
    client.on('connect', () => console.log(`Redis client connected to the server`));
  } catch (err) {
    console.log(`Ahhh an error occured ${err}`);
  }
}

connectToClient();
