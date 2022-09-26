import React, { lazy, Suspense } from 'react';

const LazyDisplay_small_tree = lazy(() => import('./Display_small_tree'));

const Display_small_tree = props => (
  <Suspense fallback={null}>
    <LazyDisplay_small_tree {...props} />
  </Suspense>
);

export default Display_small_tree;
