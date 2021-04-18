import React from 'react'
import { useParams } from 'react-router'
import { AccountBox } from '../../components/AccountBox'
import Navbar from '../../components/Navbar'
import { InnerPageContainer, PageContainer } from '../../components/PageContainer'
import Footer from '../HomePage/Footer'

function CustomerAccessPage() {
    const {action} = useParams()
    return (
        <PageContainer>
            <Navbar bgColor='#264653'/>
            <InnerPageContainer>
                <AccountBox initialActive={action}/>
            </InnerPageContainer>
            <Footer />
        </PageContainer>
    )
}

export default CustomerAccessPage
