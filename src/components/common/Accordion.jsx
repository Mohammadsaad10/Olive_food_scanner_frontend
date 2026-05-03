import { useState } from "react";

const Accordion = ({ items = [] }) => {
  const [activeId, setActiveId] = useState(null);

  return (
    <div className="divide-y divide-[#386641]/15 rounded-2xl bg-white">
      {items.map((item) => {
        const isOpen = activeId === item.id;
        return (
          <div key={item.id}>
            <button
              className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-medium md:text-base"
              onClick={() => setActiveId(isOpen ? null : item.id)}
            >
              <span>{item.question}</span>
              <span>{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen ? <p className="px-5 pb-4 text-sm text-[#1f3824]/70">{item.answer}</p> : null}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
