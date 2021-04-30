import styled from "styled-components";
import { Link } from "react-scroll";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const Nav = styled.nav`
  background: #251f21;
  height: 120px;
  display: flex;
  justify-content: center;
  font-weight: 700;

  @media screen and (min-width: 400px) {
    height: 80px;
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 28px;
  right: 40px;
  cursor: pointer;
  color: #fff;

  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`;

export const CarShop = styled(AiOutlineShoppingCart)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;
