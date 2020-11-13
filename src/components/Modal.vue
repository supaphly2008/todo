<template>
  <v-row justify="center">
    <v-dialog :value="dialog" max-width="500" @click:outside="closeModal">
      <v-card>
        <v-card-title class="headline"> {{ heading }} Todo </v-card-title>

        <v-form>
          <v-container>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="form.title"
                  :counter="10"
                  label="Title"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="pink darken-1" text @click="cancel"> Cancel </v-btn>

          <v-btn color="green darken-1" text @click="save"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { MODAL_TYPE } from "./Todo";

export default {
  props: {
    dialog: Boolean,
    modalType: String,
    todo: Object,
  },
  data() {
    return {
      form: {
        title: "",
      },
    };
  },
  computed: {
    heading() {
      if (this.modalType === MODAL_TYPE.ADD) {
        return "Add";
      }
      return "Edit";
    },
  },
  methods: {
    closeModal() {
      this.form.title = "";
      this.$emit("closeModal");
    },
    cancel() {
      this.closeModal();
    },
    save() {
      const savedData = {
        id: 4,
        title: this.form.title,
        isDone: false,
      };
      // mock api call to save todo
      setTimeout(() => {
        console.log("saved data", savedData);
        this.closeModal();
      }, 1500);
    },
  },
  created() {
    this.form.title = this.todo.title;
  },
};
</script>
