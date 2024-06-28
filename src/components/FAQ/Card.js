/** @jsxImportSource theme-ui */

import { Box } from "theme-ui";

export const Card = ({ children }) => (
  <Box //card
    sx={{
      padding: "2rem",
      background: "white",
      boxShadow: "0 0 1px 1px rgba(0, 0, 0, 0.05)",
      width: ["100%", "100%", "100%", "50%"],
      borderRadius: "0.8rem",
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      zIndex: 2,
    }}
  >
    
    {children}
  </Box>
);
