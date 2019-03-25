import React, { Component } from 'react'
import { StyleSheet, View, Text, Modal, Alert, TouchableHighlight, TouchableOpacity } from 'react-native';
import Table from './Table';
import PropTypes from 'prop-types';

export default class OrgCompletionRate extends Component {

    state = {
        modalVisible: false,
        modalData:[]
    };

    setModalState(modalVisible, modalData) {
        this.setState({ modalVisible, modalData });
    }

    render() {

        const { submitted_to_me, others_working, not_started } = this.props.data;
        const submittedCount = submitted_to_me.length;
        const othersCount = others_working.length;
        const notStartedCount = not_started.length;

        return (

            <View style={styles.card}>

                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={{ marginTop: 22 }}>
                        <View>
                            <TouchableOpacity
                                onPress={() => {
                                    this.setModalState(!this.state.modalVisible, []);
                                }}>
                                <Text style={{ color: '#0073c6' }}>Back</Text>
                            </TouchableOpacity>
                            <Table data={this.state.modalData}></Table>
                        </View>
                    </View>
                </Modal>

                <View style={styles.cardHeader}>
                    <Text style={styles.title}>Org. Completion Rate</Text>
                </View>
                <View style={styles.counterContainer}>
                    <View style={styles.counter}>
                        <TouchableOpacity
                            onPress={() => {
                                this.setModalState(true, submitted_to_me);
                            }}>
                            <Text style={styles.counterText}>{submittedCount}</Text>
                        </TouchableOpacity>
                        <Text style={styles.counterLabel}>SUBMITTED BY ME</Text>
                    </View>
                    <View style={styles.counter}>
                        <TouchableOpacity
                            onPress={() => {
                                this.setModalState(true, others_working);
                            }}>
                            <Text style={styles.counterText}>{othersCount}</Text>
                        </TouchableOpacity>
                        <Text style={styles.counterLabel}>OTHERS WORKING</Text>
                    </View>
                    <View style={styles.counter}>
                        <TouchableOpacity
                            onPress={() => {
                                this.setModalState(true, not_started);
                            }}>
                            <Text style={styles.counterText}>{notStartedCount}</Text>
                        </TouchableOpacity>
                        <Text style={styles.counterLabel}>NOT STARTED</Text>
                    </View>
                </View>
            </View >
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
        flex: 1,
        flexDirection: 'row',
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
        flex: 1,
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

OrgCompletionRate.propTypes = {
    data: PropTypes.shape({
        submitted_to_me: PropTypes.array.isRequired,
        others_working: PropTypes.array.isRequired,
        not_started: PropTypes.array.isRequired
    }),
};