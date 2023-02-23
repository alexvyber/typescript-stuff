type Vague1 = "Hi" extends string ? true : false

type Vague2 = "Hi" extends any ? true : false

type Vague3 = "Hi" extends number ? true : false

type Vague4 = string extends "Hi" ? true : false

type Vague5 = 13 extends number ? true : false

type Vague6 = number extends 13 ? true : false

type Vague7 = number extends string ? true : false

type Vague8 = number extends any ? true : false

type Vague9 = string extends number ? true : false

type Vague10 = true extends boolean ? true : false

type Vague11 = true extends string ? true : false

type Vague12 = boolean extends any ? true : false

type Vague13 = false extends any ? true : false

type Vague14 = string extends any ? true : false

type Vague15 = 13 extends any ? true : false
