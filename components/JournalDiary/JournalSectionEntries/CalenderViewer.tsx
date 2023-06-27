import React, { useState } from "react";
import Calendar from "react-calendar";

function CalenderViewer() {
  const [value, onChange] = useState<any>(new Date());

  return (
    <div>
      <Calendar onChange={(e) => onChange(e)} value={value} />
    </div>
  );
}

export default CalenderViewer;
