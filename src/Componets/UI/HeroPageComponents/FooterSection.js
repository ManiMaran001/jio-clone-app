import React from 'react'
import {Grid,Box} from '@mui/material'

const FooterSection=()=>{
    return (
        <div className=' container container--spacing'>
            <Grid container>
                <Grid item xs={12}>
                    <Grid container>
                    <Grid item xs={9}>
                            4 content
                            </Grid>
                            <Grid item xs={3}>
                                1content
                            </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default FooterSection