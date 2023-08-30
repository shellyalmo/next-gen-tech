'use client'

import Form from '@rjsf/mui';
import { RJSFSchema } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';
import { redirect } from 'next/navigation';
import { useState } from 'react';

const schema: RJSFSchema = {
    "required": ["Job Info"],
    "properties": {
        "Job Info": {
            "type": "object",
            "properties": {
                "title": {
                    "type": "string",
                    "description": "e.g. Web Developer"
                },
                "company": {
                    "type": "string",
                    "description": "e.g. Facebook"
                },
                "location": {
                    "type": "string",
                    "description": "e.g. Tel Aviv, Israel"
                },
                "url": {
                    "type": "string",
                    "description": "Position's official link",
                    "format": "uri"
                },
                "job description": {
                    "type": "string",
                    "description": "Write a short paragraph about the position"
                }
            }
        },
        "skills": {
            "type": "array",
            "description": "List out the required professional skill-set for this position",
            "additionalItems": false,
            "items": {
                "type": "object",
                "additionalProperties": true,
                "properties": {
                    "name": {
                        "type": "string",
                        "description": "e.g. Web Development"
                    },
                    "level": {
                        "type": "string",
                        "description": "e.g. Master"
                    },
                    "keywords": {
                        "type": "array",
                        "description": "List some keywords pertaining to this skill",
                        "additionalItems": false,
                        "items": {
                            "type": "string",
                            "description": "e.g. HTML"
                        }
                    }
                }
            }
        }
    },
    "title": "Job Schema",
    "type": "object"
}

export default function JobForm(props: { jobFormData: any, jobId?: string }) {
    const jobFormData = props.jobFormData;
    const jobId = props.jobId;
    const [formData, setFormData] = useState(jobFormData);

    return (
        <div>
            <Form schema={schema} formData={formData} validator={validator} onSubmit={({ formData }) => {
                fetch('/api/job',
                    {
                        method: 'POST',
                        body: JSON.stringify({ formData, jobId }),
                        headers: { 'content-type': 'application/json' }
                    });
                redirect(`/job/${jobId}`)
            }} onChange={({ formData }) => { setFormData(formData) }} />
        </div>
    )

}

