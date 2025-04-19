
import { useState } from "react";

const vocabulary = [
  { greek: "Αλάτι", latin: "Aláti", english: "Salt" },
  { greek: "Πιπέρι", latin: "Pipéri", english: "Pepper" },
  { greek: "Ρίγανη", latin: "Rígani", english: "Oregano" },
  { greek: "Σήμερα", latin: "Símera", english: "Today" },
  { greek: "Αύριο", latin: "Ávrio", english: "Tomorrow" },
  { greek: "Χθες", latin: "Chthés", english: "Yesterday" },
  { greek: "Μεθαύριο", latin: "Methávrio", english: "Day after tomorrow" },
  { greek: "Προχθές", latin: "Prochthés", english: "Day before yesterday" },
  { greek: "τώρα", latin: "tóra", english: "now" },
  { greek: "σήμερα", latin: "símera", english: "today" },
  { greek: "χθες", latin: "chthés", english: "yesterday" },
  { greek: "αύριο", latin: "ávrio", english: "tomorrow" },
  { greek: "πάντα", latin: "pánta", english: "always" },
  { greek: "συχνά", latin: "sychná", english: "often" },
  { greek: "ποτέ", latin: "poté", english: "never" },
  { greek: "νωρίς", latin: "norís", english: "early" },
  { greek: "αργά", latin: "argá", english: "late" },
  { greek: "εδώ", latin: "edó", english: "here" },
  { greek: "εκεί", latin: "ekeí", english: "there" },
  { greek: "μέσα", latin: "mésa", english: "inside" },
  { greek: "έξω", latin: "éxo", english: "outside" },
  { greek: "καλά", latin: "kalá", english: "well" },
  { greek: "άσχημα", latin: "áschima", english: "badly" },
  { greek: "εύκολα", latin: "éf kola", english: "easily" },
  { greek: "δύσκολα", latin: "dýskola", english: "with difficulty" },
  { greek: "γρήγορα", latin: "grígora", english: "quickly" },
  { greek: "ήσυχα", latin: "ísycha", english: "quietly" },
  { greek: "δυνατά", latin: "dynatá", english: "loudly" },
  { greek: "προσεκτικά", latin: "prosektiká", english: "carefully" },
  { greek: "πολύ", latin: "polý", english: "very" },
  { greek: "λίγο", latin: "lígo", english: "a little" },
  { greek: "αρκετά", latin: "arketá", english: "enough" },
  { greek: "πάρα πολύ", latin: "pára polý", english: "too much" },
  { greek: "σχεδόν", latin: "schedón", english: "almost" },
  { greek: "εντελώς", latin: "entelós", english: "completely" },
  { greek: "πότε", latin: "póté", english: "when" },
  { greek: "πού", latin: "poú", english: "where" },
  { greek: "γιατί", latin: "giatí", english: "why" },
  { greek: "πώς", latin: "pós", english: "how" },
  { greek: "όπως", latin: "ópos", english: "like / as" },
  { greek: "όσο", latin: "óso", english: "as much as" },
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
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <div style={{ border: '1px solid #ccc', padding: '2rem', borderRadius: '1rem', backgroundColor: 'white' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{current.greek}</h2>
        {showTranslation && (
          <div style={{ fontSize: '1.2rem' }}>
            <p style={{ fontStyle: 'italic' }}>{current.latin}</p>
            <p>{current.english}</p>
          </div>
        )}
      </div>
      <div style={{ marginTop: '2rem' }}>
        <button onClick={() => setShowTranslation(!showTranslation)} style={{ marginRight: '1rem', padding: '0.5rem 1rem' }}>
          {showTranslation ? "Hide" : "Show"} Translation
        </button>
        <button onClick={nextCard} style={{ padding: '0.5rem 1rem' }}>Next</button>
      </div>
    </div>
  );
}
