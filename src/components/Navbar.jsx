import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
      <Link to="/chapters" style={{ marginRight: "10px" }}>Chapters</Link>
      <Link to="/FAQS">FAQS</Link>
    </nav>
  );
};

export default Navbar;
