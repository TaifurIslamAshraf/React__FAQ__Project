import React, { useState } from "react";
import FAQ from "./FAQ";
import "./faqs.modiul.css";

import FaqData from "./FaqData.json";

export default function FAQS() {
  const [faqs, setFaqs] = useState(FaqData);
  return (
    <main>
      <h1>FAQS</h1>
      <div>
        {faqs.map((faq) => (
          <FAQ key={faq.id} faq={faq} />
        ))}
      </div>
    </main>
  );
}
