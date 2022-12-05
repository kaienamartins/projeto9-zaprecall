import styled from "styled-components";

export default function Buttons() {
  return (
    <BtnWrapper>
      <Btn>
        Não lembrei
      </Btn>
      <Btn>
        Quase não lembrei
      </Btn>
      <Btn>
        Zap!
      </Btn>
    </BtnWrapper>
  );
}

const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
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
