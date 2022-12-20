import { GetServerSideProps } from 'next';
import { graphqlOperation } from 'aws-amplify';
import { getForum, listForumReplies } from '../../graphql/queries';

// Define the getServerSideProps function
export const getServerSideProps: GetServerSideProps = async (context) => {
  // Retrieve the thread ID and last ID from the query parameters
  const threadID = context.query['thread-id'];
  const lastID = context.query.last;

  // Query for the thread data
  const threadData = await API.graphql(graphqlOperation(getForum, {
    id: threadID
  }));

  // Query for the replies, starting from the last reply
  const replyData = await API.graphql(graphqlOperation(listForumReplies, {
    filter: {
      threadID: { eq: threadID }
    }
    startingAfter: lastID,
    limit: 10
  }));

  // Return the thread and reply data
  return {
    props: {
      thread: threadData.data.getForum,
      replies: replyData.data.listForumReplies.items
    }
  };
};