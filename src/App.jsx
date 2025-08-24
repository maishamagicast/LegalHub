// import React from "react";
// import constitutionData from "./assets/constitution.json";

// const renderArticles = (articles) => {
//   if (!articles) return null;

//   return articles.map((article) => (
//     <div key={article.number} style={{ marginBottom: "1.5rem", paddingLeft: "20px" }}>
//       <h4>
//         Article {article.number}: {article.title}
//       </h4>
//       {article.content.split("\n").map((line, idx) => (
//         <p key={idx} style={{ margin: "0.2rem 0" }}>
//           {line}
//         </p>
//       ))}
//     </div>
//   ));
// };

// const renderNode = (node, level = 0) => {
//   const indent = { marginLeft: `${level * 20}px` };

//   return (
//     <div style={indent}>
//       {node.chapter && <h2>{node.chapter}</h2>}
//       {node.title && <h3>{node.title}</h3>}
//       {node.articles && renderArticles(node.articles)}

//       {(node.parts || []).map((part, idx) => (
//         <div key={part.part || idx} style={{ marginLeft: "20px" }}>
//           {part.part && <h4>{part.part}</h4>}
//           {part.articles && renderArticles(part.articles)}
//           {(part.parts || []).map((p, i) => renderNode(p, level + 1))}
//           {(part.sections || []).map((s, i) => renderNode(s, level + 1))}
//         </div>
//       ))}

//       {(node.sections || []).map((section, idx) => (
//         <div key={idx}>{renderNode(section, level + 1)}</div>
//       ))}
//     </div>
//   );
// };

// const App = () => {
//   console.log("Constitution data loaded:", constitutionData); // debug log
//   return <div>{(constitutionData || []).map((chapter, idx) => renderNode(chapter))}</div>;
// };

// export default App;

import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout";
import AppRoutes from "./routes/Routes";

const App = () => {
  return (
    <Router>
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
  );
};

export default App;
