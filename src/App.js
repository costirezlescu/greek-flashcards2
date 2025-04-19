    import { useState } from "react";
    import "./index.css";

    const vocabulary = [
  {
    "greek": "Αλάτι",
    "latin": "Aláti",
    "english": "Salt"
  },
  {
    "greek": "Πιπέρι",
    "latin": "Pipéri",
    "english": "Pepper (black, white, red)"
  },
  {
    "greek": "Ρίγανη",
    "latin": "Rígani",
    "english": "Oregano"
  },
  {
    "greek": "Σήμερα",
    "latin": "Símera",
    "english": "Today"
  },
  {
    "greek": "Αύριο",
    "latin": "Ávrio",
    "english": "Tomorrow"
  },
  {
    "greek": "Χθες",
    "latin": "Chthés",
    "english": "Yesterday"
  },
  {
    "greek": "τώρα",
    "latin": "tóra",
    "english": "now"
  },
  {
    "greek": "εδώ",
    "latin": "edó",
    "english": "here"
  },
  {
    "greek": "καλά",
    "latin": "kalá",
    "english": "well"
  }
];

    export default function FlashcardApp() {
      const [index, setIndex] = useState(0);
      const [showTranslation, setShowTranslation] = useState(false);

      const current = vocabulary[index];

      const nextCard = () => {
        setShowTranslation(false);
        setIndex((prev) => (prev + 1) % vocabulary.length);
      };

      return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
          <div className="w-full max-w-md text-center p-6 shadow-xl border rounded bg-white">
            <h2 className="text-3xl font-bold mb-4">{current.greek}</h2>
            {showTranslation && (
              <div className="text-xl">
                <p className="mb-2 italic">{current.latin}</p>
                <p>{current.english}</p>
              </div>
            )}
          </div>
          <div className="flex gap-4 mt-6">
            <button onClick={() => setShowTranslation(!showTranslation)} className="px-4 py-2 bg-blue-500 text-white rounded">
              {showTranslation ? "Hide" : "Show"} Translation
            </button>
            <button onClick={nextCard} className="px-4 py-2 bg-gray-300 rounded">Next</button>
          </div>
        </div>
      );
    }
