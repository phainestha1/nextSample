import { useRouter } from "next/router";

export default function MovieId() {
  const router = useRouter();
  const { id, title } = router.query;

  return (
    <div>
      <h1>ID is: {id}</h1>
      <h1>Title is: {title}</h1>
    </div>
  );
}
