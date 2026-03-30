"use client";

import { RouterProvider } from 'react-router'
import { legacyRouter } from './routes'

export default function LegacyRouterProvider() {
  return <RouterProvider router={legacyRouter} />
}
