import styled from 'styled-components';

export const Layout = styled.section`
  min-height: 100vh;
  background: #ffffff;
`
 
export const FormLayout = styled(Layout)`
  display: grid;
  grid-template-columns: 0.8fr 1fr;
  grid-auto-flow: row;
`