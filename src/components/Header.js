function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">Manisha Singh</div>
        <ul className="nav-links">
          {[
            { label: "Home", target: ".User" },
            { label: "About", target: ".about" },
            { label: "Skills", target: ".skills" },
            { label: "Projects", target: ".project" },
            { label: "Services", target: ".services" },
            { label: "Contact", target: ".contact" },
          ].map((item, index) => (
            <li key={index}>
              <a
                href="#home"
                className="scroll-link"
                data-target={item.target}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(item.target)?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}>
                {item.label}
              </a>
            </li>
          ))}
          ;
        </ul>
      </nav>
    </header>
  );
}
export default Header;
