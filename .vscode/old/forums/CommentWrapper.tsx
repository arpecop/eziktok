import Link from "next/link";
import type { ReactNode } from "react";
import { useState } from "react";
import { User } from "@/pages/auth";

const CommentWrapper = ({
  children,
  user,
}: {
  children: ReactNode;
  user: User;
}) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className={`${show ? "block" : "hidden"}`}>{children}</div>
      <div className="relative -mx-4 flex flex-wrap items-center justify-start bg-gradient-to-r from-[#D8B4FE] to-[#818CF8] px-1 pt-1">
        {user ? (
          <button className="btn btn-xs" onClick={() => setShow(!show)}>
            {show ? "Отказ" : "Отговор"}
          </button>
        ) : (
          <Link href="/auth/" className="btn btn-xs">
            <a className="btn btn-xs">Отговор</a>
          </Link>
        )}
      </div>
    </>
  );
};

export default CommentWrapper;
