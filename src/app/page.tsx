import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/getMovies";
import { MoviesCarousel } from "@/components";

export default async function Home() {
  const upcomingMovies = await getUpcomingMovies();
  const popularMovies = await getPopularMovies();
  const topRatedMovies = await getTopRatedMovies();

  return (
    <main>
      <div className="flex flex-col space-y-2 xl:-mt-48">
        <MoviesCarousel title="Upcoming" movies={upcomingMovies} />
        <MoviesCarousel title="Top Rated" movies={topRatedMovies} />
        <MoviesCarousel title="Popular" movies={popularMovies} />
      </div>
    </main>
  );
}
