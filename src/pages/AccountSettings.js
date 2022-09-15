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
                    <Card sx={{width: 1000, height: 500, boxShadow: 4, p:2}}>
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
                        <Box sx={{width: '100%', maxWidth: 500}}>
                            <Switch defaultChecked />
                        </Box>
                    </Card>
                </Stack>
            </Container>
        </Page>
    );
}