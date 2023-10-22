"use client"

import React from 'react'
import { MantineProvider } from '@mantine/core'
import { NextUIProvider } from "@nextui-org/react";

export default function CardsLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <MantineProvider>
      <NextUIProvider>
        <div className=''>
          {children}
        </div>
      </NextUIProvider>
    </MantineProvider>
  )
}
