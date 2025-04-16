

import React from 'react';
import Lottie from 'react-lottie';
import animationData from '/src/animation.json';

function NotFoundPage() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="not-found">
      <Lottie 
        options={defaultOptions}
        height={300}
        width={300}
      />
      <h2>Oops! Page Not Found</h2>
      <p>We can't seem to find what you're looking for.</p>
      <a href="/">Return to Home</a>
    </div>
  );
}

export default NotFoundPage;

