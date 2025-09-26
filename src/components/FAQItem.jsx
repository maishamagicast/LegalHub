import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        width: "100%",
        borderBottom: "1px solid #e5e7eb" // light gray border
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          padding: "16px 0",
          textAlign: "center",
          cursor: "pointer",
          transition: "color 0.2s ease",
          color: open ? "#dc2626" : "#1f2937", // red-600 or gray-800
          fontWeight: open ? "600" : "400",
          fontSize: "16px",
          background: "transparent",
          border: "none"
        }}
      >
        <span style={{ flex: 1, textAlign: "center" }}>{question}</span>
        {open ? (
          <ChevronUp style={{ width: "20px", height: "20px", marginLeft: "8px" }} />
        ) : (
          <ChevronDown style={{ width: "20px", height: "20px", marginLeft: "8px" }} />
        )}
      </button>

      {open && (
        <div
          style={{
            padding: "0 24px 16px 24px",
            color: "#4b5563", // gray-600
            lineHeight: "1.6",
            textAlign: "center"
          }}
        >
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQItem;
