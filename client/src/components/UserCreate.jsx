import React from 'react';
import { SimpleForm, TextInput, DateInput, Create } from 'react-admin';

const UserCreate = (props) => {
    return (
        <Create {...props}>
            <SimpleForm title='Create User'>
                <TextInput source='title' />
                <TextInput source='email' />
            </SimpleForm>
        </Create>
    )
}

export default UserCreate