import Banner from "@/Components/Banner/Banner";
import NewArrivals from "@/Components/NewArrivals/NewArrivals";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <NewArrivals></NewArrivals>
    </div>
  );
}
