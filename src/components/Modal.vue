<template>
  <v-row justify="center">
    <v-dialog :value="dialog" max-width="290" @click:outside="closeModal">
      <v-card>
        <v-card-title class="headline">
          Use Google's location service?
        </v-card-title>

        <v-card-text>
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="closeModal">
            Disagree
          </v-btn>

          <v-btn color="green darken-1" text @click="closeModal">
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: {
    dialog: Boolean
  },
  data() {
    return {};
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    }
  }
};
</script>
