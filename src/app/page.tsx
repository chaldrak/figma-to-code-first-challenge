import Header from "@/components/header"
import CollectionSection from "@/components/home/CollectionSection"
import HeroSection from "@/components/home/HeroSection"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#F8F8F8]">
      <Header />
      <section className="mx-auto h-fit w-full max-w-7xl border-l border-neutral-50">
        <HeroSection />
        <CollectionSection />
      </section>
    </main>
  )
}
