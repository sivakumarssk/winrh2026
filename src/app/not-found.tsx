import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="error-area">
        <div className="d-table">
          <div className="d-table-cell">
            <h1>
              4<span>0</span>
              <b>4</b>!
            </h1>
            <h3>Oops! Page Not Found</h3>
            <p>The page you were looking for could not be found.</p>
            <Link href="/" className="btn btn-primary">
              Return Home page
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
