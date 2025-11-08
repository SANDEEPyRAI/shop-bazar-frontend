import { Typography, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    main: {
        height:'250px',
        backgroundImage:"url(/images/AICEOBG.png)",
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        "& h1": {
            paddingTop:'50px',
            fontSize: '60px',
            color: theme.palette.background.default,
            fontWeight: 700,
            textAlign: 'center',
            lineHeight:"70.31px",
        },
        "& h5": {
            color: theme.palette.background.default,
            textAlign: 'center',
        },
    },
}))
function AICEOBanner() {
    const classes = useStyles();
    return (
        <div className={classes.main}>
            {/* <img src='images/AICEOBG.png' alt='bg' width={"100%"}/> */}
            <Typography variant='h1'>I & AI-CoEs</Typography>
            <Typography variant='h5'>Innovation and Artificial Intelligence Centers of Excellence</Typography>
        </div>
    )
}

export default AICEOBanner