import React from 'react'
import styled from 'styled-components'
import { deviceSize } from '../../constants/device.size'

const PageWrapper = styled.div`
	width: 100%;
	min-height: 100%;
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
`

export function PageContainer(props) {
	return <PageWrapper>{props.children}</PageWrapper>
}

export const InnerPageContainer = styled.div`
	flex: 1;
	width: 100%;
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth + 'px' : '1170px')};
	min-height: 70vh;
	padding: .3em 1em;
	display: flex;
	flex-direction: column;
	align-items: center;
	
	@media  (max-width: ${deviceSize.mobile}px){
		padding: 0 .4em
	}
`
