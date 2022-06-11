import styled from "styled-components";
import Seo from "../components/Seo";

export default function roomie() {
  return (
    <div>
      <Seo title="Roomie" />
      <NameText>Toby is my roomie</NameText>
      <NameText>Hardy is my roomie</NameText>
    </div>
  );
}

const NameText = styled.h1`
  color: steelblue;
  font-size: 20px;
`;
