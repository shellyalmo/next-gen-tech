"use client";
export function fetchApply(params: { id: string }) {
  return () => {
    fetch("/api/job/apply", {
      method: "POST",
      body: JSON.stringify({ job_id: params.id }),
      headers: { "content-type": "application/json" },
    });
  };
}
