import React from 'react'
import styled from 'styled-components'
import { IMAGES } from '../../constants/images'

const TopSectionContainer = styled.div`
	width: 100%;
	height: 800px;
	background-image: url(${IMAGES.LANDING});
	object-fit: contain;
	background-position: 0px -110px;
	background-size: cover;
`

const BackgroundFilter = styled.div`
	width: 100%;
	height: 100%;
	background-color: rgba(38, 70, 83, 0.8);
`

function TopSection() {
	return (
		<TopSectionContainer>
			<BackgroundFilter />
		</TopSectionContainer>
	)
}

export default TopSection
