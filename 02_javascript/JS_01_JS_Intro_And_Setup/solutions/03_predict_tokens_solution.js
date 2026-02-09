// Exercise 3 Solution: Predict the Token Output

let url = "https://example.com";

// ANSWER:
// Token                  | Type
// -----------------------|------------------
// let                    | keyword
// url                    | identifier
// =                      | operator (assignment)
// "https://example.com"  | string literal
// ;                      | punctuation
//
// Total: 5 tokens
//
// How the Parser reads it:
// 1. "let"   → This is a variable declaration keyword
// 2. "url"   → This is the variable name (identifier)
// 3. "="     → Assignment operator (assign the right side to the left)
// 4. "https://example.com" → The value being assigned (string literal)
// 5. ";"     → End of statement (punctuation)
//
// These tokens are then fed into the AST builder to create
// a VariableDeclaration node in the Abstract Syntax Tree.
