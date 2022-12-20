import React, { useEffect, useState } from 'react';
import SendReply, { MessageFormatted } from '../../components/messages/SendReply';

import Avatar from '../../components/forums/Avatar';
import { Icon } from '../../components/Icon';
import Main from '../../components/Layouts/Main';
import Meta from '../../components/Layouts/Meta';
import axios from 'axios';
import { useAtomValue } from 'jotai';
import { useratom } from '../../atoms/dialog';
import { usernameformat } from '../../utils/username';

type MessageType = {
  id: number;
  message?: string;
  from: string;
  to: string;
  title: string;
  isreply: boolean;
  subjectid: string;
};
type InboxType = {
  id: number;
  pms: MessageType[];
  title: string;
  uid: string;
};
type SubjectType = {
  title: string;
  from: string;
  to: string;
  subjectid: string;
  items: MessageType[];
};

type SortedMessages = {
  [key: string]: SubjectType;
};

const formattedmessages = (msgs: InboxType[]): SortedMessages => {
  const messages = msgs
    .map((val) => {
      return {
        ...val,
        pms: val.pms.map((valx) => {
          return { ...valx, title: val.title };
        })
      };
    })
    .flatMap((val) => val.pms);
  const sortbyreply = messages.reduce<SortedMessages>((acc, val) => {
    const prekey = [val.from, val.to].sort().join('');
    const key = `${prekey}${val.subjectid}`;
    if (acc[key]) {
      acc[key]?.items.push(val);
    } else {
      acc[key] = {
        title: val.title,
        from: val.from,
        to: val.to,
        subjectid: val.subjectid,
        items: [val]
      };
    }
    return acc;
  }, {});

  return sortbyreply;
};

const DmsInbox = () => {
  const user = useAtomValue(useratom);
  const [data, setData] = React.useState<SortedMessages>({});
  const [from, setFrom] = React.useState<string>('');
  const [to, setTo] = React.useState<string>('');
  const [selected, setSelected] = useState<SubjectType | null>(null);
  useEffect(() => {
    const initx = async () => {
      await axios.post('/api/ads/messages', { user, type: 'markread' });
      const d = await axios.post('/api/ads/messages', {
        user,
        type: 'inbox'
      });
      const from = user ? usernameformat(user) : '';
      console.log(d);

      setFrom(from);
      //setData(formattedmessages(d.data));
    };
    if (user) {
      initx().catch;
    }
  }, [user]);
  const openMsg = (msg: SubjectType) => {
    setTo(msg.from === from ? msg.to : msg.from);

    setSelected(msg);
  };
  return (
    <Main
      home="/ads/"
      overrideInbox={true}
      meta={
        <Meta
          title="езикТок - социалната мрежа"
          description="Български форум за програмиране, бизнес и обучение , автомобили и мотоциклети, филми и музика"
        />
      }
    >
      {selected && user ? (
        <>
          <div className="flex py-2">
            <button
              className="btn-outline btn-accent btn flex pl-0"
              onClick={() => setSelected(null)}
            >
              <Icon icon={'ChevronLeftIcon'} className="h-8 w-8" /> Назад
            </button>
          </div>
          <h1 className="my-3">{selected.title}</h1>
          {selected?.items.map(({ message, id, from }) => (
            <MessageFormatted key={id} from={from} message={message || ''} />
          ))}
          <SendReply
            user={user}
            to={to}
            subjectid={selected?.subjectid || ''}
            from={from}
          />
        </>
      ) : (
        <>
          <h1>Съобщения </h1>
          <table className="table-zebra table w-full">
            <thead>
              <tr>
                <th className="w-2 p-1 dark:bg-white" />
                <th className="w-2 dark:bg-white">От</th>
                <th className="dark:bg-white">Относно</th>
              </tr>
            </thead>
            <tbody>
              {user &&
                Object.keys(data).map((key, i) => (
                  <tr
                    key={i}
                    onClick={() => openMsg(data[key] as SubjectType)}
                    onKeyDown={() => null}
                  >
                    <th className="w-2 cursor-pointer p-1 dark:bg-white">
                      <Avatar username={data[key]?.from || ''} />
                    </th>
                    <td className="w-fit cursor-pointer px-0 dark:bg-white">
                      {data[key]?.from}
                    </td>
                    <td className="cursor-pointer dark:bg-white">
                      {data[key]?.title}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </>
      )}
    </Main>
  );
};

export default DmsInbox;
