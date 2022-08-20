# Our first program
Finally we are going to start learning Expression 2! Let's start with opening the editor. The first thing we see is this program. This program has two distinct parts, on the top you can see words preceded by @ called *directives*, and on the bottom is text inside a pair of `#[ ]#` called a *comment*.

Note that you can click the clipboard icon 📋 to copy the code segment

```
@name 
@inputs 
@outputs 
@persist 
@trigger 

#[
    Documentation and examples are available at:
    https://github.com/wiremod/wire/wiki/Expression-2

    Discord is available at https://discord.gg/H8UKY3Y
    Reddit is available at https://www.reddit.com/r/wiremod
    Report any bugs you find here https://github.com/wiremod/wire/issues
]#
```

## Printing to chat
Follow my lead. Let's remove the comment, and instead write the code `print("Hello World!")`. Now
when you place a
new expression, you will see the text "Hello World!" in the chat. No other players on the server can see these
prints.

We can see that `"Hello World!"` is surrounded with quotation marks. In the same way we can make a
comment by surrounding text with `#[ ]#`, we can surround text with quotation marks to make a
*string*.

```
@name 
@inputs 
@outputs 
@persist 
@trigger 

print("Hello World!")

```

We're not limited to printing strings, we can also print numbers and calculation of numbers.
In this code snippet, we use a new function, `random()`. It is a function that *returns* a
random number between 0.0 and 1.0.

But where do functions like `print()` and `random()` come from? If you click the ![](../img/e2/editorbutton8.png) button in the top right of the editor, you can see a list of available functions.

```
print("Hello World!")

print(1 + 2)

print(4^3)

print(random())

print(owner():name())
```

## Conditional logic
Let's expand on the printing with some logic. With the `if`, `elseif` and `else` keywords, we can perform checks so that only some parts of the code will run.

In the first case, we have a single `if`. If the condition inside the parentheses is true, then
all the code inside the curly brackets `{ }` will be run. Code inside curly brackets are called
*blocks*

```
if (5 < 10) {
    print("5 is less than 10")
}
```

In the second case, we have an `if` and an `else` block. If the condition in the parentheses is true, the code in the `if` block will be run. Otherwise, the code in the `else` block will be run. We never put parentheses and a condition after `else`, because it's supposed to catch all the false cases.    

```
if (10 == 10) {
    print("They're equal!")
}
else {
    print("Somehow they're not equal...")
}
```

In the third case, we have an `if`, followed by several `elseif`, and an `else` at the end. The flow goes like this:

Step 1 - Evaluate `"Dave" == "David"`. If it's true, execute the block then **jump to step 6**. If it's false, check next condition.
Step 2 - Evaluate `pi() < 3.14`. If it's true, execute the block then **jump to step 6**. If it's false, check next condition.
Step 3 - Evaluate `!owner():isAlive()`. If it's true, execute the block then **jump to step 6**. If it's false, check next condition.
Step 4 - Evaluate `"A" != "A"`. If it's true, execute the block then **jump to step 6**. If it's false, go to the else block.
Step 5 - Execute the else block
Step 6 - Finished executing

```
if ("Dave" == "David") {
    # ...
}
elseif (pi() < 3.14) {
    # ...
}
elseif (!owner():isAlive()) {
    # ...
}
elseif ("A" != "A") {
    # ...
}
else {
    print("None of them are true")
}
```

## Boolean and relational operators
Both boolean operators and relational operators always evaluate to true or false. Let's look at all of them.

```
if (10 == 10) {
    # Equals
}
if (10 != 10) {
    # Not equals
}
if (10 > 10) {
    # Greater than
}
if (10 < 10) {
    # Less than
}
if (10 >= 10) {
    # Greater than or equal
}
if (10 <= 10) {
    # Less than or equal
}
if (owner():isAlive() & entity():isFrozen()) {
    # And
}
if (2 < 3 | owner():lastSaid() == "hello") {
    # Or
}
if (!isSinglePlayer()) {
  # Not
}
```

## Variables
Sometimes you need to store a value for later use. Variables act like small boxes you can put data in, which you can retrieve later. If you start a word with a capital letter, like `Score`, a variable with
name "Score" is created.

```
Age = 20
Name = "Dave"

print("My name is " + Name)
print("I am " + Age + " years old")
```

Let's combine our knowledge of variables with conditional logic. Note how on the first line, we use a single equal sign `Score = 74`, but we use double equals `Score == 100` on the condition. That's because with a single equal sign, we are putting the value `74` into `Score`. However, with a double
equals, we are checking whether Score is equal to 100.

```
Score = 74

if (Score == 100) {
    print("Perfect score!!!")
}
elseif (Score > 90) {
    print("That's great!")
}
elseif (Score > 70) {
    print("You're getting quite good")
}
elseif (Score > 40) {
    print("Not bad")
}
else {
    print("Just keep trying")
}
```

If you try to do single equal in the condition, you will get the error message "Assignment operator (=) must not be part of equation"

```
if (Score = 100) {
    print("Perfect score!!!")
}
```