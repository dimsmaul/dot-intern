import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Button } from "@/components/ui/button";
import React from "react";
import { Outlet } from "react-router-dom";

const BaseLayouts: React.FC = () => {
    
  return (
    <div>
      <div className="absolute right-5 bottom-5">
        <Button size={"icon"} variant={'outline'}>
          <AnimatedThemeToggler />
        </Button>
      </div>
      <Outlet />
    </div>
  );
};

export default BaseLayouts;
