import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export default class MyTasks extends Component {

    render() {
        console.log('props', this.props);

        const { submitted_to_me, in_progress, not_started } = this.props.data;

        return (
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={styles.title}>My Tasks</Text>
                </View>
                <View style={styles.counterContainer}>
                    <View style={styles.counter}>
                        <Text style={styles.counterText}>{submitted_to_me}</Text>
                        <AnimatedCircularProgress
                            size={30}
                            width={3}
                            fill={50}
                            tintColor="#00e0ff"
                            rotation={0}
                            onAnimationComplete={() => console.log('onAnimationComplete')}
                            backgroundColor="#3d5875">
                            {
                                (fill) => (
                                    <Text>
                                        {50}
                                    </Text>
                                )
                            }
                        </AnimatedCircularProgress>
                        <Text style={styles.counterLabel}>SUBMITTED BY ME</Text>
                    </View>
                    <View style={styles.counter}>
                        <Text style={styles.counterText}>{in_progress}</Text>
                        <Text style={styles.counterLabel}>IN PROGRESS</Text>
                    </View>
                    <View style={styles.counter}>
                        <Text style={styles.counterText}>{not_started}</Text>
                        <Text style={styles.counterLabel}>NOT STARTED</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
        marginTop: 5,
        marginBottom: 5,
        height: 130
    },
    cardHeader: {
        //flex: 1,
        //flexDirection: 'row',
        //borderWidth: 1,
        //borderColor: '#d6d7da',
        //height: 20
    },
    title: {
        fontSize: 30,
        color: '#505050'
    },
    counter: {
        width: '33.33%',
        height: 50,
        //flex: 1,
        //borderWidth: 1,
        //borderColor: '#d6d7da'
    },
    counterText: {
        color: '#0073c6'
    },
    counterContainer: {
        flex: 1,
        flexDirection: 'row',
        //justifyContent: 'stretch',
        height: 20,
        marginTop: 20
    },
    counterLabel: {
        fontSize: 10,
        fontWeight: '100',
        color: '#a3a3a3',
        // textAlign: 'center',
        paddingTop: 0,
    }
});

MyTasks.propTypes = {
    data: PropTypes.shape({
        submitted_to_me: PropTypes.number.isRequired,
        in_progress: PropTypes.number.isRequired,
        not_started: PropTypes.number.isRequired
    }),
};