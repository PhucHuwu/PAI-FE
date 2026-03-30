import { HeroBanner } from '@/components/home/hero-banner'
import { FilmCrewAttractionIndex } from '@/components/organisms/FilmAttraction'
import { HotLocations } from '@/components/organisms/HotLocations'
import { LeaderboardSection } from '@/components/organisms/LeaderboardSection'
import { MovieSection } from '@/components/organisms/MovieSection'
import { MapSection } from '@/components/organisms/MapSection'

export default function HomePage() {
  return (
    <>
      <MapSection />
      <LeaderboardSection />
      <FilmCrewAttractionIndex />
    </>
  )
}
