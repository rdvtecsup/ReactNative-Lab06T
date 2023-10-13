import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { database } from "../database/firebase";
import {
  QuerySnapshot,
  collection,
  onSnapshot,
  orderBy,
  query,
  queryEqual,
} from "firebase/firestore";
import Usuarios from "./Usuarios";

const UserList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const collectionRef = collection(database, "usuarios");
    const q = query(collectionRef, orderBy("name", "desc"));
    const unsuscribe = onSnapshot(q, (QuerySnapshot) => {
      setUsers(
        QuerySnapshot.docs.map((doc) => ({
          id: doc.id,
          email: doc.data().email,
          name: doc.data().name,
          phone: doc.data().phone
        }))
      );
    });
    return unsuscribe
  },[]);
  return (
    <View>
      <Text>Users List</Text>
      {users.map(usuario => <Usuarios key={usuario.id} {...usuario}/>)}
    </View>
  );
};

export default UserList;
