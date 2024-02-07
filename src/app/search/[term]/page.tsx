import { notFound } from "next/navigation";

type Props = {
  params: {
    term: string;
  };
};

function SearchPage({ params: { term } }: Props) {
  if (!term) notFound();

  const decodeTerm = decodeURI(term);

  return <div>SearchPage: {decodeTerm}</div>;
}

export default SearchPage;
