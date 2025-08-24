import { Link } from "react-router-dom";
import constitutionData from "../assets/constitution.json";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <header className="bg-blue-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Kenya Constitution Viewer</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Explore the 2010 Constitution of Kenya in a simple, structured, and interactive way.
        </p>
      </header>

      {/* Mission Section */}
      <section className="py-12 px-6 text-center bg-gray-100">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
          This app aims to make the Constitution of Kenya accessible to everyone.  
          By breaking it into chapters, parts, and articles, we ensure readers can quickly  
          navigate, learn, and reflect on the principles that shape our democracy.
        </p>
      </section>

      {/* Chapter Links */}
      <section className="py-12 px-6 flex-1">
        <h2 className="text-2xl font-semibold mb-6 text-center">Browse Chapters</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {constitutionData.map((chapter, idx) => (
            <Link
              key={idx}
              to={`/chapter/${idx}`}
              className="block p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-bold mb-2">{chapter.chapter}</h3>
              <p className="text-gray-600">{chapter.title}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 px-6 bg-white text-center">
        <h2 className="text-2xl font-semibold mb-4">About This App</h2>
        <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
          The Constitution is the foundation of Kenya’s governance and values.  
          This app was created to provide students, citizens, and researchers with  
          a modern, user-friendly way to read and study the document.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6 mt-auto text-center">
        <p>&copy; {new Date().getFullYear()} Kenya Constitution Viewer. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          {/* <Link to="/" className="hover:underline">Home</Link> */}
          {/* <Link to="/about" className="hover:underline">About</Link> */}
        </div>
      </footer>
    </div>
  );
};

export default Home;
