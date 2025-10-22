import Loaders from "@/components/loaders";
import BaseLayouts from "@/layouts/base";
import React, { Suspense } from "react";
import type { RouteObject } from "react-router-dom";

const QuizOverview = React.lazy(() => import("@/feature/quiz/pages"));
const QuizAttempt = React.lazy(() => import("@/feature/quiz/pages/attempt"));
const QuizResult = React.lazy(() => import("@/feature/quiz/pages/result"));

export const AuthRoute: RouteObject[] = [
  {
    path: "/quiz",
    element: <BaseLayouts />,
    children: [
      {
        path: "/quiz",
        element: (
          <Suspense fallback={<Loaders isFullScreen />}>
            <QuizOverview />
          </Suspense>
        ),
      },
      {
        path: "/quiz/attempt",
        element: (
          <Suspense fallback={<Loaders isFullScreen />}>
            <QuizAttempt />
          </Suspense>
        ),
      },
      {
        path: "/quiz/result",
        element: (
          <Suspense fallback={<Loaders isFullScreen />}>
            <QuizResult />
          </Suspense>
        ),
      },
    ],
  },
];
