import Logo from "../assets/img/logo.png";
import styled from "styled-components";

export default function Header() {
  return (
    <>
      <LogoContainer>
        <LogoImage src={Logo} alt="/" />
        <LogoName>ZapRecall</LogoName>
      </LogoContainer>
    </>
  );
}

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0 20px 0;
`;

const LogoImage = styled.img`
  width: 52px;
`;

const LogoName = styled.h1`
  font-family: "Righteous";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
  color: #ffffff;
  margin-left: 20px;
`;