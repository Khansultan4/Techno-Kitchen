import { Theme } from "@emotion/react";
import { SxProps, Typography } from "@mui/material";
import { IItem } from "../../types/types";
import { Box } from "@mui/system";

export default function DamnBox({
    title,
    value,
  }: {
    title: string;
    value: string | IItem[];
  }) {
    const sxVar: SxProps<Theme> = {
      color: 'text.secondary',
      textAlign: 'right',
      padding: 1,
    };
    return (
      <Box
        sx={{
          width: '100%',
          backgroundColor: 'gray.g',
          padding: 1,
          mt: '10px',
          ':first-child': {
            mt: 0,
          },
        }}
      >
        <Typography>{title}:</Typography>
        {Array.isArray(value) ? (
          value.map((el) => (
            <Typography sx={sxVar} key={el.id}>
              {el.title}
            </Typography>
          ))
        ) : (
          <Typography sx={sxVar}>{value}</Typography>
        )}
      </Box>
    );
  };