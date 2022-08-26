import React, { useState } from "react";

export default function FAQ(props) {
  const { qus, ans } = props.faq;
  const [toggle, setToggle] = useState(false);
  return (
    <article>
      <div className="qustion">
        <h3>{qus}</h3>
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {toggle ? (
            <span>
              <i class="fa-solid fa-angle-down"></i>
            </span>
          ) : (
            <span>
              <i class="fa-solid fa-angle-up"></i>
            </span>
          )}
        </button>
      </div>
      <div className="answer">{toggle && ans}</div>
    </article>
  );
}
