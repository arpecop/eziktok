import Link from 'next/link';
import Main from '../../../components/Layouts/Main';
import Meta from '../../../components/Layouts/Meta';
import React from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';
import { useAtomValue } from 'jotai';
import { useRouter } from 'next/router'
import { useratom } from '../../../atoms/dialog';

const Editor = dynamic(() => import('../../../components/forms/Editor'), {
  ssr: false
});

interface ModelCar {
  name: string;
  slug: string;
  image: string;
}

interface CarObject {
  name: string;
  slug: string;
  letter: string;
  items: ModelCar[];
}

const CreateBrandTopic = () => {
  const router = useRouter();
  const user = useAtomValue(useratom);
  const [brandata, setBrandata] = React.useState<CarObject>()
  const [subcat, setSubcat] = React.useState<ModelCar>()
  React.useEffect(() => {
    if (!router.isReady) { return; }
    async function getFetch() {
      const data1 = await axios.get('/json/carsData.json')
      const data = data1.data as CarObject[]
      const b = (router.query.createthreadid as string).split('__');
      const catx = b[1];
      const brand = data.find((item) => item.slug === b[0]);
      const subc = catx ? brand?.items.find((item: ModelCar) => item.slug === catx) : null
      setBrandata(brand)
      setSubcat(subc as ModelCar)
    }
    getFetch().then
  }, [router.isReady, router.query.createthreadid]);

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
      <div className="mb-4 w-full">
        <h1 className="heading text-4xl uppercase">
          {brandata?.name} {subcat ? subcat.name : ''}
        </h1>
        {!user && (
          <Link prefetch={false} href="/auth/" className="btn-secondary btn">
            Вход
          </Link>
        )}
        {user && subcat?.slug && (
          <Editor
            type="new"
            items={brandata?.items}
            parrent={[brandata?.slug || 'emptyr', subcat.slug]}
            user={user}
            expanded={true}
            addPhoto={true}
          />
        )}
      </div>
    </Main>
  );
};



export default CreateBrandTopic;
