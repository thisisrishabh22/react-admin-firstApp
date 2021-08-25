import React from 'react';
import { List, SimpleForm, TextInput, DateInput, Create } from 'react-admin';

const PostCreate = (props) => {
    return (
        <Create {...props}>
            <SimpleForm>
                <TextInput source='title' />
                <TextInput options={{ multiline: true }} source='body' />
                <DateInput label='Published' source='publishedDate' />
            </SimpleForm>
        </Create>
    )
}

export default PostCreate