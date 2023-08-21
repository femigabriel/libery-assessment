import Link from "next/link";
import { useRouter } from "next/router";
import React, {useEffect} from "react";


export const NotFoundPage = () => {
    useEffect(() => {
console.log('hey ')
    }, [])
  return (
    <div>
      <h1>Ooops.....</h1>
      <h2>That page cannot be found.</h2>
      <p>
        Go back to the
        <Link href="/">Dashboard</Link>
      </p>
    </div>
  );
};
