"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const activefilter = searchParams.get("capacity");
  function handlerFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }
  return (
    <div className="flex border border-primary-800">
      <Button
        handlerFilter={handlerFilter}
        filter="all"
        activefilter={activefilter}
      >
        All cabins
      </Button>
      <Button
        handlerFilter={handlerFilter}
        filter="small"
        activefilter={activefilter}
      >
        1&mdash;3 guests
      </Button>
      <Button
        handlerFilter={handlerFilter}
        filter="medium"
        activefilter={activefilter}
      >
        4&mdash;7 guests
      </Button>
      <Button
        handlerFilter={handlerFilter}
        filter="large"
        activefilter={activefilter}
      >
        8&mdash;12 guests
      </Button>
    </div>
  );
}

function Button({ children, handlerFilter, filter, activefilter }) {
  return (
    <button
      onClick={() => handlerFilter(filter)}
      className={`px-5 py-2 hover:bg-primary-700 ${filter === activefilter ? "bg-primary-700 text-primary-50" : ""}`}
    >
      {children}
    </button>
  );
}

export default Filter;
