import React from 'react'
import Resume from '../components/Resume';
import Skills from '../components/Skills';
import Title from '../components/Title';
import { MainLayout,InnerLayout } from '../styles/Layouts';

function ResumePage() {
    return (
        <MainLayout>
            <Skills/>
            <Resume/>
            
        </MainLayout>
    )
}

export default ResumePage;
