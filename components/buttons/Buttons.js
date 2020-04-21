import styled from 'styled-components';
import Link from 'next/link';

const primary_color = '#43425D';

const Button = styled.button`
  padding: 10px 40px;
  margin : 15px ;
  border-radius: 5px;
`
const ButtonPrimary = styled(Button)`
  background:  ${primary_color};
  border: solid 1px ${primary_color};
  color: #ffffff;
  transition: 0.3s ease-out;

  &:hover {
    background: #43425Dcc;
    border: solid 1px #43425Dcc;
  }
`

const ButtonPlain = styled(Button)`
  background:  #fffff;
  border: solid 1px ${primary_color};
  color: ${primary_color};
  transition: 0.3s ease-out;

  &:hover {
    background: #dddddd;
  }
`

export const FormButtons = (props) => {
  return (
    <>
      {
        props.primary ? (
        <ButtonPrimary type={props.type}> 
          {props.children}
        </ButtonPrimary>
        ) : (
          <ButtonPlain type={props.type}> 
          {props.children}
        </ButtonPlain>
        )
      }
    </>
  )
}

export const LinkButtons = props => {
  return (
    <>
      {
        props.primary ? (
        <ButtonPrimary type={props.type}> 
          <Link href={`/${props.href}`}>
            <a>
              {props.children}  
            </a>
          </Link>
        </ButtonPrimary>
        ) : (
          <ButtonPlain type={props.type}> 
          <Link href={`/${props.href}`}>
            <a>
              {props.children}  
            </a>
          </Link>
        </ButtonPlain>
        )
      }
    </>
  )
}