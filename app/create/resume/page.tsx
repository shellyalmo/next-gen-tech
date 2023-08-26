'use client'

import { Button } from '@mui/material';
import Form from '@rjsf/mui';
import { RJSFSchema } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';

import { useEffect, useState } from 'react';

const schema: RJSFSchema = {

    "definitions": {
        "iso8601": {
            "type": "string",
            "description": "Similar to the standard date type, but each section after the year is optional. e.g. 2014-06-29 or 2023-04",
            "pattern": "^([1-2][0-9]{3}-[0-1][0-9]-[0-3][0-9]|[1-2][0-9]{3}-[0-1][0-9]|[1-2][0-9]{3})$"
        }
    },
    "properties": {
        "candidate Info": {
            "type": "object",
            "additionalProperties": true,
            "properties": {
                "name": {
                    "type": "string"
                },
                "title": {
                    "type": "string",
                    "description": "e.g. Web Developer"
                },
                "phone": {
                    "type": "string",
                    "description": "Phone numbers are stored as strings so use any format you like, e.g. 712-117-2923"
                },
                "profiles": {
                    "type": "array",
                    "description": "Specify any number of social networks that you participate in",
                    "additionalItems": false,
                    "items": {
                        "type": "object",
                        "additionalProperties": true,
                        "properties": {
                            "network": {
                                "type": "string",
                                "description": "e.g. Github"
                            },
                            "username": {
                                "type": "string",
                                "description": "e.g. neutralthoughts"
                            },
                            "url": {
                                "type": "string",
                                "description": "e.g. http://github.example.com/neutralthoughts",
                                "format": "uri"
                            }
                        }
                    }
                }
            }
        },
        "work": {
            "type": "array",
            "additionalItems": false,
            "items": {
                "type": "object",
                "additionalProperties": true,
                "properties": {
                    "name": {
                        "type": "string",
                        "description": "e.g. Facebook"
                    },
                    "position": {
                        "type": "string",
                        "description": "e.g. Software Engineer"
                    },
                    "startDate": {
                        "$ref": "#/definitions/iso8601"
                    },
                    "endDate": {
                        "$ref": "#/definitions/iso8601"
                    },
                    "summary": {
                        "type": "string",
                        "description": "Give an overview of your responsibilities at the company"
                    },
                    "highlights": {
                        "type": "array",
                        "description": "Specify multiple accomplishments",
                        "additionalItems": false,
                        "items": {
                            "type": "string",
                            "description": "e.g. Increased profits by 20% from 2011-2012 through viral advertising"
                        }
                    }
                }
            }
        },
        "education": {
            "type": "array",
            "additionalItems": false,
            "items": {
                "type": "object",
                "additionalProperties": true,
                "properties": {
                    "institution": {
                        "type": "string",
                        "description": "e.g. Massachusetts Institute of Technology"
                    },
                    "area": {
                        "type": "string",
                        "description": "e.g. Arts"
                    },
                    "studyType": {
                        "type": "string",
                        "description": "e.g. Bachelor"
                    },
                    "startDate": {
                        "$ref": "#/definitions/iso8601"
                    },
                    "endDate": {
                        "$ref": "#/definitions/iso8601"
                    },
                    "score": {
                        "type": "string",
                        "description": "grade point average, e.g. 3.67/4.0"
                    },
                    "courses": {
                        "type": "array",
                        "description": "List notable courses/subjects",
                        "additionalItems": false,
                        "items": {
                            "type": "string",
                            "description": "e.g. H1302 - Introduction to American history"
                        }
                    }
                }
            }
        },
        "skills": {
            "type": "array",
            "description": "List out your professional skill-set",
            "additionalItems": false,
            "items": {
                "type": "object",
                "additionalProperties": true,
                "properties": {
                    "name": {
                        "type": "string",
                        "description": "e.g. Web Development"
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
        },
        "projects": {
            "type": "array",
            "description": "Specify career projects",
            "additionalItems": false,
            "items": {
                "type": "object",
                "additionalProperties": true,
                "properties": {
                    "name": {
                        "type": "string",
                        "description": "e.g. Twitter App Clone"
                    },
                    "description": {
                        "type": "string",
                        "description": "Frontend and Backend for Twitter"
                    },
                    "highlights": {
                        "type": "array",
                        "description": "Specify multiple features",
                        "additionalItems": false,
                        "items": {
                            "type": "string",
                            "description": "e.g. has algorithmic feed"
                        }
                    },
                    "keywords": {
                        "type": "array",
                        "description": "Specify special elements involved",
                        "additionalItems": false,
                        "items": {
                            "type": "string",
                            "description": "e.g. AngularJS"
                        }
                    },
                    "url": {
                        "type": "string",
                        "format": "uri",
                        "description": "e.g. http://www.mytwitter.com"
                    }
                }
            }
        },
        "volunteer": {
            "type": "array",
            "additionalItems": false,
            "items": {
                "type": "object",
                "additionalProperties": true,
                "properties": {
                    "organization": {
                        "type": "string",
                        "description": "e.g. shecodes"
                    },
                    "position": {
                        "type": "string",
                        "description": "e.g. branch manager"
                    },
                    "startDate": {
                        "$ref": "#/definitions/iso8601"
                    },
                    "endDate": {
                        "$ref": "#/definitions/iso8601"
                    },
                    "highlights": {
                        "type": "array",
                        "description": "Specify accomplishments and achievements",
                        "additionalItems": false,
                        "items": {
                            "type": "string",
                            "description": "e.g. organized branch activities and mentored"
                        }
                    }
                }
            }
        }
    },
    "title": "Resume Schema",
    "type": "object"
}

export default function Resume() {

    const [formData, setFormData] = useState(null);

    useEffect(() => {

        fetch('/api/resume', { method: 'GET' })
            .then((data) => {
                return data.json()
            })
            .then(data => {
                setFormData(data.rows[0].resume)
            })
            .catch((error) => {
                console.error('Error fetching resume:', error);
            });
    })

    return (
        <div>
            <Form schema={schema} formData={formData} validator={validator} onSubmit={({ formData }) => fetch('/api/resume', { method: 'POST', body: JSON.stringify(formData), headers: { 'content-type': 'application/json' } })} >
                <div>
                    <Button variant="contained">Update Resume</Button>

                </div>
            </Form>
        </div>
    )
}