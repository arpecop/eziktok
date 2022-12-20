import React, { useState } from 'react';
import {
  avatarcolors,
  catBasicInfo,
  getfields,
  slugify,
} from '/utils/adshelper';
import { client, gquery } from '/data/graphql';

import type { AdType } from '/data/ads';
import AdsLayout from '/components/Layouts/AdsLayout';
import DescriptionFormatter from '/components/ads/DescriptionFormatter';
import type { Field } from '/data/ads';
import { GetServerSideProps } from 'next';
import { Icon } from '/components/Icon';
import Link from 'next/link';
import Main from '/components/Layouts/Main';
import Meta from '/components/Layouts/Meta';
import SendReply from '/components/messages/SendReply';
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { useAtomValue } from 'jotai';
import { useratom } from '/atoms/dialog';
import { usernameformat } from '/utils/username';

/* eslint-disable @next/next/no-img-element */
type Details = {
  name: string;
  placeholder: string;
  after?: string;
  fields?: string;
}[];

const AdId = ({
  ad,
  adid,
}: {
  ad: AdType & { details: Details };
  adid: string;
}) => {
  const [showphone, setShowphone] = useState<boolean | string>(false);
  const user = useAtomValue(useratom);
  const imgs = JSON.parse(ad.images);

  const thirdcat = ad.data.type || ad.data.brand || ad.data.model;

  const showPhone = async () => {
    const d = await axios.post('/api/ads/showphone', {
      uid: adid,
      user,
    });
    setShowphone(d.data.userads[0].data.phone);
  };
  return (
    <Main
      home='/ads/'
      meta={
        <Meta
          title={ad.title}
          description={ad.description ? ad.description : ad.title}
        />
      }
      hideFooter={true}
      sidebar={
        ad.details[0] ? (
          <>
            <h2 className='text-xl font-bold'>Детайли</h2>
            <div className='gridgrid-cols-1 gap-2 mb-4'>
              {ad.details?.map(({ name, value, placeholder }) => (
                <div key={name}>
                  <p className='text-sm'>
                    <span className='text-sm font-bold'>{placeholder}: </span>
                    {typeof value === 'object' ? (
                      <ol>
                        {value.map((x) => (
                          <li key={x}>{x}</li>
                        ))}
                      </ol>
                    ) : (
                      value
                    )}
                  </p>
                </div>
              ))}
            </div>
          </>
        ) : null
      }
    >
      <AdsLayout>
        <div className='breadcrumbs text-sm'>
          <ul>
            {ad.parrent?.map((key) => (
              <li key={key}>
                <Link
                  prefetch={false}
                  href={`/ads/cat/${key}/`}
                  passHref={true}
                >
                  {catBasicInfo(key).name}
                </Link>
              </li>
            ))}
            {thirdcat && (
              <li>
                <Link
                  prefetch={false}
                  href={`/ads?search=${slugify(thirdcat)}`}
                  passHref={true}
                >
                  {thirdcat}
                </Link>
              </li>
            )}
          </ul>
        </div>

        <h1 className='text-2xl font-bold'>{ad.title}</h1>
        <div className='flex items-center'>
          <div className='mb-2 flex items-center'>
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-full text-white ${
                avatarcolors[ad.username.toUpperCase().charAt(0)]
              }`}
            >
              {ad.username.toUpperCase().slice(0, 2)}
            </div>
            <div className='ml-2'>
              <p className='text-sm font-bold'>{ad.username}</p>
              <p className='text-xs text-gray-500'>{ad.date}</p>
            </div>
          </div>

          {ad.price && ad.price > 0 ? (
            <div className='ml-auto flex items-center'>
              <p className='text-4xl font-light'>
                {ad.price} {ad.data.currency ? ad.data.currency : 'лв'}.
              </p>
            </div>
          ) : null}
        </div>
        {imgs && imgs.length > 0 && (
          <>
            {imgs.map((image: string) => (
              <img
                key={image}
                src={image}
                alt=''
                width={220}
                height={'auto'}
                className='mb-2 rounded-md'
              />
            ))}
          </>
        )}
        <div className='my-4'>
          {ad.description && (
            <DescriptionFormatter description={ad.description} />
          )}

          {ad.data.location && (
            <>
              <h2 className='text-xl font-bold'>Местоположение</h2>
            </>
          )}
          {ad.data.phone && (
            <div className='flex'>
              <Icon icon='PhoneIcon' className='h-14 w-12' />{' '}
              {showphone ? (
                <a className='text-4xl' href={`tel:${showphone}`}>
                  {showphone}
                </a>
              ) : (
                <>
                  <div className='text-4xl'>XXX XXX XXX</div>
                  <button className='btn ml-2' onClick={showPhone}>
                    Покажи
                  </button>
                </>
              )}
            </div>
          )}
          {user && ad.username !== usernameformat(user) && (
            <SendReply
              user={user}
              to={ad.username}
              subjectid={adid}
              from={usernameformat(user)}
            />
          )}
        </div>
      </AdsLayout>
    </Main>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { adid }: { adid?: string } = query;
  const ad = await client.query({
    query: gquery.AD,
    variables: {
      adid,
    },
  });

  const data = JSON.parse(ad.data.getAdsMain.data);
  const parrent = JSON.parse(ad.data.getAdsMain.parrent);

  const fieldsData = getfields(parrent[1])?.fields;

  const details = fieldsData
    ? fieldsData
        .map(({ placeholder, name, after }: Field) => {
          return {
            placeholder,
            name,
            value: data[name] + (after ? ` ${after}` : ''),
          };
        })
        .filter(({ value }: Field) => value && value !== 'undefined')
    : [];

  return {
    props: {
      adid,
      ad: {
        ...ad.data.getAdsMain,
        parrent: parrent.length > 1 ? parrent : [],
        details,
        data: {
          phone: data.phone ? 'XXX XXX XXX' : null,
        },
      },
    },
  };
};

export default AdId;
