import React from 'react'
import Filed from './index'

export default {
    title: 'Atom/Form',
    component: Filed,
}

export const Email = () => <Filed children='email' className="formimput" />
export const Password = () => <Filed children='password' className="formimput" />
