export const logoutMixin = {
  methods: {
    efetuarLogout() {
      this.$store.commit('DESLOGAR_USER')
      this.$router.push({ name: "login" });
    }
  }
}
