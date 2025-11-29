"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, ColorModeScript, cookieStorageManagerSSR, cookieStorageManager } from "@chakra-ui/react";
import theme from "@/theme";

type ProvidersProps = {
  children: React.ReactNode;
  cookies: string;
};

export function Providers({ children, cookies }: ProvidersProps) {
  const colorModeManager =
    typeof window === "undefined"
      ? cookieStorageManagerSSR(cookies)
      : cookieStorageManager;

  return (
    <CacheProvider>
      <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
        <ColorModeScript
          initialColorMode={theme.config.initialColorMode}
          type="cookie"
        />
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
}

export default Providers;
