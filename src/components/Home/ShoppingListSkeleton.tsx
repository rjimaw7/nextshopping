import React from 'react';

import { Skeleton } from '@/components/ui/skeleton';

const ShoppingListSkeleton = () => {
  return (
    <div className="my-2">
      <figure className="h-[300px] w-full shrink-0 md:w-[200px]">
        <Skeleton className="size-full" />
        <figcaption className="cursor-pointer pt-2 text-center text-base hover:underline md:text-start">
          <Skeleton className="h-4 w-[100px]" />
        </figcaption>
      </figure>
    </div>
  );
};

export default ShoppingListSkeleton;
