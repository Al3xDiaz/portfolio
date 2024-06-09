import Link from "next/link";
import { useSearchParams } from "next/navigation"
import styled from "styled-components";

export default function Forbiden() {
  const params = useSearchParams();
  const returnUrl = params.get("returnUrl")
	return (<Div>
    <ErrorImage />
    <h4>you don’t have permission,</h4>
    <h4 className="subtitle">please try again later.</h4>
    <Link className="buton" href={returnUrl||"/"}>Refresh</Link>
  </Div>);
}
const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: black;
  width: 100%;
  height: 100vh;
  background-image: url(/assets/background.svg);
  & .subtitle {
    color: #E66070;
  }
  & .buton {
    margin-top: 1rem;
    padding: 1rem 2rem;
    background-color: #e24557;
    color: white;
    border-radius: 1rem;
  }
  `;
const ErrorImage = styled.div`
  width: 24rem;
  height: 20rem;
  background-image: url(/assets/401.svg);
  background-position: center;
  background-size: cover;
  margin-bottom: 1rem;
`
