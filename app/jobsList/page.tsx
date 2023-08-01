import { Card, CardContent, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';


const jobs = [
    {
        'job title': 'junior frontend',
        'location': 'Tel Aviv',
        'job description': 'We are seeking a passionate and motivated Junior Frontend Developer to join our team. As a Junior Frontend Developer, you will collaborate with our experienced developers to design and implement user interfaces for web applications. Your responsibilities will include writing clean and efficient HTML, CSS, and JavaScript code, assisting in debugging and testing, and staying up-to-date with the latest frontend trends and technologies. This is an excellent opportunity for a talented individual looking to grow their skills and contribute to exciting projects in a supportive and dynamic environment.',

    },
    {
        'job title': 'junior backend',
        'location': 'Tel Aviv',
        'job description': 'We are seeking a passionate and motivated Junior backend Developer to join our team. As a Junior backend Developer, you will collaborate with our experienced developers to design and implement user interfaces for web applications. Your responsibilities will include writing clean and efficient HTML, CSS, and JavaScript code, assisting in debugging and testing, and staying up-to-date with the latest backend trends and technologies. This is an excellent opportunity for a talented individual looking to grow their skills and contribute to exciting projects in a supportive and dynamic environment.',

    },
    {
        'job title': 'junior fullstack',
        'location': 'Tel Aviv',
        'job description': 'We are seeking a passionate and motivated Junior fullstack Developer to join our team. As a Junior fullstack Developer, you will collaborate with our experienced developers to design and implement user interfaces for web applications. Your responsibilities will include writing clean and efficient HTML, CSS, and JavaScript code, assisting in debugging and testing, and staying up-to-date with the latest fullstack trends and technologies. This is an excellent opportunity for a talented individual looking to grow their skills and contribute to exciting projects in a supportive and dynamic environment.',

    }
]

export default function Home() {
    const jobsList = jobs.map((job =>
        <Grid item xs={8}>
            <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Job Title:
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {job["job title"]}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        Job Location:
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {job["location"]}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        Job Description:
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {job["job description"]}
                    </Typography>
                </CardContent>
            </Card></Grid>
    )
    )
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <h1>List of all jobs</h1>
            <Grid container spacing={8}>

                {jobsList}

            </Grid>
        </main>
    )
}