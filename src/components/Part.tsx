import React from 'react'
import { Grid, Card, Typography } from '@material-ui/core'

const Part = ({
  name,
  id,
  status
}: {
  name: string
  id: number
  status: string
}) => (
    <Grid container sm={4} xs={12}>
      <Card
        className={'view-card-header'}
        style={{ marginTop: 20, width: '100%' }}
      >
        <Typography>
          <b>ID</b>: {id}
        </Typography>
        <Typography>
          <b>Name</b>: {name}
        </Typography>
        <Typography>
          <b>Status</b>: {status}
        </Typography>
      </Card>
    </Grid>
  )

export default Part
