import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Button, PageHeader} from "react-bootstrap";
import {fetchAllUsers} from "../../store/actions/users";
import {Link} from "react-router-dom";

import ProductListItem from '../../components/AdminUserListItems/AdminUserListItems';

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
                    <Link to="/products/new">
                        <Button bsStyle="primary" className="pull-right">
                            Add user
                        </Button>
                    </Link>
                    }
                </PageHeader>

                {this.props.products.map(product => (
                    <ProductListItem
                        key={product._id}
                        id={product._id}
                        title={product.title}
                        price={product.price}
                        image={product.image}
                    />
                ))}
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.products.products,
        user: state.users.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchUsers: () => dispatch(fetchAllUsers())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminUserList);
