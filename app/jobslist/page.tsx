import { Card, CardContent, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { readJobs } from '../api/db';


export default async function JobsList() {
    const jobs = await readJobs()
    const jobsList = jobs.rows.map((job =>
        <Grid item xs={8} key={job.id}>
            <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Job Title:
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {job["job"]["Job Info"]["title"]}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        Company:
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {job["job"]["Job Info"]["company"]}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        Location:
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {job["job"]["Job Info"]["location"]}
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