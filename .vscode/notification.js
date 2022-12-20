import AWS from 'aws-sdk';

// Configure the AWS SDK with your credentials
AWS.config.update({
  accessKeyId: 'ACCESS_KEY_ID',
  secretAccessKey: 'SECRET_ACCESS_KEY',
  region: 'REGION',
});

// Create a new Pinpoint client
const pinpoint = new AWS.Pinpoint({ apiVersion: '2016-12-01' });

// Create a new message to send to the user
const message = {
  MessageConfiguration: {
    APNS: {
      Body: 'Hello, world!',
      Title: 'My App',
      Url: 'https://myapp.com',
    },
  },
  Users: {
    USER_ID: {
      ChannelType: 'APNS',
      UserId: 'USER_ID',
    },
  },
};

// Send the message to the user
pinpoint
  .sendMessages({ ApplicationId: 'APPLICATION_ID', MessageRequest: message })
  .promise()
  .then((response) => {
    console.log('Notification sent to user:', response);
  })
  .catch((error) => {
    console.error('Error sending notification to user:', error);
  });

const message = {
  MessageConfiguration: {
    GCM: {
      Body: 'Hello, world!',
      Title: 'My App',
      Url: 'https://myapp.com',
    },
  },
  Users: {
    USER_ID_2: {
      ChannelType: 'GCM',
      UserId: 'USER_ID_2',
    },
  },
};
