import styled from 'styled-components';
import { H1 } from '../text/Text';

const Flayout = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`

const CopyRight = styled.div`
  position: absolute;
  bottom: 20px;
  color: #43425D;
  font-size: 0.8rem;
`

const Layout = (props) => {



  return (
    <Flayout className="w-3/6 mx-auto">
      <H1 primary className="text-center mb-2">
        COMMS
      </H1>
      {props.children}
      <CopyRight className="text-center">
        &copy; 2020 COMMS, <br />
        Developed by shammahk1@gmail.com
      </CopyRight>
    </Flayout>
  )
}

export default Layout;