import Link from "next/link";
import { useSearchParams } from "next/navigation"
import { useRouter } from "next/router";
import styled from "styled-components";

export default function NotFound() {
  const {} = useRouter();
	return (
  <div className="error-container">
    <div className="error-image error-image-404" data-image="404" />
    <h4>Ops!!! resource not found</h4>
    <h4 className="subtitle">please try again later.</h4>
    <Link className="buton" href="/">Refresh</Link>
  </div>
  );
}
