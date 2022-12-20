import type { CarObject } from '../../data/cars';
import Link from 'next/link';
import Main from '../../components/Layouts/Main';
import Meta from '../../components/Layouts/Meta';
import data from '~/json/carsData.json';
import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter();
  const { query } = router;
  const letter = query.letter || 'a';
  const items = data.filter((item: CarObject) => item.letter === letter);
  const alphabet: string[] = 'abcdefghijklmnopqrstuvwz'.split('');
  return (
    <Main
      home="/cars/"
      meta={
        <Meta
          title="езикТок - социалната мрежа"
          description="Български форум за програмиране, бизнес и обучение , автомобили и мотоциклети, филми и музика"
        />
      }
    >
      <div className="mb-4 flex flex-wrap justify-center gap-0.5">
        {alphabet.map((l) => (
          <Link
            prefetch={false}
            href={{ pathname: '/cars/', query: { letter: l } }}
            key={l}
            passHref={true}
            className={`${letter === l && 'bg-slate-700 underline dark:bg-slate-200'
              } heading kbd uppercase dark:bg-white`}
          >
            {l}
          </Link>
        ))}
      </div>
      <section className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12">
        {items.map((item) => (
          <Link
            prefetch={false}
            href={`/cars/${item.slug}/`}
            key={item.slug}
            passHref={true}
          >
            <div className="avatar h-28 w-full">
              <img
                src={`/logos/${item.slug}-sm.jpg`}
                alt=""

                className="mask mask-hexagon online"
              />
            </div>

            <h2 className="heading text-center text-sm font-semibold uppercase dark:text-slate-900">
              {item.name}
            </h2>
          </Link>
        ))}
      </section>
    </Main>
  );
};

export default Index;
