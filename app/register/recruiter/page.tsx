'use client'
// import Autocomplete from "@mui/material/Autocomplete";
// import Button from "@mui/material/Button";
// import Stack from "@mui/material/Stack";
// import TextField from "@mui/material/TextField";
// import SendIcon from '@mui/icons-material/Send';

import Form from '@rjsf/mui';
import { RJSFSchema } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv6';

const schema: RJSFSchema = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "additionalProperties": false,
    "definitions": {
        "iso8601": {
            "type": "string",
            "description": "Similar to the standard date type, but each section after the year is optional. e.g. 2014-06-29 or 2023-04",
            "pattern": "^([1-2][0-9]{3}-[0-1][0-9]-[0-3][0-9]|[1-2][0-9]{3}-[0-1][0-9]|[1-2][0-9]{3})$"
        }
    },
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
export default function Recruiter() {

    return (
        <div>
            <Form schema={schema} validator={validator} />
        </div>
    )
}

