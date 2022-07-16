import * as React from "react";
import { WorkDuration } from "../../types";

const Duration = (props: WorkDuration) => {
  return (
    <>
      {props.start}-{props.end}
    </>
  );
};

export default Duration;
