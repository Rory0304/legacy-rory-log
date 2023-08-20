import { css } from "@emotion/react";

export const resetStyles = css`
  :root {
    --sticky-header-height: 68.5px;
  }

  body {
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  body > header {
    backdrop-filter: saturate(180%) blur(5px);
    transition: linear 0.2s;
  }

  body[data-theme="dark"] {
    background-color: rgb(23 23 23/1);
    color: #fff;

    > header {
      background-color: rgba(0, 0, 0, 0.5);
      box-shadow: inset 0 -1px 0 0 hsla(0, 0%, 100%, 0.1);
    }
  }

  body[data-theme="light"] {
    background-color: #fff;
    color: #000;

    > header {
      background-color: hsla(0, 0%, 100%, 0.8);
      box-shadow: inset 0 -1px 0 0 #eaeaea;
    }
  }
`;
