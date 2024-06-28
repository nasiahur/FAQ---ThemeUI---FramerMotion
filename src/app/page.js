"use client"

import { FAQPage } from "@/components/FAQPage";
import theme from "@/utils/theme";
import { ThemeUIProvider } from "theme-ui";

export default function Home() {
  return (
    <ThemeUIProvider theme={theme}>
      <FAQPage />
    </ThemeUIProvider>
  );
}
