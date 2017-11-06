---
title: "Introduction"
date: "2017-10-09T17:23:20+02:00"
menu:
  tutorials:
    parent: "e2"
    weight: 10
    identifier: "dfgkahbjcie"
highlightLanguage: "gmod_wire_e2"
headerColor: "darkred"
buttonColor: "#d61b18"
---
## About the course
I welcome you to the tutorial series for all wiremod related. Here we will be exploring Expression 2 in all its glory.

{{< codeblock >}}
@name Hello World
@inputs A B
@outputs Add Sub Mul Div
@outputs GreaterThan Highest Lowest
@outputs Vector:vector
@persist D
@trigger all

Add = A + B
Sub = A - B
Mul = A * B
Div = A / B

GreaterThan = A > B

if(A > B) {
  Highest = A, Lowest = B
} else {
  Highest = B, Lowest = A
}

Vector = vec(A, B, 0)
Vector = Vector + vec(0, 0, A + B)
Vector = Vector:normalized()
@name Hello World
@inputs A B
@outputs Add Sub Mul Div
@outputs GreaterThan Highest Lowest
@outputs Vector:vector
@persist D
@trigger all

Add = A + B
Sub = A - B
Mul = A * B
Div = A / B

GreaterThan = A > B

if(A > B) {
  Highest = A, Lowest = B
} else {
  Highest = B, Lowest = A
}

Vector = vec(A, B, 0)
Vector = Vector + vec(0, 0, A + B)
Vector = Vector:normalized()
{{< /codeblock >}}

{{< inlinecode "Some Inline code" >}}
## Credits
Upcoming list of shoutouts

{{< quiz >}}