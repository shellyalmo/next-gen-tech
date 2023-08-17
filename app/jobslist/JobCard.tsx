"use client"

import { Card, CardContent, Typography, CardActions, Button, Link } from '@mui/material';
import Grid from '@mui/material/Grid';
import { IJobSchema } from '../api/interfaces';

export default function JobCard({ job, showFullJob }: { job: IJobSchema, showFullJob: boolean }) {
    const skills = job["skills"]
    return <Grid item xs={8}>
        <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Job Title:
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {job["Job Info"]?.title}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    Company:
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {job["Job Info"]?.company}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    Location:
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {job["Job Info"]?.location}
                </Typography>
                {showFullJob && <>
                    <Typography gutterBottom variant="h5" component="div">
                        Url:
                    </Typography><Typography variant="body2" color="text.secondary">
                        {job["Job Info"]?.url}
                    </Typography><Typography gutterBottom variant="h5" component="div">
                        Description:
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {job["Job Info"]["job description"]}
                    </Typography>
                </>}
                {showFullJob && <><Typography gutterBottom variant="h5" component="div">
                    Skills:
                </Typography><Typography variant="body2" color="text.secondary">
                        {skills?.map((skill) => skill.name)}
                    </Typography></>}
            </CardContent>
            <CardActions>
                {!showFullJob && <Link href={`job/${job.job_id}`} underline="none">
                    <Button variant="contained">Job Details</Button>
                </Link>}
            </CardActions>
        </Card></Grid >;
}