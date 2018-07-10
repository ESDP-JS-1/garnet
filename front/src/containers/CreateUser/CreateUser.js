import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Button, Col, Form, FormGroup, PageHeader} from "react-bootstrap";
import FormElement from "../../components/UI/Form/FormElement";
import {createUser} from "../../store/actions/admin";

class CreateUser extends Component {
    state = {
        username: '',
        password: '',
        role: ''
    };

    inputChangeHandler = event => {
        this.setState({[event.target.name] : event.target.value});
    };


    submitFormHandler = event => {
        event.preventDefault();

        this.props.createUser(this.state);
    };

    render() {
        return (
            <Fragment>
                <PageHeader>Create user</PageHeader>

                <Form horizontal onSubmit={this.submitFormHandler}>
                    <FormElement
                        propertyName="username"
                        title="Login"
                        autoComplete="current-username"
                        type="text"
                        value={this.state.username}
                        changeHandler={this.inputChangeHandler}
                        required
                    />

                    <FormElement
                        propertyName="password"
                        title="Password"
                        autoComplete="current-password"
                        type="password"
                        value={this.state.password}
                        changeHandler={this.inputChangeHandler}
                        required
                    />

                    <FormElement
                        propertyName="role"
                        title="Role"
                        type="select"
                        options={[{id: 'employee', title: 'Employee'}, {id: 'admin', title: 'Administrator'}]}
                        value={this.state.role}
                        changeHandler={this.inputChangeHandler}
                        required
                    />

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button bsStyle="primary" type="submit">{this.state.edit ? 'Edit' : 'Create'}</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    error: state.admin.createUserError
});

const mapDispatchToProps = dispatch => ({
    createUser: userData => dispatch(createUser(userData))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);