import React, { useState } from "react";

function Checkbox() {
  const [newsletter, setNewsletter] = useState(false);

  function handleNewsletterChange(event) {
    setNewsletter(event.target.checked);
  }

  return (
    <div>
    <form>
      <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
      <input
        type="checkbox"
        id="newsletter"
        onChange={handleNewsletterChange}
        checked={newsletter}
      />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default Checkbox;