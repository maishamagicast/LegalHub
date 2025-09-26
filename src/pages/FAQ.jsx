// src/pages/FAQS.jsx
import FAQItem from "../components/FAQItem";
import faqs from "../assets/FAQ.json";

function FAQS() {
  console.log(faqs);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f9fafb", // light gray background
        padding: "20px"
      }}
    >
      <h1
        style={{
          fontSize: "28px",
          fontWeight: "bold",
          marginBottom: "16px",
          textAlign: "center"
        }}
      >
         FAQs
      </h1>

      <p
        style={{
          marginBottom: "24px",
          color: "#4b5563", // gray-600
          textAlign: "center",
          maxWidth: "600px",
          lineHeight: "1.5"
        }}
      >
        Learn more about the history, importance, and impact of Kenyan Constitution.
      </p>

      <div style={{ width: "100%", maxWidth: "700px" }}>
        {faqs.faqs.map((faq, idx) => (
          <FAQItem key={idx} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}

export default FAQS;
