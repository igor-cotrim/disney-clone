import { notFound } from "next/navigation";

import { getPopularMovies, getSearchedMovies } from "@/lib/getMovies";
import { MoviesCarousel } from "@/components";

type Props = {
  params: {
    term: string;
  };
};

async function SearchPage({ params: { term } }: Props) {
  if (!term) notFound();

  const decodeTerm = decodeURI(term);
  const movies = await getSearchedMovies(decodeTerm);
  const popularMovies = await getPopularMovies();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-4 mt-32 xl:mt-42">
        <h1 className="text-6xl font-bold px-10">Results for {decodeTerm}</h1>
        <MoviesCarousel title="Movies" movies={movies} isVertical />
        <MoviesCarousel title="You may also like" movies={popularMovies} />
      </div>
    </div>
  );
}

export default SearchPage;
