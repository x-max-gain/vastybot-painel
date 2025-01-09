import { X } from "lucide-react";
import { routes } from "../sidebar/routes";
import { SidebarItem } from "../sidebar/sidebar-item";
import Link from "next/link";
import Image from "next/image";

export function NavbarMobile({ isOpen, toggleMenu }: any) {
  return (
    <div
      className={`fixed inset-0 z-50 bg-background-primary transition-transform duration-300 overflow-x-scroll ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="flex justify-between items-center p-4 border-b border-border-secondary">
        <div>
          <Link href="/dashboard" className="flex w-full">
            <h2>X MAX GAIN</h2>
          </Link>
        </div>
        <button onClick={toggleMenu} className="text-gray-600">
          <X size={24} />
        </button>
      </div>
      <ul className="p-4">
        {routes.map((route, index) => (
          <SidebarItem key={index} item={route} />
        ))}
      </ul>
    </div>
  );
}
