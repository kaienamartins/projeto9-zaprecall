import styled from "styled-components";

export default function Buttons() {
  return (
    <BtnWrapper>
      <Btn cor="#FF3030">
        Não lembrei
      </Btn>
      <Btn cor="#FF922E">
        Quase não lembrei
      </Btn>
      <Btn cor="#2FBE34">
        Zap!
      </Btn>
    </BtnWrapper>
  );
}

const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  border: none;
`;

const Btn = styled.button`
  width: 85px;
  height: 33px;
  border-radius: 5px;
  border: none;
  font-family: "Recursive", sans-serif;
  color: #ffffff;
  &:hover {
    cursor: pointer;
  }
`;
