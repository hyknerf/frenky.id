import {
  faCode,
  faMicrochip,
  faScrewdriverWrench
} from "@fortawesome/free-solid-svg-icons";
import * as React from "react";
import { DevStacks } from "../../types";
import DevStackItem from "./dev_stack_item";

const Stacks = (stacks: DevStacks) => {
  return (
    <div className="flex flex-col my-4 gap-y-3">
      <DevStackItem icon={faCode} title={"Languages"} tags={stacks.languages} />
      <DevStackItem
        icon={faMicrochip}
        title={"Technologies"}
        tags={stacks.technologies}
      />
      <DevStackItem
        icon={faScrewdriverWrench}
        title={"Tools"}
        tags={stacks.tools}
      />
    </div>
  );
};

export default Stacks;
