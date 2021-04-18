import React from 'react'
import styled from 'styled-components'
import BrandLogo from '../../components/BrandLogo'
import Button from '../../components/Button'
import { Marginer } from '../../components/Marginer'
import { deviceSize } from '../../constants/device.size'
import { IMAGES } from '../../constants/images'
import {useMediaQuery} from 'react-responsive'

const BottomContainer = styled.div`
	width: 100%;
	height: 32em;
	background-color: rgba(38, 70, 83, 0.8);
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	margin: 0;
	padding: 0;
`

const ContentContainer = styled.div`
	width: 100%;
	display: grid;
	place-items: center;
`
const SpecialistDescContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	@media (max-width: ${deviceSize.mobile}px){
		align-items:center;
	}
`
const SpecialistDesc = styled.h2`
	color: #fff;
	font-size: 30px;
	margin: 0;
	line-height: 1.4em;
	text-align: start;
	@media  (max-width: ${deviceSize.mobile}px){
		font-size:25px;
	}
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
	
	const isMobile = useMediaQuery({maxWidth: deviceSize.mobile})
	return (
		<BottomContainer>
			<SpecialistDescContainer>
				<BrandLogo logoSize={25} titleSize={24} />
				<SpecialistDesc>You're a Specialist, and you</SpecialistDesc>
				<SpecialistDesc>have and outstanding</SpecialistDesc>
				<SpecialistDesc>Service to offer?</SpecialistDesc>
				<Marginer direction='vertical' margin={20} />
				<Button>Join as Specialist</Button>
			</SpecialistDescContainer>

			{ !isMobile && <SpecialistImgContainer>
				<img src={IMAGES.FARMING} alt='specialist' />
			</SpecialistImgContainer>}
		</BottomContainer>
	)
}

export default BottomSection
