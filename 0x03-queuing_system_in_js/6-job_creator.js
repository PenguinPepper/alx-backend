import kue from 'kue';

const queue = kue.createQueue();
const obj = {
  phoneNumber: "",
  message: "",
};

const job = queue.create('push_notification_code', job).save((err) => {
  if (!err) {
    console.log(`Notification job created: ${job.id}`);
  } else {
    console.log(`Notification job failed`);
  }
});

queue.on('job complete', (id, result) => { 
  kue.Job.get(id, (err, job) => {
    if (err) return;
    console.log("Notification job completed");
    console.log("Here is the job info:", job.id, job.type, job.data);
  });
});
