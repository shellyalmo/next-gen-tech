'use client'

import { Button } from "@mui/material";
import { redirect } from 'next/navigation'


export default function Register() {
    const goToJunior = () => {
        fetch('/api/junior', { method: 'POST' })

        redirect('/dashboard')
    }
    const goToRecruiter = () => {
        fetch('/api/recruiter', { method: 'POST' })

        redirect('/dashboard')


    }
    return (
        <main>
            <h3>I am a:</h3>
            <Button variant="contained" onClick={goToRecruiter}>Recruiter</Button>
            <Button variant="contained" onClick={goToJunior}>Junior</Button>
        </main>
    )
}