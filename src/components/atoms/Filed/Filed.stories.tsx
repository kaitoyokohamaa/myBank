import React from 'react'
import Filed from './index'

export default {
    title: 'Atom/Form',
    component: Filed,
}

export const Email = () => <Filed name='Email' type="text" placeholder="value" />
export const Password = () => <Filed name='Password' type="password" placeholder="value" />
