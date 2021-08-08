<template>
  <div class="register">
    <button @click="logout">ログアウト</button>
    <br />
    <NuxtLnk to="/">戻る</NuxtLnk>
  </div>
</template>

<script>
import firebase from "~/plugins/firebase";
export default {
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          alert("ログアウトが完了しました");
          this.$router.replace("/");
        });
    },
  },
};
</script>
