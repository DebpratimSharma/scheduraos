import { Skeleton } from "@/components/ui/skeleton";

export function RoutineSkeleton() {
  return (
    <div className="w-full p-1 ">
      <div className="p-1 w-full flex  md:justify-center mb-6 gap-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <Skeleton
            key={index}
            className="rounded-full w-44 py-5 lg:px-6"
          />
        ))}
      </div>
      <div className="w-full flex flex-wrap md:flex-nowrap md:justify-center mb-6 gap-2">
        <Skeleton className="h-28 w-full md:w-[calc(100%-30rem)] px-9" />
      </div>
      <div className="w-full flex flex-wrap md:flex-nowrap md:justify-center mb-6 gap-2">
        <Skeleton className="h-8 w-full md:w-[calc(100%-30rem)] px-9" />
      </div>
    </div>
  );
}
