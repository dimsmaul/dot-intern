// import { mdiLoading } from "@mdi/js";
// import Icon from "@mdi/react";
import clsx from "clsx";
import React from "react";

export interface LoadersType {
  size?: number;
  className?: string;

  isFullScreen?: boolean;
}

const Loaders: React.FC<LoadersType> = (props) => {
  return (
    <div
      className={clsx(
        "flex items-center justify-center",
        props.className,
        props.isFullScreen
          ? "fixed top-0 left-0 w-screen h-screen bg-primary-100 z-[9999]"
          : ""
      )}
    >
      <div className="flex flex-col gap-3 items-center">
        {/* Dots Loading */}
        <div className="flex space-x-5 justify-center items-center">
          <div className="h-2 w-2 bg-foreground rounded-full animate-bounce"></div>
          <div className="h-2 w-2 bg-foreground rounded-full animate-bounce delay-150"></div>
          <div className="h-2 w-2 bg-foreground rounded-full animate-bounce delay-300"></div>
        </div>

        {/* Normal Loading */}
        {/* <div className="inline-block h-20 w-20 animate-spin rounded-full border-2 border-solid border-foreground border-e-transparent"></div> */}
      </div>
      {/* <Icon path={mdiLoading} size={props.size || 2} className="animate-spin" /> */}
    </div>
  );
};

export default Loaders;
