import React from 'react';

import { Box, Grid, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from "@material-ui/icons"

import Styles from "./app-style"

import prato1 from "../../../public/image/prato_1.png"
import prato2 from "../../../public/image/prato_2.png"
import prato3 from "../../../public/image/prato_3.png"
import prato4 from "../../../public/image/prato_4.png"

function App() {
    const classes = Styles();

    const items = [
        {
            key: 0,
            title: "Hamburger 1",
            src: prato1,
            price: 21
        },
        {
            key: 1,
            title: "Hamburger 2",
            src: prato2,
            price: 21
        },
        {
            key: 2,
            title: "Hamburger 3",
            src: prato3,
            price: 21
        },
        {
            key: 3,
            title: "Hamburger 4",
            src: prato4,
            price: 21
        }
    ]

    return (
        <Box component="div" className={classes.rootApp}>
            <Grid container spacing={3}>
                {
                    items.map(item => (
                        <Grid key={item.key} item md={4} xs={12}>
                            <Box component="div" className={classes.containerItem}>
                                <img
                                    src={item.src}
                                    className={classes.image}
                                />
                                <Box component="div" className={classes.itemFooter}>
                                    <Typography variant="h5">
                                        {item.title}
                                    </Typography>
                                    <Typography variant="h6">
                                        {item.price.toLocaleString("pt-br", { style: 'currency', currency: "BRL" })}
                                    </Typography>
                                    <IconButton>
                                        <AddShoppingCart />
                                    </IconButton>
                                </Box>
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
}

export default App;