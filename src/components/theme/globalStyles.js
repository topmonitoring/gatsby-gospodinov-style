import { createGlobalStyle } from 'styled-components'
import theme from 'styled-theming'

const white = '#fff'
const dark = '#000'
const lightblue = 'aqua'
const darkblue = 'blue'
const blueIsh = 'rgb(144, 186, 245)'
const darkenBluIsh = 'rgb(129, 164, 214)'
const greyIsh = 'rgba(0, 0, 0, 0.47)'
const whiteIsh = 'rgb( 134, 135, 138)'
const lightWhite = '#F9F7F7'
const lightBlack = '#2d3436'
const darkDark = '#3B4252'
const lighterWhite = '#E5E9F0'
const brandPurple = '#6363f1'
const brandBlue = '#669bbc'
const brandDarkBlue = '#7480e7'

export const Colors = {
  white,
  dark,
  lightblue,
  darkblue,
  greyIsh,
  whiteIsh,
  lightWhite,
  lightBlack,
  darkDark,
  lighterWhite,
  blueIsh,
  darkenBluIsh,
  brandPurple,
  brandBlue,
  brandDarkBlue
}

const getGlobalBackground = theme('mode', {
  light: `#DBE2EF`,
  dark: `#101217`,
})

const getGlobalForeground = theme('mode', {
  light: Colors.dark,
  dark: Colors.white,
})

export const GlobalStyles = createGlobalStyle`

body {
  background-color: ${getGlobalBackground};
  //background-image: linear-gradient(to bottom right, ${getGlobalBackground}, ${brandBlue});
  //background-image: radial-gradient(#304463,${getGlobalBackground});
  color: ${getGlobalForeground};
  font-size: 0.9em;
  font-family: "Open Sans", sans-serif;
  margin: 0px;

  
}

h1{
  
}

a {
  color: currentColor;
}
p{
  margin:0px;
}
`
