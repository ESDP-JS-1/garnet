import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BootstrapTable, InsertModalHeader, TableHeaderColumn} from "react-bootstrap-table";
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';


import {deleteCompany, fetchAllCompanies} from "../../store/actions/companies";

class AdminUserList extends Component {
    componentDidMount() {
        this.props.onFetchCompanies();
    }

    cellEditButton(cell, row, enumObject, rowIndex) {
        let theButton;
        // for(var group in this.state.jsonFromDatabase){
        //     if (this.state.jsonFromDatabase[group].id !== row.id){
        //         // Display this button if the group is not in the database
        //         theButton = <button style={{ backgroundColor: "blue"}}
        //                             type="button"
        //                             onClick={() => this.onClickGroupSelected(cell, row, rowIndex)}>
        //             Process the group
        //         </button>
        //     } else {
        //         // Display this button if the group is already in the database
        theButton = <button style={{backgroundColor: "blue"}}
                            type="button"
                            onClick={() => this.onClickGroupToUpdate(cell, row, rowIndex)}>
            Edit
        </button>
        //     }
        // }
        return theButton
    }

    cellDeleteButton(cell, row){
        // console.log(row._id);
        let itemId = row._id;
        return <button style={{backgroundColor: "red"}}
                                type="button"
                                onClick={()=>this.props.onDeleteCompanies(itemId)}>
            Delete
        </button>;
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
            <BootstrapTable data={this.props.companiesList} options={options} insertRow>
                <TableHeaderColumn dataField='_id' isKey hidden>ID</TableHeaderColumn>
                <TableHeaderColumn dataField='title'>Title</TableHeaderColumn>
                <TableHeaderColumn dataField='description'>Description</TableHeaderColumn>
                <TableHeaderColumn dataField='friendly' width='100'>Is friendly</TableHeaderColumn>
                <TableHeaderColumn dataField='country' width='100'>Country</TableHeaderColumn>
                <TableHeaderColumn dataField='button' width='100'
                                   dataFormat={this.cellEditButton}>Edit</TableHeaderColumn>
                <TableHeaderColumn dataField='button' width='100'
                                   dataFormat={this.cellDeleteButton}>Delete</TableHeaderColumn>
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
        onDeleteCompanies: (id) => dispatch(deleteCompany(id)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminUserList);
