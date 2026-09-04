"use client";

import Link from "next/dist/client/link";
import { usePathname, useRouter } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="navbar bg-base-100 shadow-sm flex justify-between">
      <div className="flex gap-2">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>

          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box right-0 z-1 mt-3 w-52 p-2 shadow">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
        <input
          type="text"
          placeholder="جستجو"
          className="input w-24 md:w-auto"
        />
      </div>
      <ul className="menu menu-horizontal gap-2 px-1">
        <li>
          <a>درباره ما</a>
        </li>
        <li>
          <a>هنر بافت</a>
        </li>
        <li
          className={
            pathname === "/store" ? "bg-primary rounded-sm text-white" : ""
          }
        >
          <Link href="/store">فروشگاه</Link>
        </li>
        <li>
          <a>دسته بندی ها</a>
        </li>
      </ul>
      <div>
        <Link
          href={"/"}
          className="btn btn-ghost text-xl flex flex-col items-center gap-0"
        >
          Aasoo <span className="text-primary text-sm font-mono">Macrame</span>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
