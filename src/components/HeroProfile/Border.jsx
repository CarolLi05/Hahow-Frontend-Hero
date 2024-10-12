import { styled } from "styled-components";

const BorderSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="186"
      height="55"
      viewBox="0 0 186 55"
    >
      <path
        d="M21.4 1L1 21.4V717h264.6l20.4-20.4V1H21.4z"
        mask="url(#border-line_svg__mask-2)"
      ></path>
    </svg>
  );
};

const BorderTop = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  left: 0;
  height: 55px;
  width: 100%;

  & span {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    fill: none;
    stroke: #c6a972;
    stroke-width: 3px;
  }
`;

const BorderBottom = styled.div`
  position: relative;
  display: block;
  bottom: 0;
  right: 0;
  height: 55px;
  width: 100%;

  & span {
    position: absolute;
    top: 0;
    right: 0;
    fill: none;
    stroke: #c6a972;
    stroke-width: 3px;
  }

  & span svg {
    height: 55px;
    transform: rotate(180deg);
  }
`;

export default function Border({ position }) {
  if (position === "top") {
    return (
      <BorderTop>
        <span><BorderSvg /></span>
      </BorderTop>
    );
  }

  if (position === "bottom") {
    return (
      <BorderBottom>
        <span><BorderSvg /></span>
      </BorderBottom>
    );
  }
}
