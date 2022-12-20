import { client, env, gquery } from '../../data/graphql';

import Ad from '../../components/ads/Ad';
import type { AdType } from '../../data/ads';
import AdsLayout from '../../components/Layouts/AdsLayout';
import CatButton from '../../components/ads/CatButton';
import { GetServerSideProps } from 'next';
import type { IconName } from '../../components/Icon';
import Link from 'next/link';
import Main from '../../components/Layouts/Main';
import Meta from '../../components/Layouts/Meta';
import adsData from '~/json/adsData.json';

const AdsIndex = ({ ads, search }: { ads: AdType[]; search?: string }) => {
  return (
    <Main
      home="/ads/"
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
        <>
          {search ? (
            <>Търсене за: {search}</>
          ) : (
            <>
              <div className="py-2">
                <h1>Категории:</h1>
              </div>
              <div className="grid gap-1 sm:grid-cols-2 md:grid-cols-3">
                {adsData.map(({ name, slug, icon }) => (
                  <CatButton
                    slug={slug}
                    icon={icon as IconName}
                    name={name}
                    href={`/ads/cat/${slug}`}
                    key={slug}
                  />
                ))}
              </div>
            </>
          )}

          <div
            className={`mt-4 gap-3 ${search ? 'grid' : 'grid sm:grid-cols-3 md:grid-cols-4 mb-4'
              }`}
          >
            {ads.map(({ id, images, price, title, data }: AdType) => (
              <Ad
                key={id}
                id={id}
                images={images}
                price={price}
                title={title}
                long={search ? true : false}
                data={data}
                username="test"
              />
            ))}
          </div>
        </>
      </AdsLayout>
      <Link
        prefetch={false}
        href="/ads/create/"
        className="btn-secondary btn mb-4"
      >
        Публикувай Обява
      </Link>
    </Main>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const variables = {
    sortDirection: 'DESC',
    limit: 20,
    nextToken: null,
    type: env === 'development' ? 'ad' : 'adprod'
  };

  const ads = await client.query({
    query: gquery.ADS_QUERY_LISTALL,
    variables
  });
  //console.log(JSON.stringify(ads.errors, null, 2));
  console.log(ads);

  console.log(variables);

  return {
    props: {
      ads: ads.data.data.items
    }
  };
};

export default AdsIndex;
