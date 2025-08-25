import { useParams } from "react-router-dom";
import constitutionData from "../assets/constitution.json";

const renderArticles = (articles) => {
  if (!articles) return null;

  return articles.map((article) => (
    <div key={article.number} style={{ marginBottom: "1.5rem", paddingLeft: "20px" }}>
      <h4>
        Article {article.number}: {article.title}
      </h4>
      {article.content.split("\n").map((line, idx) => (
        <p key={idx} style={{ margin: "0.2rem 0" }}>
          {line}
        </p>
      ))}
    </div>
  ));
};

const renderNode = (node, level = 0) => {
  if (!node) return null;
  const indent = { marginLeft: `${level * 20}px` };

  return (
    <div style={indent}>
      {/* Headings */}
      {node.chapter && <h2>{node.chapter}</h2>}
      {node.part && <h3>{node.part}</h3>}
      {node.section && <h4>{node.section}</h4>}
      {node.title && <h3>{node.title}</h3>}

      {/* Articles */}
      {renderArticles(node.articles)}

      {/* Recursive rendering for nested structures */}
      {(node.parts || []).map((child, idx) => (
        <div key={`part-${idx}`}>{renderNode(child, level + 1)}</div>
      ))}
      {(node.sections || []).map((child, idx) => (
        <div key={`section-${idx}`}>{renderNode(child, level + 1)}</div>
      ))}
      {(node.subsections || []).map((child, idx) => (
        <div key={`subsection-${idx}`}>{renderNode(child, level + 1)}</div>
      ))}
    </div>
  );
};

const Chapter = () => {
  const { chapterId } = useParams();
  const chapter = constitutionData[chapterId];

  if (!chapter) {
    return <h2>Chapter not found</h2>;
  }

  return <div>{renderNode(chapter)}</div>;
};

export default Chapter;

