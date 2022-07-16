import * as React from "react";
import { WorkDuration } from "../../types";

const Duration = (props: WorkDuration) => {
  return (
    <div className="mb-4">
      {props.start} — {props.end}
    </div>
  );
};

export default Duration;
