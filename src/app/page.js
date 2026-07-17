import ArrivingSoon from "@/Components/ArrivingSoon/ArrivingSoon";
import Banner from "@/Components/Banner/Banner";
import MarqueeSlider from "@/Components/Banner/MarqueeSilder";
import NewArrivals from "@/Components/NewArrivals/NewArrivals";
import TanjimSquad from "@/Components/ZyraSquad/ZyraSquad";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <MarqueeSlider></MarqueeSlider>
      <NewArrivals></NewArrivals>
      <ArrivingSoon></ArrivingSoon>
      <TanjimSquad></TanjimSquad>
    </div>
  );
}
