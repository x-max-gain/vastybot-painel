import Image from "next/image";
import Link from "next/link";
import { routes } from "./routes";
import { SidebarItem } from "./sidebar-item";

export function Sidebar() {
  return (
    <aside className="bg-background-primary bottom-0 start-0 z-50 h-full w-[270px] 2xl:w-72 fixed hidden xl:block overflow-x-auto shadow">
      <div className="sticky top-2 z-40 flex px-8 pt-2 bg-background-primary">
        <Link href="/" className="flex w-full justify-center">
          <Image src="/logo9.png" alt="logo" height={180} width={180} />
        </Link>
      </div>

      <div>
        <ul className="flex flex-col p-4 mt-4 gap-1">
          {routes.map((route, index) => (
            <SidebarItem key={index} item={route} />
          ))}
        </ul>
      </div>
    </aside>
  );
}
