'use client'
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import SendIcon from '@mui/icons-material/Send';

const skills = [
    'React', 'Angular', 'Vue', 'CSS', 'HTML', 'Javascript', 'Typescript', 'MongoDB', 'Node.js']

export default function Recruiter() {

    return (
        <div>
            <h1>Enter job details:</h1>
            <form action="" autoComplete="off" className="flex flex-col space-y-4">
                <TextField id="job-title" label="Job Title" size="small" variant="outlined" />
                <TextField id="job-location" label="Job Location" size="small" variant="outlined" />
                <TextField id="job-description" label="Job Description" variant="outlined" />
                <Stack spacing={3} sx={{ width: 500 }}>
                    <Autocomplete
                        multiple
                        id="tags-standard"
                        options={skills}
                        getOptionLabel={(option) => option}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="standard"
                                label="Job Skills"
                                placeholder="Skills"
                            />
                        )}
                    />
                </Stack>
                <Button size="small" type="submit" variant="contained" endIcon={<SendIcon />}>
                    Submit
                </Button>
            </form>
        </div>
    )
}

