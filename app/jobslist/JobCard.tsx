"use client"

import { Card, CardContent, Typography, CardActions, Button, Link, Chip, List, ListItem, ListItemText } from '@mui/material';
import Grid from '@mui/material/Grid';
import { IJobSchema } from '../api/interfaces';

export default function JobCard({ job, showFullJob, jobId }: { job: IJobSchema, showFullJob: boolean, jobId: string }) {
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
                </Typography><List>
                        {skills?.map((skill) => <ListItem key={skill.name}>
                            <ListItemText primary={skill.name} />
                            {skill.keywords?.map(keyWord => <Chip label={keyWord} key={keyWord} variant="outlined" />)}
                        </ListItem>)}
                    </List></>}
            </CardContent>
            <CardActions>
                {!showFullJob && <Link href={`job/${jobId}`} underline="none">
                    <Button variant="contained">Job Details</Button>
                </Link>}
            </CardActions>
        </Card></Grid >;
}