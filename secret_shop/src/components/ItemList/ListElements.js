import styled from "styled-components";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 3rem calc((100vw - 2000px) / 2);
  background: #fff;
  color: #fff;

  background-position: center;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
`;

export const ProductWrapper = styled.div`
  display: flex;
  max-width: 100%100vw;
  flex-wrap: wrap;
  justify-content: center;
  justify-self: center;
  gap: 20px;
  margin: 0 auto;
`;

export const Heading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 3rem;
  color: #fff;
`;

export const CssChip = withStyles({
  root: {
    fontSize: "22px",
    fontFamily: "Arial",
    color: "#1E1E1E",
    borderColor: "silver",
    border: "none",
    marginLeft: "auto",
    marginRight: "10px",
    marginBottom: "10px",
    marginTop: "auto",
  },
})(Chip);

export const MyImg = styled.img`
  height: 180px;
  width: 90%;
  margin: 10px 10px 0 10px;
  border-radius: 8px;
  object-fit: contain;
`;

export const WhiteTextTypography = withStyles({
  root: {
    color: "#1E1E1E",
  },
})(Typography);
