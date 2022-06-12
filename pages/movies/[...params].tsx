import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function MovieId({ params }: any) {
  // Variables
  const router = useRouter();
  const { id, title } = router.query;
  console.log(params);

  // View Body
  return (
    <div>
      <Seo title={title} />
      <h1>ID is: {id}</h1>
      <h1>Title is: {title}</h1>
    </div>
  );
}

export function getServerSideProps({ params: { params } }: any) {
  return {
    props: { params },
  };
}
