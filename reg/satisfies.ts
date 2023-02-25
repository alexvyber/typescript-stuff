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

// --

export type VariantProps<Component extends (...args: any) => any> = Omit<
  OmitUndefined<Parameters<Component>[0]>,
  "class" | "className"
>
export type CxOptions = ClassValue[]
export type CxReturn = string

export type ConfigSchema = Record<string, Record<string, ClassValue>>

type ConfigVariants<T extends ConfigSchema> = {
  [Variant in keyof T]?: StringToBoolean<keyof T[Variant]> | null
}
type ConfigVariantsMulti<T extends ConfigSchema> = {
  [Variant in keyof T]?:
    | StringToBoolean<keyof T[Variant]>
    | StringToBoolean<keyof T[Variant]>[]
}

export type Config<T> = T extends ConfigSchema
  ? {
      variants?: T
      defaultVariants?: ConfigVariants<T>
      compoundVariants?: (T extends ConfigSchema
        ? (ConfigVariants<T> | ConfigVariantsMulti<T>) & ClassProp
        : ClassProp)[]
    }
  : never

export type Props<T> = T extends ConfigSchema
  ? ConfigVariants<T> & ClassProp
  : ClassProp

export type Some<Type> = {
  [Prop in keyof Type as Prop extends keyof BaseSchema
    ? Prop
    : never]: Type[Prop]
}

const newVariants = {
  variantsa: {
    variant: {
      primary: "asdfasdf"
    }
  },
  asdf: "asdf"
}

type ASD = Some<typeof newVariants>

export type BaseSchema = {
  variants: ConfigSchema
  defaultVariants?: Record<string, ClassValue>
  compoundVariants?: any
}

export type SatisfyConfig<T extends { variants: any }> = Config<T["variants"]>
//  & {
//   variants: Record<string, Record<string, ClassValue>>
//   defaultVariants?: ConfigVariants<T['variants']>
//   compoundVariants?: (T extends ConfigSchema
//     ? (ConfigVariants<T> | ConfigVariantsMulti<T>) & ClassProp
//     : ClassProp)[]
// }

export const defaultbuttonVariants = {
  variants: {
    variant: {
      primary:
        "bg-primary hover:bg-primary-hover text-main font-medium text-base",
      secondary: "bg-neutral-200 hover:bg-neutral-300 text-main",
      dark: "bg-neutral-800 hover:bg-neutral-850 text-white",
      light: "bg-white hover:bg-neutral-50",
      underline: "hover:text-primary-hover underline p-0"
    },
    size: {
      large: "py-4 px-6",
      small: "py-2 px-4"
    }
  },

  defaultVariants: {
    variant: "primary",
    size: "large"
  }
} as const

export const buttonVariants = {
  variants: {
    variant: {
      primary:
        "bg-primary hover:bg-primary-hover text-main font-medium text-base",
      secondary: "bg-neutral-200 hover:bg-neutral-300 text-main",
      dark: "bg-neutral-800 hover:bg-neutral-850 text-white",
      light: "bg-white hover:bg-neutral-50",
      underline: "hover:text-primary-hover underline p-0"
    },
    size: {
      large: "py-4 px-6",
      small: "py-2 px-4"
    }

    // asdf: {
    //   small: 'py-2 px-4',
    // },
  },

  defaultVariants: {
    variant: "primary"
    // size: 'large',
  }
} as const satisfies SatisfyConfig<typeof defaultbuttonVariants>
