import Ad from '../../../components/ads/Ad';
import type { AdType } from '../../../data/ads';
import AdsLayout from '../../../components/Layouts/AdsLayout';
import { GetServerSideProps } from 'next';
import Main from '../../../components/Layouts/Main';
import Meta from '../../../components/Layouts/Meta';
import { SEARCH_QUERY } from '../../../data/queries';
import client from '../../../data/client';

const AdsIndex = ({ ads, search }: { ads: AdType[]; search?: string }) => {
  return (
    <Main
      home="/ads/"
      hideFooter={true}
      meta={
        <Meta
          title={
            search
              ? `${search} обява , обяви за ${search}, купувам ${search}`
              : 'Ads'
          }
          description={
            search
              ? `${search} обява , продавам ${search}, купувам ${search}`
              : 'Ads'
          }
        />
      }
    >
      <AdsLayout>
        <div className="listsingleads">
          {ads.map(({ id, images, price, title }: AdType) => (
            <Ad
              key={id}
              id={id}
              images={images}
              price={price}
              title={title}
              long={search ? true : false}
              data={{ type: 'test' }}
              username="test"
            />
          ))}
        </div>
      </AdsLayout>
    </Main>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const s = query.query;

  const ads = await client.query({
    query: SEARCH_QUERY,
    variables: {
      search: s
    }
  });

  return {
    props: {
      search: s,
      ads: ads.data.userads
    }
  };
};

export default AdsIndex;
