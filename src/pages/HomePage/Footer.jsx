import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import { Marginer } from '../../components/Marginer'
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Container = styled.div`
	width: 100%;
	min-height: 400px;
	border-top: 1px solid rgba(151, 151, 151, 0.7);
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 20px 50px;
`
const ContentContainer = styled.div`
	width: 100%;
	display: flex;
`

const TitleHeader = styled.h3`
	font-weight: bold;
	font-size: 15px;
	color: black;
`
const Link = styled.a`
	color: gray;
	line-height: 1.6em;
	font-weight: 400;
	cursor: pointer;
	transition: all 200ms ease-in-out;
	&:hover {
		color: black;
	}
`

const LinkContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`
const BottomContainer = styled.div`
	width: 100%;
	height: 70px;
	border-top: 0.6px solid #000000;
	display: flex;
	justify-content: space-between;
	padding: 0 20px;
	align-items: center;
`
const BottomLeftContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`
const BottomRightContainer = styled.div`
	display: flex;
	align-items: center;
	color: gray;
	width: 50px;
	justify-content: space-between;
`

function Footer() {
	return (
		<Container>
			<ContentContainer>
				<LinkContainer>
					<TitleHeader>Categories</TitleHeader>
					<Link>Car repairer</Link>
					<Link>Carpetry</Link>
					<Link>Cleaning</Link>
					<Link>Home Improvment</Link>
					<Link>Moving</Link>
					<Link>Landscaping</Link>
					<Link>Demotioning</Link>
					<Link>Others</Link>
				</LinkContainer>
				<Marginer direction='horizontal' margin={90} />
				<LinkContainer>
					<TitleHeader>Access</TitleHeader>
					<Link>Login</Link>
					<Link>Join Us</Link>
					<Link>Login as specialist</Link>
					<Link>Become a specialist</Link>
				</LinkContainer>
			</ContentContainer>
			<Marginer direction='vertical' margin={20} />
			<BottomContainer>
				<BottomLeftContainer>
					<h2 style={{ color: 'gray' }}>Servycing</h2>
					<Marginer direction='horizontal' margin={30} />
					<h4 style={{ color: '#cacaca', fontWeight: 500 }}>
						All Rights reserved 2020
					</h4>
				</BottomLeftContainer>
				<BottomRightContainer>
					<FontAwesomeIcon icon={faFacebook} size='md' />
					<FontAwesomeIcon icon={faTwitter} size='md' />
				</BottomRightContainer>
			</BottomContainer>
		</Container>
	)
}

export default Footer
