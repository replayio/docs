'use client'
import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import NextImage from 'next/image'

const DialogDemo = ({
  children,
  className = '',
  src,
  alt = '',
  height,
  width,
}: {
  className: string
  src: string
  alt: string
  height?: number
  width?: number
  children: React.ReactNode
}) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>{children}</Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-blackA6 p-0 data-[state=open]:animate-overlayShow" />
      <Dialog.Content
        style={{ transform: 'translate(calc(50% - 256px), 50%)' }}
        className="fixed  rounded-xl bg-white/10 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow"
      >
        <NextImage src={src} alt={alt} priority width="1024" height="640" />
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
)

export default DialogDemo
