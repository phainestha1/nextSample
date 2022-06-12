import { useRouter } from "next/router";
import Seo from "../components/Seo";

export default function Home({ results }: any) {
  // Variables
  const router = useRouter();

  // Handling functions
  const onClick = (id: number, title: string) => {
    const pathname = `/movies/${id}`;
    const query = { id, title };

    router.push({ pathname, query }, pathname);
  };

  // View Body
  return (
    <div>
      <Seo title="Home" />
      {results?.map((movie: any) => (
        <div
          onClick={() => onClick(movie.id, movie.original_title)}
          key={movie.id}
        >
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/movies");
  const { results } = await response.json();

  return { props: { results } };
}
