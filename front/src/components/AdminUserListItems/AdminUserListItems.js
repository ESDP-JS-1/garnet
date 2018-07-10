import React from 'react';
import {Button, Image, Panel} from "react-bootstrap";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

import config from '../../config';
import {LinkContainer} from "react-router-bootstrap";

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

                <Button bsStyle="danger"
                        className="pull-right"
                        onClick={props.remove}
                >Delete
                </Button>
                <LinkContainer to={`/edit-user/${props.id}`}>
                    <Button bsStyle="primary" className="pull-right" style={{marginRight: '10px'}}>
                        Edit
                    </Button>
                </LinkContainer>
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
