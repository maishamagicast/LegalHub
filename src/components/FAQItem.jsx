// src/components/FAQItem.jsx
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-2xl shadow-sm p-4 mb-4 bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full text-left"
      >
        <h2 className="text-lg font-semibold">{question}</h2>
        {open ? <ChevronUp /> : <ChevronDown />}
      </button>
      {open && <p className="mt-2 text-gray-700">{answer}</p>}
    </div>
  );
};

export default FAQItem;
