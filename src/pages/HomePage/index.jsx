import React from 'react'
import { Marginer } from '../../components/Marginer'
import Navbar from '../../components/Navbar'
import {
	InnerPageContainer,
	PageContainer,
} from '../../components/PageContainer'
import Services from '../../components/Services'
import BottomSection from './BottomSection'
import Footer from './Footer'
import TopSection from './TopSection'

function HomePage() {
	return (
		<PageContainer>
			<TopSection>
				<Navbar />
			</TopSection>
			<InnerPageContainer>
				<Services />
				<Marginer direction='vertical' margin={50} />
			</InnerPageContainer>
			<BottomSection />
			<Marginer direction='vertical' margin={70} />
			<Footer />
		</PageContainer>
	)
}
export default HomePage
