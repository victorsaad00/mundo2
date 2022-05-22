import * as React from "react";

const Accordion = (props, { children }) => {
  return <Accordion {...props}>{children}</Accordion>;
};

export default Accordion;
