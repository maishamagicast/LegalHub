// src/pages/Home.jsx
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <header
  style={{
    backgroundColor: "#1d3557",
    color: "#fff",
    padding: "4rem 1.5rem",
    textAlign: "center",
  }}
>
  <h1
    style={{
      fontSize: "2.8rem",
      marginBottom: "1rem",
      color: "#a5d8ff", // fixed from textColor
      fontWeight: "bold",
      letterSpacing: "1px",
    }}
  >
    Kenya Constitution Viewer
  </h1>
  <p
    style={{
      fontSize: "1.2rem",
      maxWidth: "700px",
      margin: "0 auto",
      lineHeight: "1.6",
      color: "#e0f2fe",
    }}
  >
    Explore the 2010 Constitution of Kenya in a modern, structured, and interactive way.
  </p>
</header>


      {/* Mission Section */}
      <section
        style={{
          padding: "3rem 1.5rem",
          backgroundColor: "#f1f5f9",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "1.8rem", fontWeight: "600", marginBottom: "1rem" }}>
          Our Mission
        </h2>
        <p
          style={{
            maxWidth: "750px",
            margin: "0 auto",
            color: "#374151",
            lineHeight: "1.7",
          }}
        >
          This app aims to make the Constitution of Kenya accessible to everyone.  
          By presenting it in a clean, interactive format, we empower citizens, students,  
          and researchers to navigate, learn, and reflect on the principles that shape  
          our democracy.
        </p>
      </section>

      {/* About Section */}
      <section
        style={{
          padding: "3rem 1.5rem",
          backgroundColor: "#fff",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "1.8rem", fontWeight: "600", marginBottom: "1rem" }}>
          About This App
        </h2>
        <p
          style={{
            maxWidth: "750px",
            margin: "0 auto",
            color: "#374151",
            lineHeight: "1.7",
          }}
        >
          The Constitution is the foundation of Kenya’s governance and values.  
          This app was created to provide a modern, user-friendly way to study the  
          document—whether you are preparing for exams, conducting research,  
          or simply deepening your civic knowledge.
        </p>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#0d1b2a",
          color: "#fff",
          padding: "1.5rem",
          marginTop: "auto",
          textAlign: "center",
        }}
      >
        <p>&copy; {new Date().getFullYear()} Kenya Constitution Viewer. All rights reserved.</p>
        <div style={{ marginTop: "0.5rem" }}>
          <Link to="/faqs" style={{ margin: "0 0.5rem", color: "#a5d8ff", textDecoration: "none" }}>
            FAQs
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Home;
