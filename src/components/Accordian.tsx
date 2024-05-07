'use client'

import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'

import ChevronDown from '@/components/icons/ChevronDown'

const AccordionTrigger = ({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      className={
        'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180'
      }
      {...props}
    >
      {children}
      <svg className="h-4 w-4 shrink-0 transition-transform duration-200">
        <ChevronDown />
      </svg>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
)
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = ({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>) => (
  <AccordionPrimitive.Content
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={'pb-4 pt-0'}>{children}</div>
  </AccordionPrimitive.Content>
)

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export function AccordionItem({
  children,
  title,
}: {
  children: React.ReactNode
  title: string
}) {
  return (
    <AccordionPrimitive.Item
      className={'border-b'}
      value={title}
    >
      <AccordionTrigger>{title}</AccordionTrigger>
      <AccordionContent>{children}</AccordionContent>
    </AccordionPrimitive.Item>
  )
}

export function Accordion({ children }: { children: React.ReactNode }) {
  return (
    <AccordionPrimitive.Root type="single" collapsible className="w-full">
      {children}
    </AccordionPrimitive.Root>
  )
}
