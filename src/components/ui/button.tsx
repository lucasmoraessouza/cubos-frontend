import { forwardRef, type ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'flex items-center justify-center text-center rounded-[2px] font-roboto font-normal text-[16px] text-white antialiased tracking-normal transition-all duration-300 ease-in-out cursor-pointer',

  variants: {
    variant: {
      primary: 'bg-purple-dark-900 hover:bg-purple-dark-1000 active:bg-purple-dark-800 disabled:bg-mauve-dark-900 disabled:text-[#EAE6FD]',
      secondary: 'bg-purple-dark-a200/8 hover:purple-dark-a300 active:purple-dark-a100 disabled:bg-[rgba(235,234,248,0.08)]',
    },

    size: {
      default: 'px-5 py-3',
      sm: 'px-5 py-3',
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'default',
  },
})

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className={button({ variant, size, className })}
      />
    )
  }
)

Button.displayName = 'Button'
