import React from 'react';
import {Image, Panel} from "react-bootstrap";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

import config from '../../config';

const AdminUserListItems = props => {
    let image = null;

    if (props.photo) {
        image = config.apiUrl + '/uploads/' + props.photo;
    }

    return (
        <Panel>
            <Panel.Body>
                <Image
                    style={{width: '100px', marginRight: '10px'}}
                    src={image}
                    thumbnail
                />
                <Link to={'/products/' + props.id}>
                    {props.username}
                </Link>
                <strong style={{marginLeft: '10px'}}>
                    {props.role}
                </strong>
            </Panel.Body>
        </Panel>
    );
};

AdminUserListItems.propTypes = {
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    photo: PropTypes.string
};

export default AdminUserListItems;
