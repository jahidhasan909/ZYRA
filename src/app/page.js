import Banner from "@/Components/Banner/Banner";
import MarqueeSlider from "@/Components/Banner/MarqueeSilder";
import NewArrivals from "@/Components/NewArrivals/NewArrivals";
import TanjimSquad from "@/Components/TanjimSquad/TanjimSquad";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <MarqueeSlider></MarqueeSlider>
      <NewArrivals></NewArrivals>
      <TanjimSquad></TanjimSquad>
    </div>
  );
}
