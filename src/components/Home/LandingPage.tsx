/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-fragments */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/no-array-index-key */

'use client';

import Link from 'next/link';
import React from 'react';

import useShoppingListStorage from '@/shared/hooks/useShoppingListStorage';

import ShoppingListItem from './ShoppingListItem';
import ShoppingListSkeleton from './ShoppingListSkeleton';

const LandingPage = () => {
  const { shoppingListsData } = useShoppingListStorage();

  return (
    <div className="flex flex-col gap-8 px-5 py-10">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:items-start md:gap-0">
        <div className="">
          <h1 className="primary-blue text-lg font-bold">Showcase List</h1>
          <p className="text-sm font-semibold text-muted-foreground">
            Shaping the future of Shopping Lists, <span className="primary-blue">Together</span>
          </p>
        </div>

        <Link
          href="/lists/create"
          className="w-full rounded-md border bg-blue-600 p-2 text-center text-white md:w-auto"
        >
          Create List
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
        {shoppingListsData.length <= 0
          ? Array.from({ length: 10 }, (_, index) => (
              <React.Fragment key={`skeleton_${index}`}>
                <ShoppingListSkeleton />
              </React.Fragment>
            ))
          : shoppingListsData && shoppingListsData.map((item, index) => <ShoppingListItem item={item} key={index} />)}
      </div>
    </div>
  );
};

export default LandingPage;
