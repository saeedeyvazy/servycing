import React from 'react'
import styled from 'styled-components'
import BrandLogo from '../../components/BrandLogo'
import Button from '../../components/Button'
import { Marginer } from '../../components/Marginer'
import { IMAGES } from '../../constants/images'
import { useMediaQuery } from 'react-responsive'
import {deviceSize}from '../../constants/device.size'
const TopSectionContainer = styled.div`
	width: 100%;
	height: 720px;
	background-image: url(${IMAGES.LANDING});
	object-fit: contain;
	background-position: 0px -110px;
	background-size: cover;
	background-repeat: no-repeat;
	@media screen and (max-width : ${deviceSize.mobile}px){ 
		background-position: 0px 0px;
	}
`

const BackgroundFilter = styled.div`
	width: 100%;
	height: 100%;
	background-color: rgba(38, 70, 83, 0.8);
	display: flex;
	flex-direction: column;
`
const TopSectionInnerContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
	
`

const StandoutImage = styled.div`
	width: 35em;
	height: 30em;
	img {
		width: 100%;
		height: 100%;
	}
`
const LogoContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	h3 {
		color: #fff;
		font-weight: 500;
		font-size: 35px;
		margin: 5px;
		text-align: start;
	}
	@media screen and (max-width : ${deviceSize.mobile}px){
		align-items:center;
		h3{
			text-align: center
		}		
	}
`

function TopSection({ children }) {

	const isMobile = useMediaQuery({maxWidth: deviceSize.mobile})

	return (
		<TopSectionContainer>
			<BackgroundFilter>
				{children}
				<TopSectionInnerContainer>
					<LogoContainer>
						<BrandLogo logoSize={isMobile ? 25 : undefined} titleSize={isMobile ? 25 : undefined}/>
						<Marginer direction='vertical' margin={8} />

						<h3>Find the right specialist</h3>
						<h3>For the right job</h3>

						<Marginer direction='vertical' margin={15} />
						<Button>Join Now</Button>
					</LogoContainer>
					{!isMobile &&
						<StandoutImage>
							<img src={IMAGES.WORK} alt='best work'></img>
						</StandoutImage>
					}
				</TopSectionInnerContainer>
			</BackgroundFilter>
		</TopSectionContainer>
	)
}

export default TopSection
