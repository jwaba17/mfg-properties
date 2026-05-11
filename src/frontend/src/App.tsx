import { Layout } from "@/components/Layout";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";

const Home = lazy(() =>
  import("@/pages/Home").then((m) => ({ default: m.Home })),
);
const Properties = lazy(() =>
  import("@/pages/Properties").then((m) => ({ default: m.Properties })),
);
const PropertyDetail = lazy(() =>
  import("@/pages/PropertyDetail").then((m) => ({ default: m.PropertyDetail })),
);

const PageFallback = () => (
  <div className="max-w-7xl mx-auto px-6 py-16 space-y-4">
    <Skeleton className="h-10 w-1/3" />
    <Skeleton className="h-6 w-2/3" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {[1, 2, 3].map((i) => (
        <Skeleton key={i} className="h-72 w-full rounded-lg" />
      ))}
    </div>
  </div>
);

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Suspense fallback={<PageFallback />}>
        <Outlet />
      </Suspense>
    </Layout>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const propertiesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/properties",
  component: Properties,
});

const propertyDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/properties/$id",
  component: PropertyDetail,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  propertiesRoute,
  propertyDetailRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
