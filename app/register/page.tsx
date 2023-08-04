import { Button, Link } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';


export default function Register() {
    return (
        <main>
            <h3>I am a:</h3>
            <Link href="/register/recruiter" underline="none">
                <Button variant="contained">Recruiter</Button>
            </Link>
            <Link href="/register/junior" underline="none">
                <Button variant="contained">Junior</Button>
            </Link>
            <Link href="jobslist" underline="none">
                <Button variant="contained" endIcon={<SendIcon />} >
                    Go to jobs list
                </Button>
            </Link>
        </main>
    )
}