import React from 'react'
import styled from 'styled-components'

const JoinButton = styled.button`
	background-color: #2a9d8f;
	border: none;
	outline: none;
	padding: 10px 20px;
	color: #fff;
	font-weight: 500px;
	border-radius: 3px;
	cursor: pointer;
	font-size: 20px;
`

function Button({ children }) {
	return <JoinButton>{children}</JoinButton>
}

export default Button
