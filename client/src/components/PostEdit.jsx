import React from 'react';
import { Edit, SimpleForm, TextInput, DateInput, Create } from 'react-admin';

const PostEdit = (props) => {
    return (
        <Edit title='Edit Post' {...props}>
            <SimpleForm>
                <TextInput source='id' disabled />
                <TextInput source='title' />
                <TextInput options={{ multiline: true }} source='body' />
                <DateInput label='Published' source='publishedDate' />
            </SimpleForm>
        </Edit>
    )
}

export default PostEdit