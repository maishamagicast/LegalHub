import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const quotes = [
  {
    author: "Mahatma Gandhi",
    text: "Freedom is never dear at any price. It is the breath of life. What would a man not pay for living?",
  },
  {
    author: "Oliver Wendell Holmes Jr.",
    text: "The life of the law has not been logic; it has been experience.",
  },
  {
    author: "Roscoe Pound",
    text: "The law must be stable, but it must not stand still.",
  },
  {
    author: "Latin Maxim",
    text: "Ignorantia juris non excusat. (Ignorance of the law excuses no one.)",
  },
];

export default function LegalAwarenessQuotes() {
  return (
    <section className="py-12 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">
        Legal Awareness Quotes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {quotes.map((quote, index) => (
          <Card key={index} className="shadow-md hover:shadow-lg transition-all rounded-2xl">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-blue-700">
                {quote.author}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 italic">“{quote.text}”</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
