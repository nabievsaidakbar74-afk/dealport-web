
import BestSelling from './BestSelling'
import LimitedTimeDeal from './LimitedTimeDeal'
import StartExpolingNow from './StartExpolingNow'
import HeroSlider from './HeroSlider'
import TopProducts from './TopProducts'
export default function HomePage() {
  return (
    <main>
      <HeroSlider />
      <TopProducts />
      <StartExpolingNow />
      <BestSelling />
      <LimitedTimeDeal />
    </main>
  )
}
