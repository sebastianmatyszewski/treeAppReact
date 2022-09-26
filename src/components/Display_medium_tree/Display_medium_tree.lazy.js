import React, { lazy, Suspense } from 'react';

const LazyDisplay_medium_tree = lazy(() => import('./Display_medium_tree'));

const Display_medium_tree = props => (
  <Suspense fallback={null}>
    <LazyDisplay_medium_tree {...props} />
  </Suspense>
);

export default Display_medium_tree;
