import * as React from "react";
import { WorkDuration } from "../../types";

const Duration = (props: WorkDuration) => {
  return (
    <div className="font-aglet">
      {props.start} — {props.end}
    </div>
  );
};

export default Duration;
