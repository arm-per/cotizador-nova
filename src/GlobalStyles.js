import { createGlobalStyle } from 'styled-components';
import { colors } from "./UIelements";


const GlobalStyles = createGlobalStyle`
  body {
    background-color: #F4f4f6;
    margin: 0;
    font-family: sans-serif;
  }
  
  .container{
    width: 100%;
    max-width: 1200px;
    margin-inline: auto;
  }
  
  .card-buttons{
    display: flex;
    gap: 8px;
    padding: 10px;
  }
  
  .cards-layout{
    display: grid;
    gap: 8px;
    padding-inline: 15px;
    margin-block: 20px;
    p.nostudies{
      grid-column: 1/5;
      text-align: center;
    }
    
  }
  
  .printview{
    display: none;
  }
  
  .welcome{
    color: ${colors.blue["500"]}
  }
  
  .nameTitle{
    color: ${colors.blue["500"]};
    marginInline: 21px;
  }
  #maintable{
    width: 100%;
    max-width: 100%;
    margin-top: 40px;
    box-sizing: border-box;
    td{
      padding: 10px;
    }
    thead{
      background-color: ${colors.blue["400"]};
      color: white;
      th{
        border-collapse: collapse;
        border: 0;
        padding: 8px;
        &:nth-child(1){
          width: 30%;
          hyphens: auto;
          hyphenate-character: auto;
        }
        &:nth-child(2){
          width: 50%;
        }
      }
    }
    tbody{
      tr:nth-child(odd){
        background-color: ${colors.blue["100"]}
      }
      tr:last-child{
        background-color: transparent;
        font-weight: bold;
        font-size: 120%
      }
      td{
        padding-block: 20px;
        &:nth-child(3){
          text-align: center;
        }
      }
    }
  }
  
  @media (min-width: 620px){
    .cards-layout{
      grid-template-columns: repeat(2,1fr);
      gap: 10px;
      padding-inline: 0;
      
    }
  }
  
  @media (min-width: 1024px){
    .cards-layout{
      grid-template-columns: repeat(4, 1fr);
      gap: 12px;
    }
  }
`

export default GlobalStyles;
