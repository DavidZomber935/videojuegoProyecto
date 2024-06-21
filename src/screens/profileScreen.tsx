import React, { useEffect, useState } from "react";
import { View, ImageBackground } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import { styles } from "../themes/styles";
import { updateProfile, User } from "firebase/auth";
import { getDatabase, ref, update, query, equalTo, orderByChild, get } from "firebase/database";
import { auth } from "../configs/firebaseConfig";

interface FormUser {
  name: string;
  phone: string;
}

export const ProfileScreen = () => {
  const [formUser, setFormUser] = useState<FormUser>({
    name: "",
    phone: "",
  });

  const [userAuth, setUserAuth] = useState<User | null>(null);

  useEffect(() => {
    const currentUser = auth.currentUser;
    setUserAuth(currentUser);

    setFormUser({
      name: currentUser?.displayName ?? "",
      phone: currentUser?.phoneNumber ?? "",
    });
  }, []);

  const handlerSetValues = (key: string, value: string) => {
    setFormUser({ ...formUser, [key]: value });
  };

  const handlerUpdateUser = async () => {
    if (userAuth) {
      try {
        await updateProfile(userAuth, {
          displayName: formUser.name,
        });

        // Actualizar el nombre en los puntajes
        const db = getDatabase();
        const scoresRef = ref(db, 'scores');
        const userScoresQuery = query(scoresRef, orderByChild('email'), equalTo(userAuth.email));

        const snapshot = await get(userScoresQuery);
        if (snapshot.exists()) {
          const updates: { [key: string]: any } = {};
          snapshot.forEach((childSnapshot) => {
            updates[`${childSnapshot.key}/name`] = formUser.name;
          });

          await update(scoresRef, updates);
        }

        setUserAuth({
          ...userAuth,
          displayName: formUser.name,
        } as User);
        console.log("Perfil actualizado:", userAuth);
      } catch (error) {
        console.error("Error actualizando el perfil:", error);
      }
    }
  };

  return (
    <ImageBackground
      source={require('../images/fondo4.jpg')}
      style={styles.backgroundImage}
    >
      <View>
        <Text style={styles.text} variant="bodyLarge">Bienvenido</Text>
        <Text style={styles.secondaryText} variant="labelLarge">{userAuth?.displayName}</Text>
        <Text style={styles.secondaryText} variant="labelLarge">{userAuth?.phoneNumber}</Text>
        <Text style={styles.text}>Actualizar datos</Text>
        <Text style={styles.secondaryText}>Nombre</Text>
        <TextInput
          mode="outlined"
          label="Escribe tu nombre"
          value={formUser.name}
          onChangeText={(value) => handlerSetValues("name", value)}
        />
        <Text style={styles.secondaryText}>Telefono</Text>
        <TextInput
          mode="outlined"
          label="Escribe tu número de telefono"
          value={formUser.phone}
          onChangeText={(value) => handlerSetValues("phone", value)}
          disabled
        />
        <Text style={styles.secondaryText}>Correo</Text>
        <TextInput mode="outlined" value={userAuth?.email!} disabled />
        <Button style={styles.button} mode="contained" onPress={handlerUpdateUser}>
          Actualizar
        </Button>
      </View>
    </ImageBackground>
  );
};