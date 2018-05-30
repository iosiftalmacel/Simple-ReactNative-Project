import React from 'react';
import { Text, View, StatusBar, FlatList } from 'react-native';
import { Card, CardPlaceholder } from '../../components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Strings from '../../utils/strings';
import styles from './styles';
import * as BrowseActions from '../../actions/BrowseActions';

class BrowsePanel extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadBrowseList();
  }

  render() {
    const placeholder = 0;
    var { items, navigation } = this.props;
    if (items.length <= 0) items = [placeholder, placeholder, placeholder];

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        <FlatList style={{ width: '100%', paddingTop: 5 }}
          data={items}
          renderItem={({ item }) => {
            if (item == placeholder)
              return <CardPlaceholder/>
            else
              return <Card itemData = {item} navigation = {navigation} />
          }}
        />
      </View>
    );
  }
}


function mapStateToProps(state, props) {
  return {
    loading: state.browseReducer.loading,
    items: state.browseReducer.items
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(BrowseActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BrowsePanel);
