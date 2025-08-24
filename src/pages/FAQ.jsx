// src/pages/FAQS.jsx
import FAQItem from "../components/FAQItem";

const FAQS = () => {
  const faqs = [
    {
      question: "📜 What is the history of Kenya’s Constitution?",
      answer:
        "Kenya’s constitutional history dates back to independence in 1963. The current Constitution, promulgated in 2010, marked a historic milestone in democratic governance, devolution, and rights protection."
    },
    {
      question: "⚖️ Why is the Constitution important?",
      answer:
        "It establishes the framework for governance, protects citizens’ rights, limits government power, and ensures justice, equality, and accountability."
    },
    {
      question: "🏛️ What were the key events in making the 2010 Constitution?",
      answer:
        "The 2010 Constitution was the product of decades of struggle, including the Bomas Draft, Wako Draft, and public referendums. The final referendum was held on August 4, 2010, with 67% approval."
    },
    {
      question: "🌍 How does it affect citizens today?",
      answer:
        "It introduced devolution, expanded the Bill of Rights, created independent commissions, and gave citizens more say in governance through public participation."
    }
  ];

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">About & FAQs</h1>
      <p className="mb-6 text-gray-600">
        Learn more about the history, importance, and impact of Kenya’s Constitution.
      </p>
      {faqs.map((faq, idx) => (
        <FAQItem key={idx} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQS;
