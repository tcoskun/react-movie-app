import styled from 'styled-components';
import { ButtonProps, HrProps } from '../types'

export const Image = styled.img``;

export const Div = styled.div``;

export const Button = styled.button<{ fontSize?: number }>`
  background-color: #54098e;
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 1px 1px 1px grey;
  transition: ease background-color 250ms;
  margin-top: 2rem;
  font-size: ${ (props: ButtonProps) => props.fontSize ?? '20'}px;
  &:hover {
    background-color: #7b1dc3;
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

export const Hr = styled.hr<{ margin: number }>`
  border-color: #3c303c;
  margin-top: ${ (props: HrProps) => props.margin}rem;
  margin-bottom: ${ (props: HrProps) => props.margin}rem;
`;

export const H2 = styled.h2``;

export const H3 = styled.h3``;

export const Span = styled.span``;

export const Header = styled.header``;

export const Footer = styled.footer``;

export const Nav = styled.nav``;

export const Select = styled.select`
  float: right;
  font-size: 18px;
  margin-top: 25px;
`;

export const Option = styled.option`
  font-size: 18px;
`;