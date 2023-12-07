// components/LoadingAnimation.js

const LoadingAnimation = () => {
  return (
    <div className="loading-animation">
      <video autoPlay muted loop>
        <source src="/videos/loading.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default LoadingAnimation;
