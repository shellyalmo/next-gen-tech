import Grid from '@mui/material/Grid';
import { readJobs } from '../api/db';
import JobCard from './JobCard';

export default async function JobsList() {
    const jobsQueryResults = await readJobs()
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <h1>List of all jobs</h1>
            <Grid container spacing={8}>
                {jobsQueryResults.rows.map((row =>
                    <JobCard job={row.job} key={row.job_id} showFullJob={false} />
                )
                )}
            </Grid>
        </main>
    )
}


