import Typography from "@material-ui/core/Typography";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme)=> ({
    root: {
        margin: theme.spacing(3, 0, 2),
        textAlign: "center",
        fornSize: "40px",
        color: "deeppink",
        textShadow: "1px 1px darkmagenta"
    }
}))

export const RegHeader = () => {
    const styles = useStyles();

    return (
        <Typography className={styles.root} component="h1" variant="h5">
            Registration Form
        </Typography>
    )
}