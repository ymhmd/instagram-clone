import React from "react";
import styled from "styled-components/native";

type ButtonStyleProps = {
  type?: string;
};

export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${(props: ButtonStyleProps) =>
    props.type === "primary" ? "green" : "#FFFFFF"};
  margin: 20px 20px 20px 20px;
  padding: 10px 10px 10px 10px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: ${(props: ButtonStyleProps) =>
    props.type === "primary" ? "#FFFFFF" : "gray"};
  text-align: center;
`;

type ButtonProps = {
  onClick: () => void;
  title: string;
};

export const PrimaryButton = ({ onClick, title }: ButtonProps) => (
  <ButtonContainer type={"primary"} onPress={onClick}>
    <ButtonText type={"primary"}>{title}</ButtonText>
  </ButtonContainer>
);

export const SecondaryButton = ({ onClick, title }: ButtonProps) => (
  <ButtonContainer type={"secondary"} onPress={onClick}>
    <ButtonText type={"secondary"}>{title}</ButtonText>
  </ButtonContainer>
);
