import styled from 'styled-components'

const StyledTitle = styled.h1`
  color: ${(props) => props.theme.primary};
`
export default function Title(props) {
  return <StyledTitle onClick={props.onClick}>{props.children}</StyledTitle>
}
