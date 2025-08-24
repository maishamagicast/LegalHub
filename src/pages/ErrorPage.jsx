import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        textAlign: "center",
        backgroundColor: "#f9f9f9",
        color: "#333",
        padding: "2rem",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "6rem", margin: 0, color: "#ff6b6b" }}>404</h1>
      <h2 style={{ marginTop: "1rem" }}>Oops! Page not found.</h2>
      <p style={{ maxWidth: "400px", margin: "1rem 0" }}>
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        style={{
          marginTop: "1rem",
          padding: "10px 20px",
          backgroundColor: "#4a90e2",
          color: "#fff",
          borderRadius: "5px",
          textDecoration: "none",
          fontWeight: "bold",
          transition: "background 0.3s",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#357ABD")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#4a90e2")}
      >
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
