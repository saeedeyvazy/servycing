import React from 'react'
import styled from 'styled-components'
import { IMAGES } from '../../constants/images'

const BrandLogoContainer = styled.div`
	display: flex;
	align-items: center;
	img {
		width: 50px;
		height: 50px;
	}
`

const Title = styled.h1`
	color: #fff;
	font-weight: 700;
	margin-left: 5px;
	font-size: 45px;
`

function BrandLogo() {
	return (
		<BrandLogoContainer>
			<img src={IMAGES.LOGO} alt='logo'></img>
			<Title>Servycing</Title>
		</BrandLogoContainer>
	)
}

export default BrandLogo
