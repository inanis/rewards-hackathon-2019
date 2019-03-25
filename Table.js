import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native';

export default class Table extends Component {
    renderRow(item) {
        console.log(item);
        return (
            <View key={item.id} style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>{item.name}</Text>
                <Text>{item.count}</Text>
            </View>
        );
    }

    render() {
        const { data } = this.props;
        return (
            <ScrollView style={{height: '100%', marginTop: 5}}>
                <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>LEADER</Text>
                    <Text>COMPLETION RATE</Text>
                </View>
                {
                    data.map((item) => { // This will render a row for each data element.
                        return this.renderRow(item);
                    })
                }
            </ScrollView>
        );
    }
}