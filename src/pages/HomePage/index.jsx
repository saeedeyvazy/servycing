import React from 'react'
import styled from 'styled-components'
import Navbar from '../../components/Navbar'
import {
	InnerPageContainer,
	PageContainer,
} from '../../components/PageContainer'
import TopSection from './TopSection'
import { deviceSize } from '../../constants/device.size.js'
import Services from '../../components/Services'
import { Marginer } from '../../components/Marginer'

const ContentContainer = styled.div`
	width: 100%;
	max-width: ${deviceSize.laptop}px;
	display: flex;
	flex-direction: column;
	align-items: center;
`

function HomePage() {
	return (
		<PageContainer>
			<TopSection>
				<Navbar />
			</TopSection>
			<InnerPageContainer>
				{/* <ContentContainer> */}
				<Services />
				{/* </ContentContainer> */}
				<Marginer direction='vertical' margin={50} />
			</InnerPageContainer>
		</PageContainer>
	)
}
export default HomePage
