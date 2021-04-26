import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import ServiceCard from '../ServiceCard'
import { Marginer } from '../Marginer'
import Button from '../Button'

const ServicesContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`

const Title = styled.h1`
	font-weight: 900;
	color: #000;
`

const ServiceWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`

const ViewMoreContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;
`

const ViewMoreButton = styled(Button)`
	background-color: #f2f2f2;
	color: #959595;
	box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
	font-size: 14px;
	&:hover {
		background-color: #cacaca;
		filter: contrast(0.8);
	}
`

function Service() {
	const [services, setServices] = useState([])

	useEffect(() => {
		const getServies = async () => {
			const response = await axios.get('https://my-json-server.typicode.com/saeedeyvazy/servycing-api/services')
			setServices(response.data)
		}
		getServies()
	}, [])

	return (
		<ServicesContainer>
			<Title>Most used services & More</Title>
			<ServiceWrapper>
				{services.length &&
					services.map((service, idx) => (
						<ServiceCard key={idx} {...service} />
					))}
			</ServiceWrapper>
			<Marginer direcion='vertical' margin={30} />
			<ViewMoreContainer>
				<ViewMoreButton>View More</ViewMoreButton>
			</ViewMoreContainer>
		</ServicesContainer>
	)
}

export default Service
