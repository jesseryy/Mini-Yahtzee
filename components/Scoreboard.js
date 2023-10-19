import { useState, useEffect } from "react";
import { Text, View, Pressable } from "react-native";
import { DataTable } from "react-native-paper";
import Header from "./Header";
import Footer from "./Footer";
import { NBR_OF_SCOREBOARD_ROWS, SCOREBOARD_KEY } from "../constants/Game";
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import style from "../style/style";

export default Scoreboard = ({ navigation }) => {

    const [scores, setScores] = useState([]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getScoreboardData();
        });
        return unsubscribe;
    }, [navigation]);

    const getScoreboardData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem(SCOREBOARD_KEY);

            if (jsonValue !== null) {
                let tmpScores = JSON.parse(jsonValue);
                setScores(tmpScores);
            }
        }
        catch (e) {
            console.log('Read error: ' + e);
        }
    }

    const clearScoreboard = async () => {
        try {
            await AsyncStorage.clear();
            setScores([]);
        }
        catch (e) {
            console.log('Clear error: ' + e);
        }
    }

    return (
        <>
            <Header />
            <View>
                <Text>Scoreboard here...</Text>
                {scores.length === 0 ?
                    <Text>Scoreboard is empty</Text>
                    :
                    scores.map((player, index) => (
                        index < NBR_OF_SCOREBOARD_ROWS &&
                        <DataTable.Row key={player.key}>
                            <DataTable.Cell><Text>{index + 1}.</Text></DataTable.Cell>
                            <DataTable.Cell><Text style={style.scoreBoard}>{player.name}</Text></DataTable.Cell>
                            <DataTable.Cell><Text style={style.scoreBoard}>{player.date}</Text></DataTable.Cell>
                            <DataTable.Cell><Text style={style.scoreBoard}>{player.time}</Text></DataTable.Cell>
                            <DataTable.Cell><Text style={style.scoreBoard}>{player.points}</Text></DataTable.Cell>
                        </DataTable.Row>
                    ))
                }
            </View>
            <View style={style.container}>               
                <Pressable
                    style={style.button}
                    onPress={() => clearScoreboard()}>
                        <Text style={style.title}>CLEAR SCOREBOARD</Text>
                  <MaterialCommunityIcons name="delete" size={40} color="red" />
                </Pressable>
            </View>
            <Footer />
        </>
    )
}