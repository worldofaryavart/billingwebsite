import { Button, Typography } from '@mui/material'
import React from 'react'

export default function PageTitle({ title, button }) {
    return (
        <div className="flex justify-between items-center">
            <Typography className="text-gray-500" style={{ fontSize: '30px' }}>
                {title}
            </Typography>
            {button && (
                <Button
                    className='bg-teal-500 hover:bg-teal-700'
                    variant='contained'
                    size='large'
                    // color='teal' // Set color to inherit so Tailwind classes take effect
                >
                    {button}
                </Button>
            )}
        </div>
    )
}
