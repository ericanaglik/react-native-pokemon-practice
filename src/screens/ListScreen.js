import React, { Component } from 'react';
import { View, Text, FlatList, Image, ActivityIndicator } from 'react-native';
import { SearchBar } from 'react-native-elements';
import pokemon from './pokemon.js'

class ListScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };

    this.arrayholder = [];
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {


        this.setState({
          data: pokemon,
        });

        this.arrayholder = pokemon;


  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%',
        }}
      />
    );
  };

  searchNameFunction = text => {
    this.setState({
      value: text,
    });

    const newData = this.arrayholder.filter(pokemon => {
      const itemData = `${pokemon.name.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
  };

  searchTypeFunction = text2 => {
    this.setState({
      value2: text2,
    });

    const newType = this.arrayholder.filter(pokemon => {
      const itemType = `${pokemon.type[0].toUpperCase()}`;
      const textType = text2.toUpperCase();

      return itemType.indexOf(textType) > -1;
    });
    this.setState({
      data: newType,
    });
  };

  renderHeader = () => {
    return (
      <View>
      <SearchBar
        placeholder="Search by name"
        lightTheme
        round
        onChangeText={text => this.searchNameFunction(text)}
        autoCorrect={false}
        value={this.state.value}
      />
      <SearchBar
        placeholder="Search by type"
        lightTheme
        round
        onChangeText={text => this.searchTypeFunction(text)}
        autoCorrect={false}
        value={this.state.value2}
      />
      </View>
    );
  };

  render() {
    if (this.state.loading) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => {
            return <Text><Image source={item.img_name} 
            style={{width: 100, height: 100}}/>{item.name} {item.type[0]} {item.type[1]}</Text>
            
          }}
          keyExtractor={pokemon => pokemon.name}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
}

export default ListScreen;

