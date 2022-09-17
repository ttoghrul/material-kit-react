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
    MenuItem
} from '@mui/material';
import {TabContext, TabList, TabPanel} from "@mui/lab";
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
import {BlogPostCard, BlogPostsSort, BlogPostsSearch} from '../sections/@dashboard/blog';
// mock
import POSTS from '../_mock/blog';
import {AppWidgetSummary} from "../sections/@dashboard/app";

// ----------------------------------------------------------------------

// TODO Remove unused imports and code functionality
const SORT_OPTIONS = [
    {value: 'latest', label: 'Latest'},
    {value: 'popular', label: 'Popular'},
    {value: 'oldest', label: 'Oldest'},
];

const countries =
    [
        {name: 'Afghanistan', code: 'AF'},
        {name: 'Åland Islands', code: 'AX'},
        {name: 'Albania', code: 'AL'},
        {name: 'Algeria', code: 'DZ'},
        {name: 'American Samoa', code: 'AS'},
        {name: 'AndorrA', code: 'AD'},
        {name: 'Angola', code: 'AO'},
        {name: 'Anguilla', code: 'AI'},
        {name: 'Antarctica', code: 'AQ'},
        {name: 'Antigua and Barbuda', code: 'AG'},
        {name: 'Argentina', code: 'AR'},
        {name: 'Armenia', code: 'AM'},
        {name: 'Aruba', code: 'AW'},
        {name: 'Australia', code: 'AU'},
        {name: 'Austria', code: 'AT'},
        {name: 'Azerbaijan', code: 'AZ'},
        {name: 'Bahamas', code: 'BS'},
        {name: 'Bahrain', code: 'BH'},
        {name: 'Bangladesh', code: 'BD'},
        {name: 'Barbados', code: 'BB'},
        {name: 'Belarus', code: 'BY'}
    ]

// ----------------------------------------------------------------------


export default function AccountProfile() {

    const [country, setCountry] = useState('Azerbaijan');

    const handleChange = (event) => {
        setCountry(event.target.value);
    };

    return (
        <Page title="AccountProfile">
            <Box sx={{flexGrow: 1}}>
                <Grid container spacing={8}>
                    <Grid item xs={4}>
                        <Card sx={{width: 350, height: 500, boxShadow: 4}}>
                            <Box sx={{borderRadius: '50%', height: '210px', width: '210px', border: '1px dashed grey', p: 2}} justifyContent="center" dir="ltr">
                                <Avatar sx={{height: '170px', width: '170px'}} alt="Toghrul Taghiyev"
                                        src="https://res.cloudinary.com/minimal-ui/image/upload/v1614655910/upload_minimal/avatar/minimal_avatar.jpg"/>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={8}>
                        <Card sx={{width: 600, height: 500, pt: 2, boxShadow: 4}}>
                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': {m: 2, width: '25ch'},
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                    id="outlined-required"
                                    label="Name"
                                    defaultValue="Toghrul Taghiyev"
                                />
                                <TextField
                                    id="outlined-required"
                                    label="Email Address"
                                    defaultValue="ttoghrul@gmail.com"
                                />
                                <TextField
                                    id="outlined-required"
                                    label="Phone Number"
                                    defaultValue="+994-706771237"
                                />
                                <TextField
                                    id="outlined-required"
                                    label="Address"
                                    defaultValue="M.Mushvig street"
                                />
                                <TextField
                                    id="outlined-required"
                                    label="Country"
                                    select
                                    value={country}
                                    onChange={handleChange}
                                    defaultValue="Azerbaijan"
                                >
                                    {countries.map((option) => (
                                        <MenuItem key={option.code} value={option.name}>
                                            {option.name}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <TextField
                                    id="outlined-required"
                                    label="State/Region"
                                    defaultValue="Absheron"
                                />
                                <TextField
                                    id="outlined-required"
                                    label="City"
                                    defaultValue="Baku"
                                />
                                <TextField
                                    id="outlined-required"
                                    label="Zip/Code"
                                    defaultValue="AZ 1073"
                                />
                            </Box>
                            <Box sx={{m: 2, width: '53ch'}}>
                                <TextField
                                    id="outlined-required"
                                    label="About"
                                    multiline
                                    fullWidth
                                    defaultValue="Nullam cursus lacinia erat. Vestibulum suscipit nulla quis orci. Fusce a quam."
                                />
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Page>
    );
}
