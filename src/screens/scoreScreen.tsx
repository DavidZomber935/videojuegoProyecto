import React, { useEffect, useState } from "react";
import { View, FlatList, Text, ImageBackground } from "react-native";
import { getDatabase, ref, onValue } from "firebase/database";
import { styles } from "../themes/styles";

interface Score {
  email: string;
  name: string;
  score: number;
}

export const ScoreScreen = () => {
  const [scores, setScores] = useState<Score[]>([]);

  useEffect(() => {
    const db = getDatabase();
    const scoresRef = ref(db, "scores");
    onValue(scoresRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const parsedScores = Object.keys(data).map((key) => data[key]);
        parsedScores.sort((a, b) => b.score - a.score);
        setScores(parsedScores);
      }
    });
  }, []);

  return (
    <ImageBackground
      source={require("../images/fondo5.jpg")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <FlatList
          data={scores}
          keyExtractor={(item) => item.email + item.score}
          renderItem={({ item }) => (
            <View style={styles.scoreItem}>
              <Text style={styles.scoreText}>Correo: {item.email}</Text>
              <Text style={styles.scoreText}>Nombre: {item.name}</Text>
              <Text style={styles.scoreText}>Puntaje: {item.score}</Text>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
};