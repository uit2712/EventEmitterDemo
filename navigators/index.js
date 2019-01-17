import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeView from '../components/HomeView';
import ListViewItemDetail from '../components/listview/ListViewItemDetail';
import React, { Component } from 'react';

const StackHero = createStackNavigator({
    Home: { screen: HomeView },
    ListViewItemDetail: { screen: ListViewItemDetail },
});

// use this in react navigation v3
const StackHeroContainer = createAppContainer(StackHero);

export default class App extends Component<Props> {
    render() {
        return <StackHeroContainer/>
    }
}