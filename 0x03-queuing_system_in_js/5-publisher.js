import { createClient } from 'redis';
import redis from 'redis';

const publisher = createClient();
publisher.on('error', err => console.log(`Redis client not connected to the server: ${err}`));
publisher.on('connect', () => console.log(`Redis client connected to the server`));

function publishMessage(message, time) {
  setTimeout(() => {
    publisher.publish('holberton school channel', message, (err, numSubs) => {
      if (err) {
        console.error('Failed to publish', err);
      } else {
        console.log(`About to send ${message}`);
      }
    });
  }, time);
}

publishMessage("Holberton Student #1 starts course", 100);
publishMessage("Holberton Student #2 starts course", 200);
publishMessage("KILL_SERVER", 300);
publishMessage("Holberton Student #3 starts course", 400);
