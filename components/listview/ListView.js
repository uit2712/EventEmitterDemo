import React, { Component } from 'react';
import {
    ScrollView
} from 'react-native';
import Hero from './models/Hero';
import ListViewItem from './ListViewItem';

export default class ListView extends Component<Props> {
    constructor(props: Props) {
        super(props);

        this.state = {
            heroes: this.props.heroes
        };
    }

    showListHeroes() {
        let result;
        result = this.state.heroes.map((hero: Hero, key: any) =>
            <ListViewItem hero={hero} key={key}/>
        );

        return result;
    }

    render() {
        return (
            <ScrollView>
                {this.showListHeroes()}
            </ScrollView>
        )
    }
}