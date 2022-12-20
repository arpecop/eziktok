import Main from '../../../components/Layouts/Main';
import Meta from '../../../components/Layouts/Meta';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const CreateAd = dynamic(
  () => import('../../../components/Layouts/ads/CreateAd'),
  {
    suspense: true,
  },
);

function CreateAdWrapper() {
  const params = useRouter();

  return (
    <Main
      home='/ads/'
      hideFooter={true}
      meta={
        <Meta
          title='езикТок - социалната мрежа'
          description='Български форум за програмиране, бизнес и обучение , автомобили и мотоциклети, филми и музика'
        />
      }
    >
      <CreateAd id={params.query.createid as string} />
    </Main>
  );
}

export default CreateAdWrapper;
