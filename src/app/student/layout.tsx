import { ReactNode } from "react";

export default function StudentLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex-1 flex">
      <aside className="w-96 h-full bg-neutral-300 flex items-center justify-center">
        <p className="text-lg text-neutral-700 font-bold uppercase">sidebar</p>
      </aside>

      <main className="size-full">{children}</main>
    </div>
  );
}
