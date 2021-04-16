import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 300px;
	min-height: 250px;
	overflow: hidden;
	margin: 0.5em;
	margin-bottom: 1.3em;
	box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
`

const TopContainer = styled.div`
	width: 100%;
`

const ServiceThumbnail = styled.div`
	width: 100%;
	height: 11em;
	img {
		width: 100%;
		height: 100%;
	}
`

const ContentContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 15px 10px;
`

const BottomContainer = styled.div`
	width: 100%;
	height: 35px;
	display: flex;
	justify-content: space-between;
	border-top: 1px solid rgba(15, 15, 15, 0.17);
	padding: 0 10px;
`
const Title = styled.h2`
	font-size: 19px;
	margin: 0;
	font-weight: 500;
	color: #000;
	text-align: start;
`

const SpecialistName = styled.h4`
	font-size: 12px;
	color: rgba(151, 151, 151, 1);
	font-weight: 400;
	font-size: 12px;
`

const RatingContainer = styled.div`
	display: flex;
	color: #ebe204;
	align-items: center;
`

const PriceContainer = styled.div`
	display: flex;
	align-items: center;
`
const StartingAtText = styled.div`
	color: rgba(161, 161, 161, 0.7);
	font-weight: 400;
`
const PriceText = styled.div`
	margin-left: 3px;
	color: #2a9def;
	font-weight: 500;
`

function ServiceCard(props) {
	const {
		url,
		title,
		id,
		rate,
		rating,
		specialist: { fullName },
	} = props
	return (
		<CardContainer>
			<TopContainer>
				<ServiceThumbnail>
					<img src={url} alt={title} />
				</ServiceThumbnail>
			</TopContainer>
			<ContentContainer>
				<Title>{title}</Title>
				<SpecialistName>{fullName}</SpecialistName>
			</ContentContainer>
			<BottomContainer>
				<RatingContainer>
					<FontAwesomeIcon icon={faStar} size='sm'></FontAwesomeIcon>
					{rate}
				</RatingContainer>
				<PriceContainer>
					<StartingAtText>Starting At Text</StartingAtText>
					<PriceText>${rating}/hr</PriceText>
				</PriceContainer>
			</BottomContainer>
		</CardContainer>
	)
}

export default ServiceCard
