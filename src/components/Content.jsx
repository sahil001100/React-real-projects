import bg from "../assets/1766650345183.png";
import '../style/Content.css';

function Content() {
  const contentLinks = [
    { href: "/ListenNow", label: "Listen Now", className: "btn-primary" },
    { href: "/GetTheApp", label: "Get the App", className: "btn-secondary" },
  ];

  return (
    <section className="content-container">
      <div className="content-wrapper">
        <div className="content_right">
          <h1>
            Over 259,000,000 Volumes of Audio Content 
            <span className="subtitle">Listen Free, Download Free.</span>
          </h1>
          <div className="cta-buttons">
            {contentLinks.map((link, i) => (
              <a key={i} href={link.href} className={link.className}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="content_left">
          <img src={bg} alt="Mobile App Preview" className="hero-img" />
        </div>
      </div>
    </section>
  );
}

export default Content;