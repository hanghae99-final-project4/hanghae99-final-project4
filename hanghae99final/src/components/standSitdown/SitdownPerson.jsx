import React from "react";
import styled from "styled-components";
import ToggleSwitch from "./ToggleSwitch";

const SitdownPerson = () => {
  return (
    <>
      <SitdownPage>
        πμμμλ μ¬λμκ² λ³΄μ΄λ νλ©΄μ λ§λ€μ΄λ³΄μπ»
        <ChattingDiv>
          μννλκ»μ μ±νμ μμ²­νμμ΅λλ€
          <ChattButtonDiv>
            <ConfirmButton style={{ fontSize: "20px", fontWeight: "600" }}>
              νμΈ
            </ConfirmButton>
            <CanselButton style={{ fontSize: "20px", fontWeight: "600" }}>
              μ κΈ°
            </CanselButton>
          </ChattButtonDiv>
        </ChattingDiv>
        <ToggleSwitchDiv>
          <ToggleSwitch />
        </ToggleSwitchDiv>
        <ShareDiv>λλ λͺ¨λ²μλ―Όμ΄κΈ° λλ¬Έμ μλ¦¬λ₯Ό κ³΅μ νκ³  μΆμ΄μ!</ShareDiv>
        <ShareModalDiv>
          <StationDiv>ν΄λΉμ­</StationDiv>
          <StationDiv>λ΄λ¦¬λ μ­</StationDiv>
          <StationDiv>ν΄λΉ μ­μ μΉΈ λ²νΈ</StationDiv>
          <StationDiv>μΈμ μ°©μ</StationDiv>

          <SetBtn>λ±λ‘νκΈ°</SetBtn>
        </ShareModalDiv>
      </SitdownPage>
    </>
  );
};

export default SitdownPerson;

const SitdownPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  background-color: #ffffff;
  text-align: center;
  width: 100%;
  height: 100vh;
`;

const ChattingDiv = styled.div`
  background-color: #ffffff;
  border: 2px solid black;
  border-radius: 10px;
  position: relative;
  top: -40px;
  width: 500px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ChattButtonDiv = styled.div`
  width: 300px;
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  button {
    cursor: pointer;
  }
`;
const ConfirmButton = styled.button`
  width: 500px;
  background-color: transparent;
  border: none;
  border-right: 1px solid #d9d9d9;
`;
const CanselButton = styled.button`
  border-radius: 5px;
  width: 500px;
  background-color: transparent;
  border: none;
`;
const ShareDiv = styled.div`
  width: 400px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0833d2;
  color: white;
  border-radius: 10px;
`;
const ToggleSwitchDiv = styled.div`
  width: 300px;
  position: relative;
  margin-bottom: 20px;
  right: -180px;
`;
const ShareModalDiv = styled.div`
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  width: 600px;
  height: 450px;
  background-color: #ececec;
`;
const SetBtn = styled.div`
  cursor: pointer;
  margin-top: 25px;
  border-radius: 10px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 40px;
  background-color: #0833d2;
`;
const StationDiv = styled.div`
  margin-top: 30px;
  border-radius: 10px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d9d9d9;
  width: 500px;
  height: 50px;
`;
