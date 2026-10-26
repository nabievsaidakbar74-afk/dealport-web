
import BestSelling from './BestSelling'
import LimitedTimeDeal from './LimitedTimeDeal'
import StartExpolingNow from './StartExpolingNow'
import TrendingProducts from './TopProducts'
import HeroSlider from './HeroSlider'
export default function HomePage() {
  return (
    <main>
      <HeroSlider />
      <TrendingProducts />
      <StartExpolingNow />
      <BestSelling />
      <LimitedTimeDeal />
    </main>
  )
}
