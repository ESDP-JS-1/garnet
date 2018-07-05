import React from 'react';
import {fetchSkill, fetchSkillCategory} from "../../store/actions/skills";
import {connect} from "react-redux";
import LTT from "list-to-tree";
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css';
import NodeItem from "../../components/NodeItem/NodeItem";

class SkillsCategories extends React.Component {
  state = {
    treeData: []
  };

  componentDidMount() {
    this.props.fetchListCategory();
    this.props.fetchListSkills();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.skillCategory !== this.props.skillCategory || prevProps.skillList !== this.props.skillList){
      this.renderTree(this.props.skillCategory.concat(this.props.skillList));
    }
  }


  renderTree = (arr) => {
    const list = arr.map(value => {
      if (!value.parentId) {
        value.parentId = 0;
      }
      return value;
    });
    const currentTree = new LTT(list, {
      key_id: '_id',
      key_parent: 'parentId',
      key_child: 'children'
    });

    this.setState(prevState => {
      return prevState.treeData = currentTree.GetTree()
    });
  };

  render() {
    return (
      <div style={{ height: '400px' }}>
        <SortableTree
          treeData={this.state.treeData}
          onChange={treeData => this.setState({ treeData })}
          getNodeKey={({node}) => node._id}
          nodeContentRenderer={NodeItem}
        />
      </div>
    )
  }
}

const initMapDispatchToProps = dispatch => ({
  fetchListSkills: () => dispatch(fetchSkill()),
  fetchListCategory: () => dispatch(fetchSkillCategory())
});

const initMapStateToProps = state => ({
  skillCategory: state.skill.listCategory,
  skillList: state.skill.listSkills
});
export default connect(initMapStateToProps, initMapDispatchToProps)(SkillsCategories);