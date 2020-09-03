import React from 'react'
import { Input, FormControl, FormLabel } from '@chakra-ui/core'
export default {
    title: 'Chakra/Input',
    component: Input, FormControl, FormLabel
}

export const Email = () => (
    <FormControl isRequired>
        <FormLabel htmlFor="fname">email</FormLabel>
        <Input id="fname" placeholder="メールアドレス" />
    </FormControl>
)
export const Password = () => (
    <FormControl isRequired>
        <FormLabel htmlFor="fname">password</FormLabel>
        <Input id="fname" placeholder="パスワード" />
    </FormControl>
)