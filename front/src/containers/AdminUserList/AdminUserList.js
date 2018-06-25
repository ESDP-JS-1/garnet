import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Button, PageHeader} from "react-bootstrap";
import {fetchAllUsers} from "../../store/actions/admin";
import {Link} from "react-router-dom";

import AdminUserListItems from '../../components/AdminUserListItems/AdminUserListItems';

class AdminUserList extends Component {
    componentDidMount() {
        this.props.onFetchUsers();
    }

    render() {
        return (
            <Fragment>
                <PageHeader>
                    All Users
                    { this.props.user && this.props.user.role === 'admin' &&
                    <Link to="/users/create">
                        <Button bsStyle="primary" className="pull-right">
                            Add user
                        </Button>
                    </Link>
                    }
                </PageHeader>

                {this.props.usersList ? this.props.usersList.user_list.map(user => (
                    <AdminUserListItems
                        key={user._id}
                        id={user._id}
                        username={user.username}
                        role={user.role}
                        photo={user.photo}
                    />
                )) : null}
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        usersList: state.admin.usersList,
        user: state.users.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchUsers: () => dispatch(fetchAllUsers())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminUserList);
