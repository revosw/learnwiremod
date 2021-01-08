export default function (hljs) {
    return {
        name: "expression2",
        contains: [
            {
                className: "keyword",
                match: /if|elseif|else|for|foreach|while|continue|break|switch|case|default|local|return|#include/
            },
            {
                begin: /function/, end: /^/,
                returnBegin: true,
                contains: [
                    {
                        className: "keyword",
                        match: /function/
                    },
                    {
                        className: "type",
                        match: TYPELIST
                    },
                    {
                        className: "udf",
                        match: /\w+(?=\()/
                    },
                    {
                        className: "variable",
                        match: /[A-Z]\w*/
                    }
                ]
            },
            {
                className: "number",
                variants: [
                    { match: /\b0x[A-F0-9]+/ },
                    { match: /\b0b[01]+/ },
                    { match: /(\b\d+(\.\d*)?|\.\d+)(e[-+]?\d+)?/ }
                ],
            },
            {
                className: "preprocess",
                match: /#ifdef|#ifndef|#else|#endif/
            },
            {
                className: "string",
                begin: /"/, end: /(?<!\\)"/
            },
            {
                className: "directive",
                match: /@autoupdate|@inputs|@outputs|@persist|@trigger( all| none)?|@name( [^\n]+)?|@model( [^\n]+)?/
            },
            {
                className: "variable",
                match: /[A-Z]\w*/
            },
            {
                className: "type",
                variants: [
                    {match: "(?<=:)" + TYPELIST},
                    {match: TYPELIST + "(?=:)"},
                    {match: TYPELIST + "(?=\])"}
                ]
            },
            hljs.HASH_COMMENT_MODE,
            {
                className: "comment",
                begin: /#\[/m, end: /]#/m

            },
            {
                className: "function",
                match: /\w+(?=\()/
            }
        ]
    }
}

const TYPELIST = "(angle|array|bone|complex|effect|entity|gtable|matrix[24]?|normal|number|quaternion|ranger|string|table|vector[24]?|void|wirelink)";