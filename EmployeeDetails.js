import React, {Component} from 'react';
import { View, ListView, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import ActionBar from './ActionBar';
import EmployeeListItem from './EmployeeListItem';
import * as employeeService from './services/employee-service-mock';
import StrengthsChart from './StrengthsChart';

export default class EmployeeDetails extends Component {

    constructor(props) {
        super(props);

        const data = props.navigation.getParam('data');
        this.state = {dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})};
        employeeService.findById(data.id).then(employee => {
            this.setState({
                employee: employee,
                dataSource: this.state.dataSource.cloneWithRows(employee.reports)
            });
        });
    }

    openManager = () => {
        this.props.navigation.navigate({
            routeName: 'details',
            params: {
                data: this.props.data
            },
            key: this.props.data.id
        });
    }

    render() {
        if (this.state && this.state.employee) {
            let employee = this.state.employee;
            let manager;
            if (employee.manager) {
                manager = <TouchableOpacity style={styles.manager} onPress={this.openManager.bind(this)}>
                            <Image source={{uri: employee.manager.picture}} style={styles.smallPicture} />
                            <Text style={styles.lightText}>{employee.manager.firstName} {employee.manager.lastName}</Text>
                            <Text style={styles.lightText}>{employee.manager.title}</Text>
                          </TouchableOpacity>;
            }
            let directReports;
            if (employee.reports && employee.reports.length > 0) {
                directReports =
                    <ListView style={styles.list}
                              dataSource={this.state.dataSource}
                              enableEmptySections={true}
                              renderRow={(data) => <EmployeeListItem navigation={this.props.navigation} data={data} />}
                              renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
                    />;
            } else {
                directReports = <View style={styles.emptyList}><Text style={styles.lightText}>No direct reports</Text></View>;
            }
            return (
                <ScrollView style={styles.container}>
                    <View style={styles.header}>
                        {manager}
                        <Image source={{uri: employee.picture}} style={styles.picture} />
                        <Text style={styles.bigText}>{employee.firstName} {employee.lastName}</Text>
                        <Text style={[styles.mediumText, styles.lightText]}>{employee.title}</Text>
                        <ActionBar mobilePhone={employee.mobilePhone} email={employee.email} />
                        <StrengthsChart />
                    </View>
                    {directReports}
                </ScrollView>
            );
        } else {
            return null;
        }
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1
    },
    header: {
        alignItems: 'center',
        backgroundColor: '#FAFAFF',
        paddingBottom: 4,
        borderBottomColor: '#F2F2F7',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    manager: {
        paddingBottom: 10,
        alignItems: 'center'
    },
    picture: {
        width: 80,
        height: 80,
        borderRadius: 40
    },
    smallPicture: {
        width: 40,
        height: 40,
        borderRadius: 20
    },
    mediumText: {
        fontSize: 16,
    },
    bigText: {
        fontSize: 20
    },
    separator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#AAAAAA',
    },
    list: {
        flex: 1,
    },
    emptyList: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    lightText: {
        color: '#C7C7CC'
    }
});