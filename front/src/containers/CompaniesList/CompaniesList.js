import React, {Component} from 'react';
import {connect} from 'react-redux';

import {removeUser} from "../../store/actions/admin";



import {fetchAllCompanies} from "../../store/actions/companies";
import {BootstrapTable, InsertModalHeader, TableHeaderColumn} from "react-bootstrap-table";

class AdminUserList extends Component {
    componentDidMount() {
        this.props.onFetchCompanies();
    }


    beforeClose(e) {
        alert(`[Custom Event]: Before modal close event triggered!`);
    }

    handleModalClose(closeModal) {
        // Custom your onCloseModal event here,
        // it's not necessary to implement this function if you have no any process before modal close
        console.log('This is my custom function for modal close event');
        closeModal();
    }

    createCustomModalHeader = (closeModal, save) => {
        return (
            <InsertModalHeader
                className='my-custom-class'
                title='This is my custom title'
                beforeClose={this.beforeClose}
                onModalClose={() => this.handleModalClose(closeModal)}/>
            // hideClose={ true } to hide the close button
        );
    };

    render() {
        const options = {
            insertModalHeader: this.createCustomModalHeader
        };
        return (
            <BootstrapTable data={ this.props.companiesList } options={ options } insertRow>
                <TableHeaderColumn dataField='title' isKey={ true }>Title</TableHeaderColumn>
                <TableHeaderColumn dataField='description'>Description</TableHeaderColumn>
                <TableHeaderColumn dataField='friendly'>Is friendly</TableHeaderColumn>
                <TableHeaderColumn dataField='country'>Country</TableHeaderColumn>
            </BootstrapTable>
        );
    }
}

const mapStateToProps = state => {
    return {
        companiesList: state.companies.companiesList,
        user: state.users.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchCompanies: () => dispatch(fetchAllCompanies()),
        removeUser: id => dispatch(removeUser(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminUserList);
