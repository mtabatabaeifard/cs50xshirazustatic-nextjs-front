"use client";
import {
  AboutCS50x,
  AboutTeacher,
  Courses,
  Faq,
  Footer,
  HamMenu,
  Header,
  ImageSection,
  NavBar,
  SuitableFor,
  TeamAndSponsers,
} from "@/features";
import { useEffect, useState } from "react";
import Loading from "../loading";
import { HeadingPrimay } from "@/components";

export default function Educator() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <NavBar />
          <main className="mt-5">
          <AboutTeacher />
          </main>
          <TeamAndSponsers renderSecondary={true} />
          <Footer />
        </>
      )}
    </>
  );
}
