import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Image,
    View,
    Text
} from 'react-native';
import { withNavigation } from 'react-navigation';

class ListViewItem extends Component<Props> {
    constructor(props: Props) {
        super(props);

        this.state = {
            hero: this.props.hero // we pass hero through props
        };
    }

    goToListViewItemDetail = () => {
        const { navigate } = this.props.navigation;
        navigate('ListViewItemDetail', { hero: this.state.hero, updateHeroEvent: this.props.updateHeroEvent });
    }

    render() {
        return (
            <TouchableOpacity style={styles.listViewItemContainer} onPress={this.goToListViewItemDetail}>
                <Image source={this.state.hero.avatar} style={styles.avatar}/>
                <View style={styles.info}>
                    <Text style={styles.heroName}>{this.state.hero.name}</Text>
                    <Text style={styles.text}>{this.state.hero.superpower}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

export default withNavigation(ListViewItem);

const styles = StyleSheet.create({
    listViewItemContainer: {
        flexDirection: 'row',
        margin: 20
    },
    info: {
        justifyContent: 'center',
        marginLeft: 20
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
    },
    text: {
        fontSize: 20
    },
    heroName: {
        fontSize: 25,
        fontWeight: 'bold'
    }
});