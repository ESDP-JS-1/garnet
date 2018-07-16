import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Button, PageHeader} from "react-bootstrap";
import {fetchAllUsers, removeUser} from "../../store/actions/admin";
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
                    <Link to="/create-user/">
                        <Button bsStyle="primary" className="pull-right">
                            Add user
                        </Button>
                    </Link>
                    }
                </PageHeader>

                {this.props.companiesList ? this.props.companiesList.map(user => (
                    <AdminUserListItems
                        key={user._id}
                        id={user._id}
                        username={user.username}
                        role={user.role}
                        photo={user.photo}
                        remove={() => this.props.removeUser(user._id)}
                    />
                )) : null}
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        companiesList: state.admin.companiesList,
        user: state.users.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchUsers: () => dispatch(fetchAllUsers()),
        removeUser: id => dispatch(removeUser(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminUserList);
