export function ServerVisual() {
  return (
    <div className="server-visual" aria-hidden="true">
      <div className="rack rack-one">
        {Array.from({ length: 8 }).map((_, index) => (
          <span key={index} />
        ))}
      </div>
      <div className="rack rack-two">
        {Array.from({ length: 8 }).map((_, index) => (
          <span key={index} />
        ))}
      </div>
      <div className="rack rack-three">
        {Array.from({ length: 8 }).map((_, index) => (
          <span key={index} />
        ))}
      </div>
      <div className="scan-line" />
    </div>
  );
}
