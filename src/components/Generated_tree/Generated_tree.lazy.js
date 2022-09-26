import React, { lazy, Suspense } from 'react';

const LazyGenerated_tree = lazy(() => import('./Generated_tree'));

const Generated_tree = props => (
  <Suspense fallback={null}>
    <LazyGenerated_tree {...props} />
  </Suspense>
);

export default Generated_tree;
