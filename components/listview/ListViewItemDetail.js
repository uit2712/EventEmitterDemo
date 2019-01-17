import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    TextInput,
    ToastAndroid
} from 'react-native';

export default class ListViewItemDetail extends Component<Props> {
    constructor(props: Props) {
        super(props);

        let hero, updateHeroEvent;
        if (this.props.navigation
            && this.props.navigation.state
            && this.props.navigation.state.params) {
                updateHeroEvent = this.props.navigation.state.params.updateHeroEvent;
                hero = this.props.navigation.state.params.hero;
            }

        this.state = {
            hero: hero,
            updateHeroEvent: updateHeroEvent,
        };
    }

    editHeroName = (name: string) => {
        let hero = this.state.hero;
        if (hero) {
            hero.name = name;
            this.setState({ hero });
        }
    }

    updateHero = () => {
        if (this.state.updateHeroEvent)
            this.state.updateHeroEvent.emit("onUpdateHero", this.state.hero);
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.inputHeroName}
                    value={this.state.hero ? this.state.hero.name : ""}
                    onChangeText={(name) => this.editHeroName(name)}
                    placeholder="Hero name..."/>
                <TouchableOpacity style={styles.buttonContainer} onPress={this.updateHero}>
                    <Text style={styles.buttonText}>Update</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    buttonContainer: {
        backgroundColor: 'violet',
        width: '100%',
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 20,
        color: 'white'
    },
    inputHeroName: {
        fontSize: 20,
        width: '100%',
        borderWidth: 1,
        borderBottomColor: 'violet',
        marginVertical: 10,
    }
});