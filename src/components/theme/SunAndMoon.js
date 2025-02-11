import styled from 'styled-components'
import React from 'react'
import theme from 'styled-theming'

const getDispleyLight = theme('mode', {
  light: 'none',
  dark: 'inline',
})

const getDispleyDark = theme('mode', {
  light: 'inline',
  dark: 'none',
})

const Button = () => {
  return (
    <StyledButton aria-label="Theme change">
      <StyledMoon viewBox="0 0 24 24">
        <path d="M12.3 22h-.1a10.31 10.31 0 0 1-7.34-3.15 10.46 10.46 0 0 1-.26-14 10.13 10.13 0 0 1 4-2.74 1 1 0 0 1 1.06.22 1 1 0 0 1 .24 1 8.4 8.4 0 0 0 1.94 8.81 8.47 8.47 0 0 0 8.83 1.94 1 1 0 0 1 1.27 1.29A10.16 10.16 0 0 1 19.6 19a10.28 10.28 0 0 1-7.3 3z"></path>
      </StyledMoon>

      <StyledSun viewBox="0 0 24 24">
        <path d="M12 6a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1zm9 5h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zM6 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1zm.22-7a1 1 0 0 0-1.39 1.47l1.44 1.39a1 1 0 0 0 .73.28 1 1 0 0 0 .72-.31 1 1 0 0 0 0-1.41zM17 8.14a1 1 0 0 0 .69-.28l1.44-1.39A1 1 0 0 0 17.78 5l-1.44 1.42a1 1 0 0 0 0 1.41 1 1 0 0 0 .66.31zM12 18a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1zm5.73-1.86a1 1 0 0 0-1.39 1.44L17.78 19a1 1 0 0 0 .69.28 1 1 0 0 0 .72-.3 1 1 0 0 0 0-1.42zm-11.46 0l-1.44 1.39a1 1 0 0 0 0 1.42 1 1 0 0 0 .72.3 1 1 0 0 0 .67-.25l1.44-1.39a1 1 0 0 0-1.39-1.44zM12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4z"></path>
      </StyledSun>
    </StyledButton>
  )
}
export default Button

const StyledButton = styled.button`
  background-color: transparent;
  height: 40px;
  margin: auto 2px;
  cursor: pointer;
  border: none;
`

const StyledMoon = styled.svg`
  width: 24px;
  height: 24px;
  fill: dark;
  display: ${getDispleyDark};
`
const StyledSun = styled.svg`
  width: 24px;
  height: 24px;
  fill: white;
  display: ${getDispleyLight};
`
