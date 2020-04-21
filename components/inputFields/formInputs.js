import { useState, useRef, useImperativeHandle } from "react";
import styled, {css} from 'styled-components';
import { withProp } from "../helpers";


const Styledinput = styled.div`
  height: 50px;
  position: relative;
  margin-top: 0px;
  margin-bottom: 20px;

  input {
    width: 100%;
    height: 100%;
    outline: none;
    color: #43425D;
    font-size: 16px;
    line-height: 100px; 
    padding: 15px 10px 0;
    transition: all 0.3s ease-out;
    border-bottom: solid 2px #E9E9F0;
  }

  label {
    top: 20px;
    left: 10px;
    color: #43425D;
    position: absolute;
    transition: all 0.3s ease-out;
  }

  ${withProp("focused")(css`
    input {
      border-bottom: solid 2px #A3A0FB;
    }

    label {
      font-size: 0.9rem;
      padding: 0 0.5rem;
      top: -5px;
      left: -10px;
    }
  `)} 
`

export const Input = React.forwardRef((props, ref) => {
  const [focus, setfocus] = useState(false)

  const handleClick = ({ target }) => {
    target.focus();
    setfocus(true);
  }

  const handleBlur = ({ target }) => {
    const isEmpty = target.value == ""
    setfocus(!isEmpty)
  }

  return (
    <Styledinput focused={focus} {...props} className={props.className}>
      <label htmlFor={props.name}>
        {props.label}
      </label>
      <input 
        type={props.type}
        ref={ref}
        id={props.name} 
        name={props.name}
        onClick={handleClick}
        onFocus={handleClick}
        onBlur={handleBlur}
        // onChange={props.onChange}
      />
    </Styledinput>
  )
});

const checkBox = styled.div`
  input[type="checkbox"] {
    outline: 
  }
`