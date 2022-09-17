import {useState} from "react";
import {Link as RouterLink} from 'react-router-dom';
import PropTypes from "prop-types";
// material
import {
    Grid,
    Button,
    Container,
    Stack,
    Typography,
    Box,
    Tabs,
    Tab,
    Card,
    Avatar,
    TextField,
    MenuItem, Switch
} from '@mui/material';
import {TabContext, TabList, TabPanel} from "@mui/lab";
import {grey} from "@mui/material/colors";
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
import {BlogPostCard, BlogPostsSort, BlogPostsSearch} from '../sections/@dashboard/blog';
// mock
import POSTS from '../_mock/blog';
import {AppWidgetSummary} from "../sections/@dashboard/app";


export default function AccountSettings() {
    return (
        <Page title="AccountSettings">
            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{px: 1, py: 2}}>
                    <Card sx={{width: 1000, height: 500, boxShadow: 4, p: 2}}>
                        <Box sx={{width: '100%', maxWidth: 500}}>
                            <Typography sx={{
                                fontSize: 1,
                                color: "#637381",
                                fontWeight: 700,
                                lineHeight: 1.5,
                            }}
                                        font-family={"Public Sans"}
                                        variant="h6" gutterBottom>
                                ACTIVITY
                            </Typography>
                        </Box>
                        <Grid container sx ={{pt: 2}}>
                            <Grid item>
                                <Switch defaultChecked/>
                            </Grid>
                            <Grid item>
                                <Typography sx={{pt: 0.8}}>Email me when someone comments only article</Typography>
                            </Grid>
                        </Grid>
                        <Grid container sx ={{pt: 2}}>
                            <Grid item>
                                <Switch defaultChecked/>
                            </Grid>
                            <Grid item>
                                <Typography sx={{pt: 0.8}}>
                                    Email me when someone answers on my form</Typography>
                            </Grid>
                        </Grid>
                        <Grid container sx ={{pt: 2}}>
                            <Grid item>
                                <Switch defaultChecked/>
                            </Grid>
                            <Grid item>
                                <Typography sx={{pt: 0.8}}>Email me when someone follows me</Typography>
                            </Grid>
                        </Grid>

                        <Box sx={{width: '100%', maxWidth: 500, pt: 4}}>
                            <Typography sx={{
                                fontSize: 1,
                                color: "#637381",
                                fontWeight: 700,
                                lineHeight: 1.5,
                            }}
                                        font-family={"Public Sans"}
                                        variant="h6" gutterBottom>
                                APPLICATION
                            </Typography>
                        </Box>
                        <Grid container sx ={{pt: 2}}>
                            <Grid item>
                                <Switch defaultChecked/>
                            </Grid>
                            <Grid item>
                                <Typography sx={{pt: 0.8}}>News and announcements</Typography>
                            </Grid>
                        </Grid>
                        <Grid container sx ={{pt: 2}}>
                            <Grid item>
                                <Switch defaultChecked/>
                            </Grid>
                            <Grid item>
                                <Typography sx={{pt: 0.8}}>
                                    Weekly product updates</Typography>
                            </Grid>
                        </Grid>
                        <Grid container sx ={{pt: 2}}>
                            <Grid item>
                                <Switch defaultChecked/>
                            </Grid>
                            <Grid item>
                                <Typography sx={{pt: 0.8}}>
                                    Weekly blog digest</Typography>
                            </Grid>
                        </Grid>
                    </Card>
                </Stack>
            </Container>
        </Page>
    );
}