import React from "react";
import {TextField, useTheme} from "@mui/material";

function CustomTextField({
    label,
    name,
    value,
    handleChange,
    handleBlur,
    ...props
}) {
    const theme = useTheme();
    return (
        <TextField
            {...props}
            label={label}
            name={name}
            fullWidth
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            variant="outlined"
            sx={{
                "& label.Mui-focused": {
                    color: theme.palette.secondary.light
                },
                "& .MuiInput-underline:after": {
                    borderBottomColor: theme.palette.secondary.light
                },
                "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                        borderColor: theme.palette.secondary.light
                    },
                    "&:hover fieldset": {
                        borderColor: theme.palette.secondary.light
                    },
                    "&.Mui-focused fieldset": {
                        borderColor: theme.palette.secondary.light
                    }
                }
            }}
        />
    );
}

export default CustomTextField;
