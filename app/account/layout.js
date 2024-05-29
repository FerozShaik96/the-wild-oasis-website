import SideNavigation from "@/app/_components/sideNavigation";

export default function Layout({ children }) {
  return (
    <div className="grid h-full  grid-cols-[16rem_1fr] gap-12">
      <div className="h-full">
        <SideNavigation />
      </div>
      <div className="py-1"> {children}</div>
    </div>
  );
}
