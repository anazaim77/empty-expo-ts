import { RootStackScreenProps } from "@/config/navigator/types";
import { useAuthStore } from "@/config/state";
import { QueryHooks } from "@/hooks";
import React, { useEffect } from "react";
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";

interface LoginPageProps {}

const LoginPage: React.FC<
  RootStackScreenProps<"Authentication"> & LoginPageProps
> = (props) => {
  const { authToken, isLoggedIn, doLogin } = useAuthStore();
  const { data: postData } = QueryHooks.useGetPosts();
  const postMutate = QueryHooks.useSendPosts();

  useEffect(() => {
    if (isLoggedIn) {
      props.navigation.replace("Root");
    }
  }, [isLoggedIn]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text>LoginPage</Text>
        <Text>Ini Token : {authToken}</Text>
        <Button
          title={"Coba Login"}
          onPress={() => {
            // doLogin("iniCeritanyaToken");
            postMutate.mutate({
              title: "Judulnya",
              body: "Isinya",
              userId: 12123,
            });
          }}
        />
        {postData?.map((item, index) => (
          <Text key={`post_${index}`}>{item.title}</Text>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {},
});
