import { Marked } from "@ts-stack/markdown";
import Link from "next/link";
import type { ReactNode } from "react";
import TimeAgo from "react-timeago";

const avatarcolors = {
  A: "bg-blue-500",
  B: "bg-red-500",
  C: "bg-green-500",
  D: "bg-yellow-500",
  E: "bg-purple-500",
  F: "bg-pink-500",
  G: "bg-indigo-500",
  H: "bg-gray-500",
  I: "bg-orange-500",
  J: "bg-teal-500",
  K: "bg-cyan-500",
  L: "bg-lime-500",
  M: "bg-emerald-500",
  N: "bg-amber-500",
  O: "bg-violet-500",
  P: "bg-fuchsia-500",
  Q: "bg-lightBlue-500",
  R: "bg-rose-500",
  S: "bg-warmGray-500",
  T: "bg-coolGray-500",
  U: "bg-trueGray-500",
  V: "bg-blueGray-500",
  W: "bg-black",
  X: "bg-white",
  Y: "bg-gray-300",
  Z: "bg-gray-400",
} as { [key: string]: string };

const paddings = {
  0: "ml-0",
  1: "ml-0",
  2: "ml-0",
  3: "ml-0",
  4: "ml-4",
  5: "ml-8",
  6: "ml-12",
} as { [key: number]: string };

export type ThreadType = {
  id: number;
  title: string;
  value: string;
  uid: string;
  date: string;
  children?: ReactNode;
  short?: boolean;
  parrent: string[];
  type?: "comment" | "reply";
  username: string;
  sortid?: number;
  images: string[];
};

export const allowedTags = [
  "a",
  "b",
  "h1",
  "p",
  "i",
  "img",
  "ul",
  "ol",
  "li",
  "p",
];

const ThreadContent = ({
  title,
  value,
  date,
  short,
  children,
  username,
  images,
}: ThreadType) => {
  return (
    <>
      <div className="relative flex h-full w-full flex-col justify-between rounded-lg bg-gray-900 px-4 dark:bg-white">
        <div className="mt-1 flex flex-row justify-between">
          <div className="flex h-12 items-center justify-center">
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-full text-white ${
                avatarcolors[username.toUpperCase().charAt(0)]
              }`}
            >
              {username.toUpperCase().slice(0, 2)}
            </div>
            <div className="mx-1">{username}:</div>
          </div>
          {title && (
            <div className="min-h-12 flex flex-1 items-center justify-center">
              <h4 className="heading w-full text-lg font-medium tracking-tight text-gray-100 dark:text-gray-900 md:text-lg">
                {title}
              </h4>
            </div>
          )}
          <div className="w-20 text-right text-xs">
            <TimeAgo date={new Date(date)} />
          </div>
        </div>
        {value && value.length > 100 ? (
          <div className="my-2">${short ? value.slice(0, 100) : value} ...</div>
        ) : (
          <>
            {images && images.length > 0 && (
              <div>
                <div className="mb-6 text-center">Прикачени изображения:</div>
                <div className="my-2 mr-2 flex h-44 w-full flex-row items-center justify-center ">
                  {images.map((image, i) => (
                    <div
                      className="relative mr-2 flex h-44 w-36 flex-row items-center"
                      key={image}
                    >
                      <div className="absolute left-2 top-0 ">{i + 1}</div>
                      <img
                        className="h-auto w-36 cursor-pointer rounded-lg transition duration-500 ease-in-out hover:scale-150"
                        src={image}
                        alt="image"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div
              className="my-2"
              dangerouslySetInnerHTML={{
                __html: Marked.parse(value),
              }}
            />
          </>
        )}
        <div>{children}</div>
      </div>
    </>
  );
};
const Thread = ({
  title,
  value,
  uid,
  date,
  short,
  children,
  parrent,
  type,
  username,
  images,
}: ThreadType) => {
  return (
    <>
      {short ? (
        <Link href={!short ? `#${uid}` : `/cars/post/${uid}/`} passHref>
          <a
            className="mb-6 w-full rounded-xl bg-gradient-to-r from-[#D8B4FE] to-[#818CF8] p-1 transition-all hover:scale-[1.01]"
            id={uid}
          >
            <ThreadContent
              title={title}
              value={value}
              uid={uid}
              date={date}
              short={short}
              id={0}
              parrent={parrent}
              username={username}
              type={type}
              images={images}
            >
              {children}
            </ThreadContent>
          </a>
        </Link>
      ) : (
        <div
          className={`${
            paddings[parrent.length] || "ml-12"
          } mb-2 w-full rounded-xl bg-gradient-to-r from-[#D8B4FE] to-[#818CF8] p-1 transition-all hover:scale-[1.01]`}
          id={uid}
        >
          <ThreadContent
            title={title}
            value={value}
            uid={uid}
            date={date}
            short={short}
            id={1}
            parrent={parrent}
            username={username}
            type={type}
            images={images}
          >
            {children}
          </ThreadContent>
        </div>
      )}
    </>
  );
};

export default Thread;
