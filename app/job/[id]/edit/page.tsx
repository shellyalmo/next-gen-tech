import { readJob } from "@/app/api/db";
import JobForm from "@/app/create/job/page";

export default async function EditJob({ params }: { params: { id: string } }) {
    const jobDetails = await readJob(params.id)
    return (
        <div>
            <JobForm jobFormData={jobDetails.rows[0].job} jobId={params.id}></JobForm>
        </div>
    )
}