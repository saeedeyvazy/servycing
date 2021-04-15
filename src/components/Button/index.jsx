import React from 'react'
import styled from 'styled-components'

const CustomButton = styled.button`
	background-color: #2a9d8f;
	border: none;
	outline: none;
	padding: 10px 20px;
	color: #fff;
	font-weight: 500px;
	border-radius: 3px;
	cursor: pointer;
	font-size: 18px;
	transition: all 200ms ease-in-out;
	&:hover {
		background-color: #248b7f;
	}
`

function Button({ children }) {
	return <CustomButton>{children}</CustomButton>
}

export default Button
