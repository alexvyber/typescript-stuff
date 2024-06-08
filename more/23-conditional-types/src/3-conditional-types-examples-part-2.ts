type Vague1 = unknown extends any ? true : false;

type Vague2 = never extends any ? true : false;

type Vague3 = any extends any ? true : false;

type Vague4 = void extends any ? true : false;

type Vague5 = undefined extends void ? true : false;

type Vague6 = undefined extends never ? true : false;

type Vague7 = undefined extends unknown ? true : false;

type Vague8 = null extends any ? true : false;

type Vague9 = null extends never ? true : false;

type Vague10 = never extends never ? true : false;

type Vague11 = unknown extends never ? true : false;

type Vague12 = string[] extends any[] ? true : false;

type Vague13 = string[] extends string ? true : false;

type Vague14 = string[] extends any ? true : false;

type Vague15 = number[] extends any[] ? true : false;

export type All =
  | Vague1
  | Vague2
  | Vague3
  | Vague4
  | Vague5
  | Vague6
  | Vague7
  | Vague8
  | Vague9
  | Vague10
  | Vague11
  | Vague12
  | Vague13
  | Vague14
  | Vague15;
