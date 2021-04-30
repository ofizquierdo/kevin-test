import React from "react";
import { data } from "./data";
import { Link } from "react-router-dom";
import {
  Container,
  Heading,
  ProductWrapper,
  CssChip,
  MyImg,
  WhiteTextTypography,
} from "./ListElements";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "420px",
    width: "250px",
    borderRadius: "8px",
    background: "#f8f8f8",
    border: "solid",
    borderWidth: "1px",
    borderColor: "#1E1E1E",
    boxShadow: "2px 4px silver",
  },
});

function ItemList(props) {
  const classes = useStyles();

  return (
    <Container id="secret_shop">
      <Heading>{props.heading}</Heading>
      <ProductWrapper>
        {data.map((product, index) => {
          return (
            <Card key={index} className={classes.root}>
              <CardActionArea>
                <Link to={{ pathname: "/product", state: product }}>
                  <MyImg
                    src={product.img}
                    name={index}
                    title={product.alt}
                    alt={product.alt}
                  />
                </Link>
              </CardActionArea>
              <CardContent>
                <WhiteTextTypography
                  color="textSecondary"
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  {product.name}
                </WhiteTextTypography>
                <WhiteTextTypography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  {product.desc}
                </WhiteTextTypography>
              </CardContent>

              <div style={{ display: "grid", flexGrow: "1" }}>
                <CssChip variant="outlined" label={product.price}></CssChip>
              </div>
            </Card>
          );
        })}
      </ProductWrapper>
    </Container>
  );
}

export default ItemList;
