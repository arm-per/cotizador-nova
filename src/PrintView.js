import {createGlobalStyle} from "styled-components";

export const PrintView = createGlobalStyle`
  @media print{
    #app > header, .noprint {
      display: none;
    }
    #app > header ~ div{
      display: none;
    }
    #app > #view, #app .printview{
      display: block;
    }
    body{
      background-color: white;
    }
  }
`
