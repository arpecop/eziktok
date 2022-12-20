import { API, graphqlOperation } from 'aws-amplify';

import { Buffer } from 'buffer';

// Define the id of the THREAD post to paginate
const threadId = "THREAD_1";

// Define the limit and nextToken parameters for the query
const limit = 10;
const nextToken = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Set the nextToken to the value returned by the previous query

// Define the query to retrieve the replies and sub-replies to the THREAD post
const query = `query replies($threadId: ID!, $limit: Int, $nextToken: String) {
  replies(threadId: $threadId, limit: $limit, nextToken: $nextToken) {
    items {
      id
      text
      user
      date
      parent
      replies
      type
    }
    nextToken
  }
}`;

// Execute the query to retrieve the replies and sub-replies to the THREAD post
const result = await API.graphql(graphqlOperation(query, { threadId, limit, nextToken }));

// Print the result of the query
console.log(result);