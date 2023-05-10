import React from "react";
import { View, TouchableOpacity, Image } from "react-native";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <View style={{ flexDirection: "row", alignItems: "center", padding: 10, position: "sticky", backgroundColor: "#000", top: 0, justifyContent: "space-between" }}>
    <TouchableOpacity onPress={() => navigation.navigate("Home")} style={{ alignItems: "center" }}>
      <Image source={logo} alt="logo" style={{ height: 45 }} />
    </TouchableOpacity>
    <SearchBar />
  </View>
);

export default Navbar;
