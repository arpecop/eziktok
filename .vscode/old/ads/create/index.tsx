import { Icon, IconName } from '../../../components/Icon';

import CatButton from '../../../components/ads/CatButton';
import Main from '../../../components/Layouts/Main';
import Meta from '../../../components/Layouts/Meta';
import adsData from '~/json/adsData.json';

const Cat = ({ query }: { query: { [key: string]: string } }) => {
  const { cat } = query;
  const filtered = adsData.filter((item) => item.slug !== cat);
  const catData = adsData.find((item) => item.slug === cat);

  return (
    <Main
      home="/ads/"
      meta={
        <Meta
          title="езикТок - социалната мрежа"
          description="Български форум за програмиране, бизнес и обучение , автомобили и мотоциклети, филми и музика"
        />
      }
    >
      {catData?.items ? (
        <>
          <div
            className={`flex text-4xl heading text-white bg-${cat} w-fit px-2 rounded-lg`}
          >
            <Icon icon={catData.icon as IconName} className="mr-3 h-14 w-14" />
            {catData.name}
          </div>
          <div className="text-2xl">Избери подкатегория</div>
          <div className="grid grid-cols-2 gap-2 mb-2">
            {catData.items.map((item) => (
              <CatButton
                key={item.slug}
                name={item.name}
                href={`/ads/create/${item.slug}/`}
                slug={cat ? cat : ''}
                chevron={true}
              />
            ))}
          </div>
          <CatButton
            name="Друга категория"
            href="/ads/create/"
            slug="xxx"
            icon="ChevronLeftIcon"
          />
        </>
      ) : (
        <>
          <h1>Избери категория</h1>
          <div className="grid sm:grid-cols-3 md:grid-cols-4 gap-2">
            {filtered.map((item, i) => (
              <div key={i}>
                <CatButton
                  key={item.slug}
                  name={item.name}
                  icon={item.icon as IconName}
                  href={`/ads/create?cat=${item.slug}`}
                  slug={item.slug}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </Main>
  );
};
Cat.getInitialProps = ({ query }: { query: { [key: string]: string } }) => {
  return { query };
};

export default Cat;
