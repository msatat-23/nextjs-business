import { Suspense } from "react";
import HomePageClient from "./homePageClient";
import { HomePageSkeleton } from "@/components/skeletons/homePageSkeleton";



export default function HomePage() {




  return (
    <Suspense fallback={<HomePageSkeleton />}>
      <HomePageClient />
    </Suspense>
  );
}
