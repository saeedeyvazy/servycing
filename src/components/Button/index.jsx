import React from 'react'
import styled from 'styled-components'

const CustomButton = styled.button`
	background-color: #2a9d8f;
	border: none;
	outline: none;
	padding: 10px 20px;
	color: #fff;
	font-weight: 500;
	border-radius: 3px;
	cursor: pointer;
	font-size: ${({ fontSize }) => (fontSize ? fontSize + 'px' : '18px')};
	transition: all 200ms ease-in-out;
	&:hover {
		background-color: #248b7f;
	}
	&:focus {
		outline: none;
	}
`

function Button({ children, fontSize }) {
	return <CustomButton fontSize={fontSize}>{children}</CustomButton>
}

export default Button
