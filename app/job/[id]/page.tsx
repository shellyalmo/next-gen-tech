import { readJob } from "@/app/api/db"
import JobCard from "@/app/jobslist/JobCard"

export default async function Job({ params }: { params: { id: string } }) {
    const jobDetails = await readJob(params.id)
    return <div>Job Details:
        <JobCard job={jobDetails.rows[0].job} showFullJob={true} />
    </div>
}