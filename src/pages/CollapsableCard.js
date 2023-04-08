import {
    Card,
    CardHeader,
    Collapse,
    Grid,
    IconButton,
    Typography
} from "@mui/material";
import {useState} from "react";
import {ArrowForwardIosOutlined} from "@mui/icons-material";


function ArrowDropDown() {
    return null;
}

export default function CollapsableCard() {
    const [expand, setExpand] = useState();

    return (
        <>
            <Card>
                <Card  sx={{pb: 2}}>
                    <CardHeader
                        avatar={
                            <IconButton onClick={() => setExpand(!expand)} size="large">
                                <ArrowForwardIosOutlined sx={{ color:"#1F64D1" }} />
                            </IconButton>
                        }
                        title= {
                            <Grid container spacing={8}>
                                <Grid item xs={4}>
                                <Typography variant="h5"> Holiday Leave </Typography>
                                </Grid>
                                <Grid item xs={8} display="flex" sx={{pr: 2, pt: 2}} justifyContent="flex-end">
                                    <Typography variant="h5" color={"#1F64D1"}> 8 days </Typography>
                                </Grid>
                        </Grid>
                        }
                        subheader="Annual Holiday days"
                    />
                    <Collapse style={{textAlign: "center"}} in={expand}>
                        <Typography> Child </Typography>
                    </Collapse>
                </Card>
            </Card>
        </>
    );
}
