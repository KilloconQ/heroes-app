import { lazy } from "react";

import { createBrowserRouter } from "react-router";

import { AdminLayout } from "@/admin/layouts/AdminLayout";
import { HeroesLayout } from "@/heroes/layouts/HeroesLayout";
// import SearchPage from '@/heroes/pages/search/SearchPage';

const SearchPage = lazy(() => import("@/heroes/pages/search/SearchPage"));
const AdminPage = lazy(() => import("@/admin/pages/AdminPage"));
const HomePage = lazy(() => import("@/heroes/pages/home/HomePage"));
const HeroPage = lazy(() => import("@/heroes/pages/hero/HeroPage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HeroesLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/hero/1",
        element: <HeroPage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminPage />,
      },
    ],
  },
]);
