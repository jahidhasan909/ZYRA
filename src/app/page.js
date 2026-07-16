import Banner from "@/Components/Banner/Banner";
import MarqueeSlider from "@/Components/Banner/MarqueeSilder";
import NewArrivals from "@/Components/NewArrivals/NewArrivals";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <MarqueeSlider></MarqueeSlider>
      <NewArrivals></NewArrivals>
    </div>
  );
}
