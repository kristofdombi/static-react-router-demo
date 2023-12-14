import { Link, useParams } from "react-router-dom";

function Page() {
  const { pageId } = useParams();

  return (
    <>
      <div className="card">Hello from page #{pageId}!</div>
      <Link to="/">Go back home</Link>
    </>
  );
}

export default Page;
