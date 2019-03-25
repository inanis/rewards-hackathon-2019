import React, { Component } from 'react'
import MyTasks from './MyTasks';
import { Button, Alert, StyleSheet, View, Text, ScrollView } from 'react-native';
import OrgCompletionRate from './OrgCompletionRate';
import { getData } from './api';

export default class WidgetList extends Component {

    state = {
        my_tasks: {
            submitted_to_me: 0,
            in_progress: 0,
            not_started: 0
        },
        org_completion_rate: {
            submitted_to_me: [],
            others_working: [],
            not_started: []
        }
    }

    componentDidMount() {
        getData().then(data => {
            const { my_tasks, org_completion_rate } = data;
            this.setState({ my_tasks, org_completion_rate });
        })
    }

    render() {
        return (
            <ScrollView style={styles.list}>
                <MyTasks data={this.state.my_tasks} />
                <OrgCompletionRate data={this.state.org_completion_rate} />
                <View>
                    <Button
                        onPress={() => {
                            Alert.alert('You tapped the button!');
                          }}
                        title="Learn More"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                        />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        backgroundColor: '#e6e6e6',
        padding: 10,
        paddingTop: 5,
        paddingBottom: 5,
        //height: '100%'
        //justifyContent: 'flex-start',
        //alignItems: 'flex-start'
    }
});