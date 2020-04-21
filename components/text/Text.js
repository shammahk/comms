import styled from 'styled-components';

const primary_color = '#43425D';
const light_color = '#4D4F5C99';

const Heading1 = styled.h1` 
  font-size: 28px;
  font-weight: 800;
  letter-spacing: 6px;
  color: ${props => props.primary ? primary_color : "inherit"};
`

const P = styled.p`
  font-size: 16px;
  color: ${light_color};
` 

export const H1 = (props) => {
  return (
    <Heading1 {...props} className={props.className}>
      {props.children}
    </Heading1>
  )
}

export const Paragraph = (props) => {
  return (
    <P {...props} className={props.className}>
      {props.children}
    </P>
  )
}

