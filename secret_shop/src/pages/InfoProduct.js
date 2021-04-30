import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { Nav, NavLink } from "../components/Navbar/NavbarElements";
import {
  MyGrid,
  SmallPicContainer,
  PicContainer,
  MyImg,
  SmallPic,
} from "../components/InfoProduct/InfoProductElements";

function InfoProduct() {
  const { state } = useLocation();
  const [imgSelected, setImgSelected] = useState(false);

  useEffect(() => {
    if (state) setImgSelected(state.img);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!imgSelected) return <h1>No Seleccionó un Producto</h1>;
  return (
    <>
      <Nav>
        {" "}
        <NavLink to="/"> Secret Shop Maketplace </NavLink>
      </Nav>

      <Grid container>
        <MyGrid>
          {" "}
          <SmallPicContainer>
            {state.other_img.map((tile, index) => (
              <SmallPic
                key={index}
                src={tile}
                alt={"imagen " + index}
                onClick={() => setImgSelected(state.other_img[index])}
              />
            ))}
          </SmallPicContainer>
        </MyGrid>

        <PicContainer>
          <MyImg
            src={imgSelected}
            onClick={(e) => window.open(e.target.src, "_blank")}
          />
        </PicContainer>

        <Grid item md zeroMinWidth>
          <h1 style={{ margin: "50px", textAlign: "center", color: "#251f21" }}>
            {state.name}
          </h1>
          <p style={{ margin: "50px", textAlign: "center", color: "#251f21" }}>
            {state.bigDesc}
          </p>
          <h3 style={{ margin: "50px", textAlign: "center", color: "#251f21" }}>
            {state.price}
          </h3>
        </Grid>
      </Grid>
    </>
  );
}

export default InfoProduct;
