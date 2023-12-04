import kue from 'kue';

function createPushNotificationsJobs(jobs, queue) {
  try {
    jobs.map((jobData) => {
      const job = queue.create('push_notification_code_3', jobData). save((err) => {
        if (!err) {
	  console.log(`Notification job created: ${job.id}`);
	} else {
	  console.log(`Notification job ${job.id} failed: ${err}`);
	}
      });

      job.on('complete', () => {
        console.log(`Notification job ${job.id} completed`);
      });

      job.on('progress', (progress) => {
        console.log(`Notification job ${job.id} ${progress}% complete`);
      });
    });
  } catch (err) {
    throw new Error('Jobs is not an array');
  }
}

export default createPushNotificationsJobs;
