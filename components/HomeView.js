/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { ListHeroes } from "./listview/data/MockListHeroes";
import ListView from "./listview/ListView";
import EventEmitter from 'events';
import Hero from "./listview/models/Hero";

export default class App extends Component<Props> {
    constructor(props: Props) {
        super(props);

        this.state = {
            heroes: ListHeroes
        };

        this.updateHeroEvent = new EventEmitter();
    }

    componentWillMount() {
        this.updateHeroEvent.addListener('onUpdateHero', (hero: Hero) => this.updateHero(hero));
    }

    componentWillUnmount() {
        this.updateHeroEvent.removeAllListeners();
    }

    updateHero = (hero: Hero) => {
        let heroes = this.state.heroes;
        if (heroes && hero) {
            for (let i = 0; i < heroes.length; i++) {
                if (hero.id === heroes[i].id) {
                    heroes[i].updateInfo(hero);
                    i = heroes.length;
                }
            }

            this.setState({ heroes });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView heroes={this.state.heroes} updateHeroEvent={this.updateHeroEvent} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#F5FCFF"
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
    }
});
