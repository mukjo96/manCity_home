import React from "react";
import styled, { css } from "styled-components";

type ButtonProps = {
    value: string;
    size: "large" | "medium" | "small";
    onClick?: React.MouseEventHandler;
};

const MoreButton = ({ value, size = "medium", onClick }: ButtonProps) => {
    return (
        <Button size={size} onClick={onClick}>
            <span>{value}</span>
            <span>+</span>
        </Button>
    );
};

export default MoreButton;

const Button = styled.button<{ size: string }>`
    color: white;
    background: #1c2c5b;
    border: none;
    ${(props) =>
        props.size === "large"
            ? css`
                  width: 112px;
                  min-width: 70px;
                  max-width: 110px;
                  span {
                      font-size: 11px;
                  }
                  @media screen and (max-width: 768px) {
                      width: 30vw;
                  }
              `
            : css`
                  width: 88px;
                  min-width: 70px;
                  max-width: 90px;
                  span {
                      font-size: 10px;
                  }
              `}

    padding: 5px 10px;
    display: flex;
    justify-content: space-between;
    margin-top: 12px;
    cursor: pointer;
`;
