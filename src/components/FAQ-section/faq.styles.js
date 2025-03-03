import styled from 'styled-components';
import {getGlobalForeground,getGlobalBackground,getBackgroundForNavAndFooter} from '../theme/colors'

export const Wrapper = styled.div`
width: 60%;
margin: auto;
div{
background-color: ${getGlobalBackground};
border-radius: 5px;
}
@media screen and (max-width: 800px) {
    width: 90%;
  }
  &:hover {
    cursor: pointer;
  }

  .faq {
    text-align: left;
    padding: 6px;
    background-color: transparent;
  }

  .faq-title {
    //margin:10px;
    padding: 5px;
    font-size: 20px;
    border: none;
    border-radius: 5px;
    background: ${getBackgroundForNavAndFooter};
    //outline: auto;
    width: 100%;
    text-align: left;
    color: ${getGlobalForeground};
    cursor: pointer;
    font-weight: bold;
    padding: 24px;
    padding-right: 72px;
    padding-left: 16px;
    position: relative;
    &:hover{
      filter: brightness(125%);
    }

    &::after {
      content: '';
      display: block;
      width: 10px;
      height: 10px;
      border-left: 2px solid ${getGlobalForeground};
      border-bottom: 2px solid ${getGlobalForeground};
      position: absolute;
      top: 34px;
      right: 36px;
      transform: rotate(-45deg);
      transition: transform 0.3s ease-in-out;
    }

    &.active {
      &::after {
        transform: rotate(135deg);
      }
    }
  }

  .faq-content {
    font-size: 18px;
    padding: 10px;
    line-height: 26px;
    color: ${getGlobalForeground};
    width: 100%;
    word-break: keep-all;
  }
`;