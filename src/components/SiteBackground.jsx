const SiteBackground = () => {
  return (
    <div className="site-background" aria-hidden="true">
      <div className="site-background__glow site-background__glow--top" />
      <div className="site-background__glow site-background__glow--right" />
      <div className="site-background__glow site-background__glow--left" />
      <div className="site-background__grid" />
    </div>
  );
};

export default SiteBackground;
