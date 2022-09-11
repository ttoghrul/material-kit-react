import {Link as RouterLink} from 'react-router-dom';
// @mui
import {styled} from '@mui/material/styles';
import {Card, Link, Container, Typography} from '@mui/material';
// hooks
import {useEffect, useState} from "react";
import * as d3 from 'd3';
import useResponsive from '../hooks/useResponsive';
// components
import Page from '../components/Page';
import Logo from '../components/Logo';
// sections
import AuthSocial from '../sections/auth/AuthSocial';
import {OrgChartComponent} from "./OrgChart";


// ----------------------------------------------------------------------

const RootStyle = styled('div')(({theme}) => ({
    [theme.breakpoints.up('md')]: {
        display: 'flex',
    },
}));

const HeaderStyle = styled('header')(({theme}) => ({
    top: 0,
    zIndex: 9,
    lineHeight: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    padding: theme.spacing(3),
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
        alignItems: 'flex-start',
        padding: theme.spacing(7, 5, 0, 7),
    },
}));

const SectionStyle = styled(Card)(({theme}) => ({
    width: '100%',
    maxWidth: 464,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: theme.spacing(2, 0, 2, 2),
}));

const ContentStyle = styled('div')(({theme}) => ({
    maxWidth: 480,
    margin: 'auto',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function OrgChartPage() {
    const smUp = useResponsive('up', 'sm');

    const mdUp = useResponsive('up', 'md');

    const [data, setData] = useState(null);
    let addNodeChildFunc = null;

    function addNode() {
        const node = {
            nodeId: 'new Node',
            parentNodeId: 'O-6066'
        };

        addNodeChildFunc(node);
    }

    function onNodeClick(nodeId) {
        // console.log('d3', d3.event);
        alert(`clicked ${nodeId}`);
    }

    useEffect(() => {
        d3.csv(
            'https://raw.githubusercontent.com/bumbeishvili/sample-data/main/org.csv'
        ).then(data => {
            setData(data);
        });
    }, [true]);

    return (
        <Page title="OrgChartPage">
            <RootStyle>
                <HeaderStyle>
                    <Logo/>
                </HeaderStyle>
                <Container maxWidth="sm">
                    <ContentStyle>
                        <div>
                            Click node to trigger action in parent or &nbsp;
                            <button onClick={() => addNode()}>add node as root's child</button>
                            <OrgChartComponent
                                /* eslint-disable */
                                setClick={click => (addNodeChildFunc = click)}
                                onNodeClick={onNodeClick}
                                data={data}
                            />
                        </div>
                    </ContentStyle>
                </Container>
            </RootStyle>
        </Page>
    );
}
