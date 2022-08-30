import styled from "styled-components";

export const Container = styled.div`
  background-color: #171b1f;
  font-family: "Poppins", sans-serif;
`;

export const ContainerContent = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  @media (max-width: 1120px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const ContainerSelectFilterCommon = styled.div`
  display: flex;
  margin-left: 20px;
  @media (max-width: 1120px) {
    display: flex;
  }
  @media (max-width: 540px) {
    flex-direction: column;
  }
`;
export const ContainerBarSearch = styled.div`
  max-width: 700px;
  width: 90%;
`;

export const ContainerSelectFilter = styled.div`
  padding: 15px;
`;

export const ContainerContentSelectFilter = styled.div`
  display: flex;
  position: absolute;
  @media (max-width: 540px) {
    position: static;
  }
`;

export const ContainerInput = styled.input`
  background-color: #252b33;
  outline: none;
  border: none;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  margin-bottom: 70px;
  color: #fff;
  font-size: 18px;
  padding-left: 20px;
`;

export const ContainerSelectSpanTitle = styled.span`
  color: #8d8d8d;
  font-size: 16.5px;
`;
export const ContainerSelectSpanAll = styled.span`
  color: #ffff;
  font-size: 16.5px;
  margin-left: 7px;
  margin-right: 7px;
`;

export const Ul = styled.ul`
  list-style: none;
  border-radius: 10px;
  background-color: #252b33;
  padding: 10px;
  max-width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: 20ms;
  margin-left: 70px;
`;

export const Li = styled.li`
  color: #8d8d8d;
  padding: 3px;
`;

export const ContainerClick = styled.div``;
