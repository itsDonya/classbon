"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems: NavigationMenuItem[] = [
  {
    title: "صفحه اصلی",
    href: "/",
  },
  {
    title: "دوره‌های ری‌اکت و نکست",
    href: "/courses",
  },
  {
    title: "مطالب و مقالات",
    href: "/blog",
  },
];

export const TopNavigation: React.FC = () => {
  const pathname = usePathname();

  return (
    <ul className="mr-12 flex gap-x-8">
      {menuItems.map((item) => {
        const isActive = pathname == item.href;

        return (
          <li key={`navigation-${item.href}`}>
            <Link
              className={`pb-2 dark:hover:text-primary transition-colors ${
                isActive &&
                "border-b-2 dark:text-primary dark:border-primary/30"
              }`}
              href={item.href}>
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
