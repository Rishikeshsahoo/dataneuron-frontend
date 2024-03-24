import {render, screen } from '@testing-library/react'
import Box from "./Box"

it('Box componnet should be visible',()=>{
    render(<Box/>)
    const message= screen.queryByText(/Hello world/i);
    expect(<Box/>).toBeDefined()
})