import kue from 'kue';

const push_notification_code = kue.createQueue();
const obj = {
  phoneNumber: "",
  message: "",
};

const job = push_notification_code.create('notification', job).save((err) => {
  if (!err) {
    console.log(`Notification job created: ${job.id}`);
  } else {
    console.log(`Notification job failed`);
  }
});

push_notification_code.on('job complete', (id, result) => { 
  kue.Job.get(id, (err, job) => {
    if (err) return;
    console.log("Notification job completed");
    console/log("Here is the job info:", job.id, job.type, job.data);
  })
})
