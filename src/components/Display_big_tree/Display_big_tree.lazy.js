import React, { lazy, Suspense } from 'react';

const LazyDisplay_big_tree = lazy(() => import('./Display_big_tree'));

const Display_big_tree = props => (
  <Suspense fallback={null}>
    <LazyDisplay_big_tree {...props} />
  </Suspense>
);

export default Display_big_tree;
