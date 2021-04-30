import styled from "styled-components";

export const MyGrid = styled.div`
  display: inline;

  width: 100%;
  align-self: center;
  justify-content: center;
  justify-items: center;

  @media screen and (min-width: 570px) {
    display: grid;
    width: auto;
    direction: column;
  }
`;

export const SmallPicContainer = styled.div`
  display: block;
  align-self: center;
  width: 100%;
  justify-content: center;
  text-align: center;

  @media screen and (min-width: 570px) {
    display: grid;
    width: auto;
    direction: column;
    justify-items: center;
    align-items: center;
  }
`;

export const PicContainer = styled.div`
  display: inline;
  align-self: center;
  width: 100%;

  @media screen and (min-width: 570px) {
    display: grid;
    width: auto;
    justify-content: center;
  }
`;

export const MyImg = styled.img`
  width: 80vw;
  height: 100%;
  object-fit: contain;
  cursor: pointer;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;

  @media screen and (min-width: 570px) {
    padding-left: 30px;
  }

  @media screen and (min-width: 960px) {
    width: 400px;
  }
`;

export const SmallPic = styled.img`
  cursor: pointer;
  border: dotted;
  border-width: 1px;
  object-fit: contain;
  height: 60px;
  width: 100px;
  padding: 3px;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 25px;
`;
