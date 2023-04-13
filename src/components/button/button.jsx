import styled from 'styled-components'

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  label {
    font-weight: bold;
  }
  button {
    background-color: ${(props) => props.theme.primary};
    cursor: pointer;
    font-weight: bold;
    border: 0;
    border-radius: 5px;
    padding: 10px;
  }
`

export default function Button() {
  return (
    <ButtonContainer>
      <label>Button label</label>
      <button>Button text</button>
    </ButtonContainer>
  )
}
