import {useState} from "react";
import {Link as RouterLink} from 'react-router-dom';
import PropTypes from "prop-types";
// material
import {Grid, Button, Container, Stack, Typography, Box, Tabs, Tab} from '@mui/material';
import {TabContext, TabList, TabPanel} from "@mui/lab";
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
import {BlogPostCard, BlogPostsSort, BlogPostsSearch} from '../sections/@dashboard/blog';
// mock
import POSTS from '../_mock/blog';
import AccountProfile from "./AccountProfile";
import AccountSettings from "./AccountSettings";

// ----------------------------------------------------------------------

// TODO Remove unused imports and code functionality
const SORT_OPTIONS = [{value: 'latest', label: 'Latest'}, {value: 'popular', label: 'Popular'}, {
    value: 'oldest',
    label: 'Oldest'
},];

// ----------------------------------------------------------------------


export default function Account() {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (<Page title="Account">
            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Account
                    </Typography>
                </Stack>

                <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
                    <Box sx={{width: '100%', typography: 'body1'}}>
                        <TabContext value={value}>
                            <Box sx={{borderBottom: 1, borderColor: 'divider', spacing: 8}}>
                                <TabList onChange={handleChange} aria-label="lab API tabs example">
                                    <Tab label="General" value="1"/>
                                    <Tab label="Settings" value="2"/>
                                    <Tab label="Change password" value="3"/>
                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                <AccountProfile/>
                            </TabPanel>
                            <TabPanel value="2">
                                <AccountSettings/>
                            </TabPanel>
                            <TabPanel value="3">Item Three</TabPanel>
                        </TabContext>
                    </Box>
                </Stack>
            </Container>
        </Page>);
}
