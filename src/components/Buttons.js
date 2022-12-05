import styled from "styled-components";

export default function Buttons({right, almost, wrong}) {
  return (
    <BtnWrapper>
      <Btn cor="#FF3030" onClick={wrong}>
        Não lembrei
      </Btn>
      <Btn cor="#FF922E" onClick={almost}>
        Quase não lembrei
      </Btn>
      <Btn cor="#2FBE34" onClick={right}>
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
  background-color: ${(props) => props.cor};
  margin-left: 10px;
  color: #ffffff;
  &:hover {
    cursor: pointer;
  }
`;
