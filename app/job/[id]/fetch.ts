"use client";

export function fetchApply() {
  const jobIdFromUrl = globalThis.location.pathname.replace("/job/", "");

  fetch("/api/job/apply", {
    method: "POST",
    body: JSON.stringify({ job_id: jobIdFromUrl }),
    headers: { "content-type": "application/json" },
  });
}
