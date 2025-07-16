import { useState, useEffect } from 'react'
import './App.css'

 

 function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [filteredChapters, setFilteredChapters] = useState([]);

  useEffect(() => {
    fetch("src/assets/kenya_constitution_2010.json")
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (!search) {
      setFilteredChapters(data);
      return;
    }
    const query = search.toLowerCase();
    const filtered = data
      .map((ch) => ({
        ...ch,
        articles: ch.articles.filter(
          (art) =>
            art.title.toLowerCase().includes(query) ||
            art.content.toLowerCase().includes(query)
        )
      }))
      .filter((ch) => ch.articles.length);
    setFilteredChapters(filtered);
  }, [search, data]);

  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "1rem" }}>
      <h1 style={{ textAlign: "center" }}>Kenya Constitution Viewer (2010)</h1>

      {!selectedChapter && (
        <>
          <input
            type="text"
            placeholder="Search article titles or content..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
          />
          {filteredChapters.map((chapter, idx) => (
            <section key={idx} style={{ marginBottom: "1rem" }}>
              <h2>
                <button
                  onClick={() => setSelectedChapter(chapter)}
                  style={{
                    fontSize: "1.2rem",
                    color: "#2c3e50",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  {chapter.chapter}: {chapter.title}
                </button>
              </h2>
            </section>
          ))}
        </>
      )}

      {selectedChapter && (
        <section>
          <button
            onClick={() => setSelectedChapter(null)}
            style={{
              marginBottom: "1rem",
              background: "#eee",
              border: "1px solid #ccc",
              padding: "0.5rem",
              cursor: "pointer",
            }}
          >
            ← Back to Chapters
          </button>
          <h2>
            {selectedChapter.chapter}: {selectedChapter.title}
          </h2>
          {selectedChapter.articles.map((article, i) => (
            <div
              key={i}
              style={{ marginTop: "1rem", paddingLeft: "1rem" }}
            >
              <h3>
                {article.number}. {article.title}
              </h3>
              <p style={{ whiteSpace: "pre-wrap" }}>
                {article.content.trim()}
              </p>
            </div>
          ))}
        </section>
      )}
    </main>
  );
}


export default App
