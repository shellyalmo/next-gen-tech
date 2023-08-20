import { readJob } from "@/app/api/db"
import JobCard from "@/app/jobslist/JobCard"
import { auth } from "@clerk/nextjs";
import { readUserType } from "../../api/db";
import { Button } from "@mui/material";
import { fetchApply } from "./fetch";

export default async function Job({ params }: { params: { id: string } }) {
    const jobDetails = await readJob(params.id)

    const { userId } = auth();
    let userType = null
    if (userId) {
        userType = await readUserType(userId)
    }


    return <div>Job Details:
        <JobCard job={jobDetails.rows[0].job} showFullJob={true} />
        {userType === "junior" && <div className="flex flex-row">
            <Button variant="contained" onClick={fetchApply}>Apply to job</Button>
        </div>}
    </div>
}


