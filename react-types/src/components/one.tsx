import * as React from "react"

type Props = React.PropsWithChildren
type PropsTwo = React.ComponentProps<"div">

// Primitive types
// ReactNode
// ReactElement
// JSX.Element

// Helper types
// PropsWithChildren
// ComponentProps

type ImportantTypes = [
  React.ReactElement,
  React.ReactNode,
  React.ReactFragment,
  React.ReactPortal,
  JSX.Element,
  React.ComponentProps<"button">
]

export const One = (props: Props) => <div>{props.children}</div>
export const Two = ({ children, ...props }: PropsTwo) => (
  <div {...props}>{children}</div>
)

const ReactNodeDiv = (): React.ReactNode => {
  // return 12
  // return false
  // return "string"
  // return undefined
  // return null

  // const JSXObj: JSX.Element = {
  //   type: "div",
  //   props: {},
  //   key: null
  // }
  // return JSXObj

  // return JSXElementDiv()

  return {
    type: "div",
    props: {},
    children: [],
    key: null
  }
}

const ReactNodeDivObj: React.ReactNode = {
  type: "div",
  props: {},
  children: [],
  key: null
}

const JSXElementDiv = (): JSX.Element => {
  // return 12 // Not assignable
  // return false // Not assignable
  // return "string" // Not assignable
  // return null // Not assignable
  // return undefined // Not assignable

  return {
    type: "div",
    props: { children: [<div>asdfasdfasdf</div>] },
    key: null
  }
}

const asdf: JSX.Element = <></>

const Three = (props: { node: React.ReactNode }): JSX.Element | null => {
  return Math.random() > 0.5 ? <div>{props.node}</div> : null
}

const Four = (props: React.PropsWithChildren): React.ReactElement | null => {
  return Math.random() > 0.5 ? <div>{props.children}</div> : null
}

const Five = (): JSX.Element | null => {
  return Math.random() > 0.5 ? (
    Math.random() > 0.5 ? (
      <React.Fragment></React.Fragment>
    ) : (
      <></>
    )
  ) : null
}

const NotCallableReactNode = (() => <></>) as () => React.ReactNode
const CallableJSXElement = (() => <></>) as () => JSX.Element

const slot: React.ReactNode = {} as JSX.Element
const slot1: React.ReactNode = {} as React.ReactElement
const slot2: React.ReactElement = {} as JSX.Element
const slot3: React.ReactElement = {} as React.ReactPortal

// @ts-expect-error
const slot4: React.ReactElement = {} as React.ReactFragment
const slot5: React.ReactNode = {} as React.ReactFragment
const slot6: React.ReactNode = []
const slot7: React.ReactNode = [] as Array<
  React.ReactNode | React.ReactElement | JSX.Element
>

export const Parent = () => (
  <div>
    <One />
    <Two />
    {React.createElement(One, { children: "some" }, [
      <React.Fragment key="asdf">asdfasdf</React.Fragment>
    ])}
    {/* @ts-expect-error */}
    <NotCallableReactNode />

    <CallableJSXElement />
    {/* Doesnt work */}
    {/* <Three node={ReactNodeDiv()} /> */}
    <Three node={<Two children="Three Children" />} />
    <Four>ASDASDASDASDASD</Four>
    <Five />

    {/* {React.createElement(One)} */}
    {/* {React.createElement("div", {}, [ReactNodeDiv])} */}
    <div>{[ReactNodeDivObj]}</div>
  </div>
)
