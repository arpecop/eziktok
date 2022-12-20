import type { CarObject } from '../../../data/cars';
import type { GetServerSideProps } from 'next';
import Link from 'next/link';
import Main from '../../../components/Layouts/Main';
import Meta from '../../../components/Layouts/Meta';
import Thread from '../../../components/forums/Thread';
import type { ThreadType } from '../../../components/forums/Thread';
import { client } from '../../../data/graphql';
import data from '~/json/carsData.json';
import dynamic from 'next/dynamic';
import { gql } from '@apollo/client';
import { useAtomValue } from 'jotai';
import { useratom } from '../../../atoms/dialog';

const Editor = dynamic(() => import('../../../components/forms/Editor'), {
  ssr: false
});
const BrandIndex = ({
  brandata,
  subcat,
  threads
}: {
  brand: string;
  brandata: CarObject;
  subcat?: { name: string; slug: string };
  threads: ThreadType[];
  count: number;
  p: string;
}) => {
  const user = useAtomValue(useratom);
  return (
    <Main
      home="/cars/"
      meta={
        <Meta
          title={`езикТок - ${brandata.name}: ${subcat?.name}`}
          description={`${brandata.name} ${subcat?.name} ремонт, технически проблеми, модификации, общи въпроси, дискусия , форум`}
        />
      }
    >
      <div className="mb-4 w-full">
        <h1 className="heading text-4xl uppercase">
          {brandata.name} {subcat?.name}
        </h1>
        {!user && (
          <Link prefetch={false} href="/auth/" className="btn-secondary btn">
            Нова тема
          </Link>
        )}
        {user && subcat?.slug && (
          <Editor
            type="new"
            items={brandata.items}
            parrent={[brandata.slug, subcat.slug]}
            user={user}
          />
        )}
      </div>
      {subcat?.slug &&
        threads.map(({ title, description, id, date, username }) => (
          <Thread
            key={id}
            id={id}
            title={title}
            description={description}
            date={date}
            parrent={[brandata.slug, subcat.slug]}
            username={username || 'test'}
            images={[]}
            short={true}
          />
        ))}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {!subcat?.name &&
          brandata.items.map(({ name, slug, image }) => (
            <Link
              prefetch={false}
              key={slug}
              href={`/cars/${brandata.slug}__${slug}`}
              className="relative flex rounded-sm border-2 border-sky-500"
            >
              <img
                src={`/models/${image}`}
                alt={name}
                width="120"
                height="90"
              />
              <div className="text-shadow heading absolute top-0 left-0 flex h-full w-full items-center justify-center uppercase text-white">
                {name}
              </div>
            </Link>
          ))}
      </div>
    </Main>
  );
};

const DATA_QUERY = gql`
  query MyQuery($brand: String) {
    forum: adsByDate(
      type: "carforums1"
      sortDirection: DESC
      filter: { cat: { contains: $brand } }
    ) {
      nextToken
      items {
        id
        title
        description
        parrent
        images
        createdAt
      }
    }
  }
`;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { brand, p }: { brand?: string; p?: string } = query;
  const b = brand?.split('__');
  const catx = b?.[1];
  const brandata = data.find((item: CarObject) => item.slug === b?.[0]);
  const subcat = catx ? brandata?.items.find((item) => item.slug === catx) : {};

  console.log(brand);

  const threads = await client.query({
    query: DATA_QUERY,
    variables: {
      brand
    }
  });

  console.log(threads.data.forum.items);

  return {
    props: {
      brand,
      brandata,
      subcat,
      threads: threads.data.forum.items,

      p: p || 1
    }
  };
};

export default BrandIndex;
