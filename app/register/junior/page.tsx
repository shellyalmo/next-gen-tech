'use client'

import Form from '@rjsf/mui';
import { RJSFSchema } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';

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
                "email": {
                    "type": "string",
                    "description": "e.g. thomas@gmail.com",
                    "format": "email"
                },
                "phone": {
                    "type": "string",
                    "description": "Phone numbers are stored as strings so use any format you like, e.g. 712-117-2923"
                },
                "url": {
                    "type": "string",
                    "description": "URL (as per RFC 3986) to your website, e.g. personal homepage",
                    "format": "uri"
                },
                "summary": {
                    "type": "string",
                    "description": "Write a short 2-3 sentence biography about yourself"
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
                                "description": "e.g. Facebook or Twitter"
                            },
                            "username": {
                                "type": "string",
                                "description": "e.g. neutralthoughts"
                            },
                            "url": {
                                "type": "string",
                                "description": "e.g. http://twitter.example.com/neutralthoughts",
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
                    "location": {
                        "type": "string",
                        "description": "e.g. Menlo Park, CA"
                    },
                    "description": {
                        "type": "string",
                        "description": "e.g. Social Media Company"
                    },
                    "position": {
                        "type": "string",
                        "description": "e.g. Software Engineer"
                    },
                    "url": {
                        "type": "string",
                        "description": "e.g. http://facebook.example.com",
                        "format": "uri"
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
                    "url": {
                        "type": "string",
                        "description": "e.g. http://facebook.example.com",
                        "format": "uri"
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
                        "description": "e.g. The World Wide Web"
                    },
                    "description": {
                        "type": "string",
                        "description": "Short summary of project. e.g. Collated works of 2017."
                    },
                    "highlights": {
                        "type": "array",
                        "description": "Specify multiple features",
                        "additionalItems": false,
                        "items": {
                            "type": "string",
                            "description": "e.g. Directs you close but not quite there"
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
                    "startDate": {
                        "$ref": "#/definitions/iso8601"
                    },
                    "endDate": {
                        "$ref": "#/definitions/iso8601"
                    },
                    "url": {
                        "type": "string",
                        "format": "uri",
                        "description": "e.g. http://www.computer.org/csdl/mags/co/1996/10/rx069-abs.html"
                    },
                    "roles": {
                        "type": "array",
                        "description": "Specify your role on this project or in company",
                        "additionalItems": false,
                        "items": {
                            "type": "string",
                            "description": "e.g. Team Lead, Speaker, Writer"
                        }
                    },
                    "entity": {
                        "type": "string",
                        "description": "Specify the relevant company/entity affiliations e.g. 'greenpeace', 'corporationXYZ'"
                    },
                    "type": {
                        "type": "string",
                        "description": " e.g. 'volunteering', 'presentation', 'talk', 'application', 'conference'"
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
                        "description": "e.g. Facebook"
                    },
                    "position": {
                        "type": "string",
                        "description": "e.g. Software Engineer"
                    },
                    "url": {
                        "type": "string",
                        "description": "e.g. http://facebook.example.com",
                        "format": "uri"
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
                        "description": "Specify accomplishments and achievements",
                        "additionalItems": false,
                        "items": {
                            "type": "string",
                            "description": "e.g. Increased profits by 20% from 2011-2012 through viral advertising"
                        }
                    }
                }
            }
        },
        "certificates": {
            "type": "array",
            "description": "Specify any certificates you have received throughout your professional career",
            "additionalItems": false,
            "items": {
                "type": "object",
                "additionalProperties": true,
                "properties": {
                    "name": {
                        "type": "string",
                        "description": "e.g. Certified Kubernetes Administrator"
                    },
                    "date": {
                        "$ref": "#/definitions/iso8601"
                    },
                    "url": {
                        "type": "string",
                        "description": "e.g. http://example.com",
                        "format": "uri"
                    },
                    "issuer": {
                        "type": "string",
                        "description": "e.g. CNCF"
                    }
                }
            }
        },
        "languages": {
            "type": "array",
            "description": "List any other languages you speak",
            "additionalItems": false,
            "items": {
                "type": "object",
                "additionalProperties": true,
                "properties": {
                    "language": {
                        "type": "string",
                        "description": "e.g. English, Spanish"
                    },
                    "fluency": {
                        "type": "string",
                        "description": "e.g. Fluent, Beginner"
                    }
                }
            }
        },
        "references": {
            "type": "array",
            "description": "List references you have received",
            "additionalItems": false,
            "items": {
                "type": "object",
                "additionalProperties": true,
                "properties": {
                    "name": {
                        "type": "string",
                        "description": "e.g. Timothy Cook"
                    },
                    "reference": {
                        "type": "string",
                        "description": "e.g. Joe blogs was a great employee, who turned up to work at least once a week. He exceeded my expectations when it came to doing nothing."
                    }
                }
            }
        }
    },
    "title": "Resume Schema",
    "type": "object"
}

export default function Junior() {
    return (
        <div>
            <Form schema={schema} validator={validator} onSubmit={({ formData }) => fetch('/api/junior', { method: 'POST', body: JSON.stringify(formData), headers: { 'content-type': 'application/json' } })} />
        </div>
    )
}