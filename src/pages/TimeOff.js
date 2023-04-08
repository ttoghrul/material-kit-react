import { Grid } from "@mui/material";
import CollapsableCard from "./CollapsableCard";

export default function TimeOff() {
    return (
        <>
            <Grid container>
                <Grid
                    item
                    xs={0}
                    md={2}
                    style={{ marginRight: "0.5em" }}
                />
                <Grid item container xs={12} spacing={12}>
                    <Grid item xs={12}>
                        {" "}
                        <CollapsableCard />{" "}
                        <CollapsableCard/>{" "}
                    </Grid>
                </Grid>
                <Grid
                    item
                    xs={0}
                    md={2}
                    style={{ marginLeft: "0.5em" }}
                />
            </Grid>
        </>
    );
}