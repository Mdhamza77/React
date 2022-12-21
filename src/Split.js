import React, { Suspense } from 'react';
import ErrorBoundary from './ErrorBoundary';
const OtherComponent = React.lazy(() => import('./Forms'));
const Another = React.lazy(()=> import('./Onclick'))
function Split() {
  return (
    <div>
      <h1>Bundling the import and using react lazy method</h1>
       <ErrorBoundary>     
       <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent/>
        <Another/>
      </Suspense>
      </ErrorBoundary>

    </div>
  );
}

export default Split;