import React from "react";

function Article({ title, date, preview, minutes }) {
  const coffeeCups = Math.ceil(minutes / 5);
  const bentoBoxes = Math.ceil(minutes / 10);

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <div>
        {minutes <= 30 && "☕️".repeat(coffeeCups)}
        {minutes > 30 && "🍱".repeat(bentoBoxes)}
        {` ${minutes} min read`}
      </div>
    </article>
  );
}

export default Article;
