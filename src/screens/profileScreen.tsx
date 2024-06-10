import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import { styles } from "../themes/styles";
import firebase, { updateProfile } from "firebase/auth";
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

  const [userAuth, setUserAuth] = useState<firebase.User | null>(null);

  useEffect(() => {
    setUserAuth(auth.currentUser);

    setFormUser({
      name: auth.currentUser?.displayName ?? "",
      phone: auth.currentUser?.phoneNumber ?? "",
    });
  }, []);
  const handlerSetValues = (key: string, value: string) => {
    setFormUser({ ...formUser, [key]: value });
  };

  const handlerUpdateUser = async () => {
    await updateProfile(userAuth!, {
      displayName: formUser.name
    })
  };

  return (
    <View>
      <Text variant="bodyLarge">Bienvenido</Text>
      <Text variant="labelLarge">{userAuth?.displayName}</Text>
      <Text variant="labelLarge">{userAuth?.phoneNumber}</Text>
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
      />
      <Text style={styles.secondaryText}>Correo</Text>
      <TextInput mode="outlined" value={userAuth?.email!} disabled />
      <Button style={styles.button} mode="contained" onPress={handlerUpdateUser}>
        Actualizar
      </Button>
    </View>
  );
};
