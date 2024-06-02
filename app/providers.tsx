'use client'

import { ChakraProvider, extendBaseTheme, theme } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
        {children}
    </ChakraProvider>
  )
}