export function HeroVideo() {
  return (
    <div className="hero-video-wrap" aria-hidden="true">
      <video
        autoPlay
        className="hero-video"
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src="/hero-data-center.mp4" type="video/mp4" />
      </video>
      <div className="hero-video-overlay" />
    </div>
  );
}
