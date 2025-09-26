import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "#1d3557",
        borderBottom: "2px solid #457b9d",
      }}
    >
      {/* Logo / Brand */}
      <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#f1faee" }}>
        <Link to="/" style={{ textDecoration: "none", color: "#f1faee" }}>
          Constitution Viewer
        </Link>
      </div>

      {/* Links */}
      <div>
        <Link
          to="/"
          style={{
            marginRight: "20px",
            color: "#a8dadc",
            textDecoration: "none",
            fontWeight: "500",
          }}
          onMouseOver={(e) => (e.target.style.color = "#f1faee")}
          onMouseOut={(e) => (e.target.style.color = "#a8dadc")}
        >
          Home
        </Link>
        <Link
          to="/chapters"
          style={{
            marginRight: "20px",
            color: "#a8dadc",
            textDecoration: "none",
            fontWeight: "500",
          }}
          onMouseOver={(e) => (e.target.style.color = "#f1faee")}
          onMouseOut={(e) => (e.target.style.color = "#a8dadc")}
        >
          Chapters
        </Link>
        <Link
          to="/FAQS"
          style={{
            color: "#a8dadc",
            textDecoration: "none",
            fontWeight: "500",
          }}
          onMouseOver={(e) => (e.target.style.color = "#f1faee")}
          onMouseOut={(e) => (e.target.style.color = "#a8dadc")}
        >
          FAQs
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
