import data, { LocationType } from '@/data/dataAll';

import Upload from './Upload';
import { useState } from 'react';

export const BgLocations = ({
  submitted,
}: {
  submitted: boolean;
}): JSX.Element => {
  const [locations, setLocations] = useState<LocationType[]>([]);
  const firstCheck = (loc: string) => {
    const datax = data.ads.data.locations.counties.filter((x) => x.key === loc);
    setLocations(datax);
  };
  return (
    <div>
      <label className='label'>
        <span className='label-text'>
          Област <span className='text-red-600'>*</span>
        </span>
        <span className='label-text-alt'> </span>
      </label>
      <select
        className={`select select-bordered ${
          submitted && locations.length === 0
            ? 'inputerror border-2'
            : 'select-success'
        } w-full max-w-md bg-gray-800 dark:bg-white`}
        onChange={(e) => firstCheck(e.target.value)}
      >
        <option disabled={true} defaultValue='' selected={true} />
        {data.ads.data.locations.regions.map((x) => (
          <option value={x.id} key={x.id}>
            {x.value.text}
          </option>
        ))}
      </select>
      {locations[1] && (
        <>
          <label className='label'>
            <span className='label-text'>
              Населено място <span className='text-red-600'>*</span>
            </span>
            <span className='label-text-alt'> </span>
          </label>
          <select
            className='select select-accent w-full max-w-md bg-gray-800 dark:bg-white'
            name='location'
          >
            {locations.map((x) => (
              <option defaultValue={x.id} key={x.id}>
                {x.value.text}
              </option>
            ))}
          </select>
        </>
      )}
    </div>
  );
};

const FormComponent = ({
  name,
  submitted,
}: {
  name: string;
  submitted: boolean;
}) => {
  const Componentz = {
    locations: () => <BgLocations submitted={submitted} />,
    upload: () => (
      <div className='flex flex-col items-center justify-center py-4'>
        <Upload />
      </div>
    ),
  } as { [key: string]: React.FC };
  const Comp = Componentz[name] || (() => <div>Not found</div>);
  return <Comp />;
};

export default FormComponent;
