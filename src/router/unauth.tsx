import Loaders from "@/components/loaders";
import React, { Suspense } from "react";
import { type RouteObject } from "react-router-dom";

const SignIn = React.lazy(() => import("@/feature/auth/pages"));

export const UnauthRoute: RouteObject[] = [
  {
    path: "/",
    element: (
      <Suspense fallback={<Loaders isFullScreen />}>
        <SignIn />
      </Suspense>
    ),
  },
];
