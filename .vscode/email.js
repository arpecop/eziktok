import Amplify, { AWS } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

const ses = new AWS.SES();

// Send an email
const sendEmail = async (to, subject, body) => {
  try {
    await ses
      .sendEmail({
        Source: 'sender@example.com',
        Destination: {
          ToAddresses: [to],
        },
        Message: {
          Subject: {
            Data: subject,
          },
          Body: {
            Text: {
              Data: body,
            },
          },
        },
      })
      .promise();
  } catch (e) {
    console.error(e);
  }
};
