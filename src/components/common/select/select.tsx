import React, { ComponentPropsWithoutRef, forwardRef } from 'react'

import * as SelectFromRadix from '@radix-ui/react-select'

import s from './select.module.scss'
import {Icons} from "../../../assets/Icons";
import clsx from 'clsx';

type SelectProps = {
  className?: string
  defaultValue?: number | string
  disabled?: boolean
  label?: number | string
  onChange?: (value: number | string) => void
  placeholder?: string
  title?: string
  value: number | string
}

type Props = SelectProps & ComponentPropsWithoutRef<typeof SelectFromRadix.Root>

export const Select = forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      className,
      defaultValue,
      disabled,
      onChange,
      placeholder,
      title,
      value,
      ...props
    }: Props,
    ref
  ) => {
    const classNames = {
      Icon: clsx(s.Icon, disabled && s.disabled),
      SelectContent: s.SelectContent,
      SelectTrigger: clsx(s.SelectTrigger, disabled && s.SelectTriggerDisabled, className),
      SelectViewport: s.SelectViewport,
      TypographyTitle: clsx(s.Title, disabled && s.disabled),
    }

    return (
      <SelectFromRadix.Root
        defaultValue={defaultValue}
        disabled={disabled}
        onValueChange={onChange}
        value={value}
        {...props}
      >
        <div className={classNames.TypographyTitle} >
          {title}
        </div>
        <SelectFromRadix.Trigger aria-label={'Food'} className={classNames.SelectTrigger} ref={ref}>
          <SelectFromRadix.Value placeholder={placeholder} />
          <SelectFromRadix.Icon className={classNames.Icon}>
            <Icons height={'6'} iconId={'vector-select'} viewBox={'0 0 11 6'} width={'11'} full={'black'} />
          </SelectFromRadix.Icon>
        </SelectFromRadix.Trigger>
        <SelectFromRadix.Portal>
          <SelectFromRadix.Content
            className={classNames.SelectContent}
            collisionPadding={0}
            position={'popper'}
          >
            <SelectFromRadix.ScrollUpButton>
              <Icons height={'6'} iconId={'vector-select-up'} viewBox={'0 0 11 6'} width={'11'} />
            </SelectFromRadix.ScrollUpButton>
            <SelectFromRadix.Viewport className={classNames.SelectViewport}>
              {children}
            </SelectFromRadix.Viewport>
            <SelectFromRadix.ScrollDownButton>
              <Icons height={'6'} iconId={'vector-select'} viewBox={'0 0 11 6'} width={'11'} />
            </SelectFromRadix.ScrollDownButton>
          </SelectFromRadix.Content>
        </SelectFromRadix.Portal>
      </SelectFromRadix.Root>
    )
  }
)

export const SelectItem = forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<{ className?: string; disabled?: boolean; value: number | string }>
>(({ children, className, value, ...props }, forwardedRef) => {
  const classNames = {
    TypographyTitle: clsx(s.SelectItem, className),
  }

  const stringValue = value.toString()

  return (
    <SelectFromRadix.Item
      className={classNames.TypographyTitle}
      {...props}
      ref={forwardedRef}
      value={stringValue}
    >
      <div>
        <SelectFromRadix.ItemText>{children}</SelectFromRadix.ItemText>
      </div>
    </SelectFromRadix.Item>
  )
})
