import styled from "styled-components";

export default function Buttons({right, almost, wrong}) {
  return (
    <BtnWrapper>
      <Btn color="#FF3030" onClick={wrong} data-test="no-btn">
        Não lembrei
      </Btn>
      <Btn color="#FF922E" onClick={almost} data-test="partial-btn">
        Quase não lembrei
      </Btn>
      <Btn color="#2FBE34" onClick={right} data-test="zap-btn">
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
  background-color: ${(props) => props.color};
  margin-left: 10px;
  color: #ffffff;
  &:hover {
    cursor: pointer;
  }
`;
