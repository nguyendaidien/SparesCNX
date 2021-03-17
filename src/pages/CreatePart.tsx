import React, { useContext } from 'react'
import { Grid, Box, Button } from '@material-ui/core'
import { Formik, Form } from 'formik'
import { PartContext } from '../state/part/context';
import { Part } from '../state/part/types'
import { makeStyles } from '@material-ui/core/styles'
import MyTextField from '../components/MyTextField'
const initialValues = {
    id: 0,
    name: '',
    status: ''
}

const useStyles = makeStyles((theme) => ({
    btnStyle: {
        backgroundColor: '#5e81f419',
        borderRadius: '8px',
        borderColor: '#5e81f419',
        boxShadow:
            '0 0 1px 0 rgba(94, 129, 244, 0.1), 0 2px 2px -2px rgba(94, 129, 244, 0.25)',
        color: '#FF808B',
        textTransform: 'none',
        '&:hover': {
            backgroundColor: '#5e81f434',
            borderColor: '#5e81f434'
        },
        '&:focus': {
            backgroundColor: '#5e81f434',
            borderColor: '#5e81f434'
        },
        '&:active': {
            backgroundColor: '#5e81f434',
            borderColor: '#5e81f434'
        },
        '&:linkButton': {
            padding: '6px 13px',

            '&:hover': {
                textDecoration: 'none'
            }
        }
    }
}))

const CreatePart = () => {
    const partContext = useContext(PartContext)
    const {
        actions: { createPart }
    } = partContext

    const classes = useStyles()
    function onSubmit(data: Part) {
        createPart(data)
        alert('Create part successfully!')
    }

    return (
        <div className='App'>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                <Form>
                    <Box className='view-card-content'>
                        <Box className='view-card-content-value'>
                            <Grid container xs={12} sm={3}>
                                <MyTextField type='text' name='id' label='ID' />
                            </Grid>
                        </Box>
                    </Box>
                    <Box className='view-card-content'>
                        <Box className='view-card-content-value'>
                            <Grid container xs={12} sm={3}>
                                <MyTextField type='text' name='name' label='Name' />
                            </Grid>
                        </Box>
                    </Box>
                    <Box className='view-card-content'>
                        <Box className='view-card-content-value'>
                            <Grid container xs={12} sm={3}>
                                <MyTextField type='text' name='status' label='Status' />
                            </Grid>
                        </Box>
                    </Box>
                    <Box className='view-card-content'>
                        <Box className='view-card-content-value'>
                            <Button type='submit' className={classes.btnStyle}>
                                Submit
                            </Button>
                        </Box>
                    </Box>
                </Form>
            </Formik>
        </div>
    )
}

export default CreatePart
