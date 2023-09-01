import isEqual from "lodash.isequal"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(cx(inputs))
}

export type ClassPropKey = "class" | "className"
export type ClassValue = string | null | undefined | ClassValue[]
export type ClassProp =
  | {
      class: ClassValue
      className?: never
    }
  | {
      class?: never
      className: ClassValue
    }
  | {
      class?: never
      className?: never
    }
export type OmitUndefined<T> = T extends undefined ? never : T
export type StringToBoolean<T> = T extends "true" | "false" ? boolean : T

const falsyToString = <T extends unknown>(value: T) =>
  typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value

/* cx
  ============================================ */

export type CxOptions = ClassValue[]
export type CxReturn = string

export const cx = <T extends CxOptions>(...classes: T): CxReturn =>
  classes
    .flat(Infinity as 0)
    .filter(Boolean)
    .join(" ")

/* cva
  ============================================ */

type ConfigSchema = Record<string, Record<string, ClassValue>>

type ConfigVariants<T extends ConfigSchema> = {
  [Variant in keyof T]?: StringToBoolean<keyof T[Variant]> | null
}
type ConfigVariantsMulti<T extends ConfigSchema> = {
  [Variant in keyof T]?:
    | StringToBoolean<keyof T[Variant]>
    | StringToBoolean<keyof T[Variant]>[]
}

type Config<T> = T extends ConfigSchema
  ? {
      base?: ClassValue
      variants?: T
      defaultVariants?: ConfigVariants<T>
      compoundVariants?: readonly (T extends ConfigSchema
        ? (ConfigVariants<T> | ConfigVariantsMulti<T>) & ClassProp
        : ClassProp)[]
    }
  : never

type RequiredConfig<T> = T extends ConfigSchema
  ? {
      base?: ClassValue
      variants: T
      defaultVariants: ConfigVariants<T>
      compoundVariants: readonly (T extends ConfigSchema
        ? (ConfigVariants<T> | ConfigVariantsMulti<T>) & ClassProp
        : ClassProp)[]
    }
  : never

type Props<T> = T extends ConfigSchema
  ? ConfigVariants<T> & ClassProp
  : ClassProp

const defaultbuttonVariants = {
  base: "bg-primary hover:bg-primary-hover text-main font-medium text-base",
  variants: {
    variant: {
      primary:
        "bg-primary hover:bg-primary-hover text-main font-medium text-base",
      underline: "hover:text-primary-hover underline p-0",
      asdf: "hover:text-primary-hover underline p-0"
    },
    size: {
      large: "py-4 px-6",
      small: "py-2 px-4"
    },
    other: {
      large: "py-4 px-6",
      small: "py-2 px-44",
      asmall: "py-2 px-44",
      aaasmall: "py-2 px-44"
    },
    qwert: { one: "py-4 px-6", two: "py-4 px-6" }
  },

  defaultVariants: {
    // variant: 'primary',
    size: "large"
  },

  compoundVariants: [
    {
      variant: "primary",
      size: "small",
      className: "bg-red-500"
    },
    {
      variant: "primary",
      size: "large",
      className: "bg-red-500"
    }
  ]
} as const

const newVariants = {
  base: "bg-primary hover:bg-primary-hover text-main font-medium text-base",
  variants: {
    variant: {
      primary:
        "bg-red-500 hover:bg-primary-hover text-main font-medium text-base",
      secondary: "bg-neutral-200 hover:bg-neutral-300 text-main",
      dark: "bg-neutral-800 hover:bg-neutral-850 text-white",
      light: "bg-white hover:bg-neutral-50",
      underline: "hover:text-primary-hover underline p-0",
      asdasdad: "hover:text-primary-hover underline p-0",
      qwerty: "hover:text-primary-hover underline p-0",
      lol: "hover:text-primary-hover underline p-0"
    },
    size: {
      large: "py-4 px-6",
      small: "py-2 px-44"
    },
    some: {
      large: "py-4 px-6",
      small: "py-2 px-44"
    },
    other: {
      large: "py-4 px-6",
      small: "py-2 px-44"
    },
    aaaaaaaaaaaaa: { one: "py-4 px-6", two: "py-4 px-6" },
    ASDdasdasd: { asdfasdf: "asdfasdf" },
    qwert: { one: "aaaaaaaaaaaapy-4 px-6", two: "py-4 px-6aaaaaaaaaa" }
  },

  defaultVariants: {
    variant: "primary",
    size: "large",
    some: "large",
    other: "large",
    ASDdasdasd: "asdfasdf",
    aaaaaaaaaaaaa: "one"
  },

  compoundVariants: [
    {
      variant: "primary",
      size: "large",
      className: "bg-red-500"
    },
    {
      variant: "primary",
      size: "small",
      className: "bg-red-500"
    }
  ]
} as const

const emptyVariants = {
  base: "asdfasdfasdfasdf",
  variants: {},
  defaultVariants: {},
  compoundVariants: []
}

function getAbsentKeys<T>(config: Config<T>): RequiredConfig<T> {
  if (!("variants" in config)) Object.assign(config, { variants: {} })
  if (!("defaultVariants" in config))
    Object.assign(config, { defaultVariants: {} })
  if (!("compoundVariants" in config))
    Object.assign(config, { compoundVariants: [] })

  return config as unknown as RequiredConfig<T>
}

export const mergeVariants = <T, U>(
  baseVariant: Config<T>,
  newVariant: Config<U>
) => {
  const baseStyles = cn(baseVariant.base, newVariant.base)

  const base_ = getAbsentKeys(baseVariant)
  const new_ = getAbsentKeys(newVariant)

  const variants = getVariants(base_.variants, new_.variants)

  const defaultVariants = getDefaultVariants(
    base_.defaultVariants,
    new_.defaultVariants
  )

  const compoundVariants = getCompoundVariants(
    base_.compoundVariants,
    new_.compoundVariants
  )

  return {
    base: baseStyles,
    variants,
    defaultVariants,
    compoundVariants
  }
}

// FIXME: make newVariants as first priopity
function getCompoundVariants<
  T extends readonly any[],
  U extends readonly any[]
>(
  baseVariants: T,
  newVariants: U //| undefined
) {
  // if (!newVariants) return baseVariants
  // if (!baseVariants) return newVariants

  const arr = [...baseVariants, ...newVariants]
  const markArr: (undefined | null)[] = []

  for (const [key, { className, ...rest }] of (
    arr as Array<{ className: string; [key: string]: string }>
  ).entries()) {
    for (let i = key + 1; i < arr.length; i++) {
      const { className, ...ArrRest } = arr[i] as {
        className: string
        [key: string]: string
      }

      if (isEqual(rest, ArrRest)) markArr[i] = null
    }
  }

  return arr
    .map((item, index) => (markArr[index] === undefined ? item : null))
    .filter(Boolean)
}

function getDefaultVariants<T extends ConfigSchema, U extends ConfigSchema>(
  baseVariants: ConfigVariants<T>,
  newVariants: ConfigVariants<U> //| undefined
) {
  // if (!newVariants) return baseVariants
  // if (!baseVariants) return newVariants

  const obj = Object.assign(
    {},
    baseVariants as ConfigVariants<T> | ConfigVariants<U>
  )

  Object.keys(newVariants).map((variant: keyof typeof newVariants) => {
    Object.assign(obj, { [variant]: newVariants[variant] })
  })

  return obj as unknown as ConfigVariants<T> & ConfigVariants<U>
}

function getVariants<T extends ConfigSchema, U extends ConfigSchema>(
  baseVariants: T,
  newVariants: U
): T & U {
  // if (!newVariants) return baseVariants
  // if (!baseVariants) return newVariants

  const obj = Object.assign({}, baseVariants as T & U)

  ;(
    Object.entries(newVariants) as Array<
      [
        vartiant: keyof typeof newVariants,
        value: (typeof newVariants)[keyof typeof newVariants]
      ]
    >
  ).map(([variant, value]) =>
    (Object.keys(value) as Array<keyof typeof value>).map(
      (key: keyof typeof value) => {
        if (!obj[variant])
          Object.assign(obj, { [variant]: newVariants[variant] })

        Object.assign(obj[variant], {
          [key]: cn(obj?.[variant]?.[key], value[key])
        })
      }
    )
  )

  return obj as unknown as U & T
}

// const asdfa = getCva(defaultbuttonVariants, newVariants)
// const fff = getCva(defaultbuttonVariants, emptyVariants)

// if (!asdfa?.compoundVariants?.[0]) throw new Error('asdf')
// const fffffqwer = asdfa.compoundVariants[0]
