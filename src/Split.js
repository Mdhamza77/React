import React, { Suspense } from 'react';

const OtherComponent = React.lazy(() => import('./Forms'));
const Another = React.lazy(()=> import('./Onclick'))
function Split() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
        <Another/>
      </Suspense>

    </div>
  );
}

export default Split;