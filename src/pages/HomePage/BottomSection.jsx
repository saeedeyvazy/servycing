import React from 'react'
import styled from 'styled-components'
import BrandLogo from '../../components/BrandLogo'
import Button from '../../components/Button'
import { Marginer } from '../../components/Marginer'
import { IMAGES } from '../../constants/images'

const BottomContainer = styled.div`
	width: 100%;
	height: 30em;
	background-color: rgba(38, 70, 83, 0.8);
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin: 0;
	padding: 0;
`

const SpecialistDescContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`
const SpecialistDesc = styled.h2`
	color: #fff;
	font-size: 30px;
	margin: 0;
`
const SpecialistImgContainer = styled.div`
	width: 35em;
	height: 30em;
	img {
		height: 100%;
		width: 100%;
	}
`
function BottomSection() {
	return (
		<BottomContainer>
			<SpecialistDescContainer>
				<BrandLogo />
				<SpecialistDesc>You're a Specialist, and you</SpecialistDesc>
				<SpecialistDesc>have and outstanding</SpecialistDesc>
				<SpecialistDesc>Service to offer?</SpecialistDesc>
				<Marginer direction='vertical' margin={20} />
				<Button>Join as Specialist</Button>
			</SpecialistDescContainer>
			<SpecialistImgContainer>
				<img src={IMAGES.FARMING} alt='specialist' />
			</SpecialistImgContainer>
		</BottomContainer>
	)
}

export default BottomSection
