import styled from 'styled-components';
import Link from 'next/link';

const primary_color = '#43425D';

const Plink = styled.div`
  margin: 15px;
  text-decoration: underline;
  color: ${primary_color};

  &:hover {
    color: 
  }
`

export const PageLink = props => {
  return (
    <Plink className={props.className}>
      <Link href={`/${props.href}`}>
        <a>
          {props.children}  
        </a>
      </Link>
    </Plink>
  )
}