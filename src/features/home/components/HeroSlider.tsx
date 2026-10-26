import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { getBanners } from "../services/getBanners";
import SwiperList from "./SwiperList";

export default async function HeroSlider() {

  const data = await getBanners()

  return (
    <section className="m-[0px_25px] rounded-2xl overflow-hidden mb-10">
      <SwiperList data={data} />
    </section>
  );
}