import React from 'react'
import styled from 'styled-components'
import { IMAGES } from '../../constants/images'

const BrandLogoContainer = styled.div`
	display: flex;
	align-items: center;
`
const Logo = styled.div`
	width: ${({ size }) => (size ? size + 'px' : '50px')};
	height: ${({ size }) => (size ? size + 'px' : '50px')};
	img {
		width: 100%;
		height: 100%;
	}
`

const Title = styled.h1`
	color: #fff;
	font-weight: 700;
	margin-left: 5px;
	font-size: ${({ size }) => (size ? size + 'px' : '45px')};
`

function BrandLogo({ titleSize, logoSize }) {
	return (
		<BrandLogoContainer>
			<Logo size={logoSize}>
				<img src={IMAGES.LOGO} alt='logo'></img>
			</Logo>
			<Title size={titleSize}>Servycing</Title>
		</BrandLogoContainer>
	)
}

export default BrandLogo
