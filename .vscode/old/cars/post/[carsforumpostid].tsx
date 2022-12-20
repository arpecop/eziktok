import type { GetServerSideProps } from 'next';
import Main from '../../../components/Layouts/Main';
import Meta from '../../../components/Layouts/Meta';
import Thread from '../../../components/forums/Thread';
import type { ThreadType } from '../../../components/forums/Thread';
import { client } from '../../../data/graphql';
import dynamic from 'next/dynamic';
import { gql } from '@apollo/client';
import { useAtomValue } from 'jotai';
import { useratom } from '../../../atoms/dialog';

const CommentWrapper = dynamic(
  () => import('../../../components/forums/CommentWrapper')
);

const Editor = dynamic(() => import('../../../components/forms/Editor'));

const Post = ({
  thread,
  comments
}: {
  thread: ThreadType[];
  comments: ThreadType[];
}) => {
  const user = useAtomValue(useratom);
  return (
    <Main
      home="/cars/"
      hideFooter={true}
      meta={
        <Meta
          title="езикТок - социалната мрежа"
          description="Български форум за програмиране, бизнес и обучение , автомобили и мотоциклети, филми и музика"
        />
      }
    >
      <div className="flex flex-wrap items-center justify-center">
        {thread.map(({ id, title, description, username, images }) => (
          <Thread
            key={id}
            id={id}
            title={title}
            description={description}
            date={'date'}
            parrent={[]}
            username={username}
            images={images}
          >
            {user && (
              <Editor
                parrent={['x', 'x']}
                user={user}
                type="reply"
                placeholder="Коментар"
              />
            )}
          </Thread>
        ))}
        <div className="w-full">
          <h1 className="text-3xl">Коментари:</h1>
        </div>
        {comments.map(({ id, username }) => (
          <div key={id}>
            {user && (
              <CommentWrapper user={user}>
                <Editor
                  parrent={['1']}
                  user={user}
                  type="reply"
                  placeholder="Коментар"
                  val={`@${username}: `}
                />
              </CommentWrapper>
            )}
          </div>
        ))}
      </div>
    </Main>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { carsforumpostid }: { carsforumpostid?: string } = query;

  const DATA_QUERY = gql`
    query MyQuery($carsforumpostid: ID = "arpecop") {
      thread: listAdsMains(filter: { id: { eq: $carsforumpostid } }) {
        items {
          title
          images
          id
          username
          thread: AdsMessages(filter: { read: { eq: false } }) {
            items {
              id
              from
              message
              createdAt
              adsmainID
            }
          }
        }
      }
    }
  `;
  const thread = await client.query({
    query: DATA_QUERY,
    variables: {
      carsforumpostid
    }
  });
  console.log(JSON.stringify(thread, null, 2));

  //const onlyposts = posts.data.comments;

  return {
    props: {
      thread: thread.data.thread.items,
      comments: []
    }
  };
};

export default Post;
