import React from 'react'
import styled from 'styled-components'
import BrandLogo from '../BrandLogo'
import Button from '../Button'
import { Marginer } from '../Marginer'
import {Link} from 'react-router-dom'

const NavContainer = styled.div`
	width: 100%;
	height: 65px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 15px;
	background-color:${({bgColor}) => bgColor ? bgColor : 'transparent' };
`
const NavRightContainer = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`
const AnchorLink = styled.a`
	background: transparent;
	color: #fff;
	cursor: pointer;
	font-size: 13px;
	border: none;
	/* border-right: ${({ hasBorder }) =>
		hasBorder ? '1px solid #fff' : 'none'}; */
	transition: all 200ms ease-in-out;
	&:hover {
		filter: contrast(0.8);
	}
`

const Separator = styled.div`
	background-color: #fff;
	width: 1px;
	height: 45%;
`

const StyledLink = styled(Link)`
	text-decoration:none;
`


function Navbar({bgColor}) {
	return (
		<NavContainer bgColor={bgColor}>
			<StyledLink to='/'>
				<BrandLogo logoSize={25} titleSize={25} />
			</StyledLink>
			<NavRightContainer>
				<AnchorLink hasBorder>Specialist Portal</AnchorLink>
				<Marginer direction='horizontal' margin={10} />
				<Separator />
				<Marginer direction='horizontal' margin={10} />
				<Link to='/customer/access/signup'>
					<Button fontSize={12}>Register</Button>
				</Link>
				<Marginer direction='horizontal' margin={8} />
				<Link to='/customer/access/signin'>
					<AnchorLink>Login</AnchorLink>
				</Link>
			</NavRightContainer>
		</NavContainer>
	)
}

export default Navbar
