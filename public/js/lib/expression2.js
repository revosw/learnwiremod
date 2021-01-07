const TYPES = /angle|array|bone|complex|effect|entity|gtable|matrix[24]?|normal|number|quaternion|ranger|string|table|vector[24]?|void|wirelink/;

export default function (hljs) {
    return {
        keywords: "for if while local function #include",
        name: "expression2",
        contains: [
            {
                className: "number",
                variants: [
                    { match: /\b0x[A-F0-9]+/ },
                    { match: /\b0b[01]+/ },
                    { match: /(\b\d+(\.\d*)?|\.\d+)(e[-+]?\d+)?/ }
                ],
            },
            {
                className: "string",
                begin: /"/, end: /(?<!\\)"/
            },
            {
                className: "directive",
                match: /@autoupdate|@trigger|@name( [^\n]+)?|@model( [^\n]+)?/
            },
            {
                className: "directive",
                match: /@inputs|@outputs|@persist/,
                contains: [
                    {
                        className: "type",
                        match: TYPES
                    }
                ]
            },
            {
                className: "variable",
                match: /[A-Z]\w*/
            },
            hljs.HASH_COMMENT_MODE,
            {
                className: "comment",
                begin: /#\[/, end: /]#/
            },
            {
                className: "function",
                match: /\w+(?=\()/
            }
        ]
    }
}