import { Link } from "react-router-dom";
import constitutionData from "../assets/constitution.json";

const ChaptersPage = () => {
  return (
    <div>
      <h1>Kenya Constitution</h1>
      <ul>
        {constitutionData.map((chapter, idx) => (
          <li key={idx}>
            <Link to={`/chapter/${idx}`}>{chapter.chapter}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChaptersPage;