import Link from "next/link";
import styled from "styled-components";

export default function NavBar() {
  return (
    <nav>
      <Link href="/">
        <Anchor>Home</Anchor>
      </Link>
      <Link href="/roomie">
        <Anchor>About</Anchor>
      </Link>
    </nav>
  );
}

const Anchor = styled.a`
  font-size: 20px;
  color: #aaa;
  margin: 0 10px;
  cursor: pointer;
`;
