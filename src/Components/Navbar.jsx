const Navbar = ({ setCategory }) => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <span className="badge bg-light text-dark fs-6">NewsFlasher</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <div
                  className="nav-link"
                  onClick={() => setCategory("technology")}
                >
                  Technology
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link"
                  onClick={() => setCategory("business")}
                >
                  Business
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={() => setCategory("health")}>
                  Health
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link"
                  onClick={() => setCategory("science")}
                >
                  Science
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={() => setCategory("sports")}>
                  Sports
                </div>
              </li>
              <li
                className="nav-item"
                onClick={() => setCategory("entertainment")}
              >
                <div className="nav-link">Entertainment</div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="text-bg-danger p-2">
        <marquee
          behavior="scroll"
          direction="left"
          style={{ marginLeft: "25%", marginRight: "20%" }}
          scrollamount="20"
        >
          <h1>News Updates</h1>
        </marquee>
      </div>
    </div>
  );
};

export default Navbar;
