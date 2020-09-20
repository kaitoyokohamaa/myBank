
import React from 'react'
import { Button } from '@chakra-ui/core'

export default {
    title: 'Chakra/Button',
    component: Button
}
"storybook": "start-storybook -p 9001"
export const signBtn = () => (
    <Button variantColor='green' >
        登録
    </Button>
)
"@storybook/cli": "^6.0.21",
    "@storybook/react": "^6.0.21",
export const homeBtn = () => (
    <Button  >
        登録
    </Button>
)