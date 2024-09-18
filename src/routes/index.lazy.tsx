import { createLazyFileRoute } from "@tanstack/react-router";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import About from "@/components/About";
import Solutions from "@/components/Solutions";
import Testimonials from "@/components/Testimonials";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Intro */}
      <Intro />

      {/* About */}
      <About />

      {/* Solutions */}
      <Solutions />

      {/* Testimonials */}
      <Testimonials />
    </>
  );
}
