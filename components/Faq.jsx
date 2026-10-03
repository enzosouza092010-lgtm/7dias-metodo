"use client";
import { useState } from "react";

export default function Faq({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq">
      {items.map(([q, a], i) => (
        <div key={q} className={"fq" + (open === i ? " open" : "")}>
          <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
            <span>{q}</span><i aria-hidden="true" />
          </button>
          <div className="fa"><p>{a}</p></div>
        </div>
      ))}
    </div>
  );
}
