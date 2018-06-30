import React from 'react';
import {fetchSkill, fetchSkillCategory} from "../../store/actions/skills";
import {connect} from "react-redux";
import LTT from "list-to-tree";
import TreeView from "treeview-react-bootstrap";

class SkillsCategories extends React.Component {

  componentDidMount(){
    this.props.fetchListCategory();
    this.props.fetchListSkills();
  }


  renderTree = (arr) => {
      // console.log(arr);
      const list = arr.map(value => {
      if (!value.parentId) {
        value.parentId = 0;
      }
      value.text = value.title
      return value;
    });
    const currentTree = new LTT(list, {
      key_id: '_id',
      key_parent: 'parentId',
      key_child: 'nodes'
    });

    return currentTree.GetTree();
  };

  render() {
    const skillList = this.renderTree(this.props.skillCategory.concat(this.props.skillList));
    return(
      <TreeView data={skillList} />
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