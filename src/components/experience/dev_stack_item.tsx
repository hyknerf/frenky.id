import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import RoundedTags from "./rounded_tag";

export declare interface DevStackItemProps {
  title: string;
  tags: Array<string>;
  icon: IconDefinition;
}

const DevStackItem = (props: DevStackItemProps) => {
  return (
    <div className="">
      <p className="mb-2 text-sm font-aglet">
        <FontAwesomeIcon icon={props.icon}></FontAwesomeIcon>
        <span className="ml-2">{props.title}</span>
      </p>
      <RoundedTags texts={props.tags}></RoundedTags>
    </div>
  );
};

export default DevStackItem;
