import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import ServiceCard from '../ServiceCard'

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
	justify-content: space-around;
`

function Service() {
	const [services, setServices] = useState([])

	useEffect(() => {
		const getServies = async () => {
			const response = await axios.get('http://localhost:9000/services')
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
		</ServicesContainer>
	)
}

export default Service
