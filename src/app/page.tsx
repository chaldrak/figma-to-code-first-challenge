import Footer from "@/components/footer"
import Header from "@/components/header"
import BuildYouNFT from "@/components/home/BuildYouNFT"
import CollectionSection from "@/components/home/CollectionSection"
import CreateSellSection from "@/components/home/CreateSellSection"
import HeroSection from "@/components/home/HeroSection"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#F8F8F8]">
      <Header />
      <section className="mx-auto h-fit w-full max-w-7xl">
        <HeroSection />
        <CollectionSection />
        <CreateSellSection />
        <BuildYouNFT />
      </section>
      <Footer />
    </main>
  )
}
