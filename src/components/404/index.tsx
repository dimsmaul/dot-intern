import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export interface INotFoundProps {
  href: string;
}

const NotFound: React.FC<INotFoundProps> = (props) => {
  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center gap-2">
      <p className="text-lg font-semibold">404 Not Found</p>
      <Link to={props.href}>
        <Button>Back</Button>
      </Link>
    </div>
  );
};

export default NotFound;
