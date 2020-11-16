<template>
  <v-row justify="center">
    <v-dialog :value="dialog" max-width="500" @click:outside="closeModal">
      <v-card>
        <v-card-title class="headline"> {{ heading }} Todo </v-card-title>

        <v-form>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="form.title"
                  :counter="20"
                  label="Title"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-switch
                  v-model="dueDate"
                  label="Set Due Date"
                  color="pink"
                  hide-details
                ></v-switch>
              </v-col>
              <v-col cols="12">
                <v-menu
                  v-if="dueDate"
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :return-value.sync="form.date"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="form.date"
                      label="Due Date"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    :allowed-dates="allowedDates"
                    v-model="form.date"
                    no-title
                    scrollable
                  >
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu = false">
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.menu.save(form.date)"
                    >
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-menu>
              </v-col>
            </v-row>
          </v-container>
        </v-form>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="pink darken-1" text @click="closeModal"> Cancel </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="save"
            :disabled="!form.title"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { MODAL_TYPE } from "./Todo";
import { formatDateTime } from "../utils";

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
        // date: new Date().toISOString().substr(0, 10),
        date: formatDateTime(new Date(), "yyyy-MM-dd").substr(0, 10),
      },
      menu: false,
      dueDate: false,
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
    allowedDates(val) {
      return new Date().toISOString().substr(0, 10) <= val;
    },
    closeModal() {
      this.form.title = "";
      this.$emit("closeModal");
    },
    save() {
      if (this.modalType === MODAL_TYPE.ADD) {
        const todo = {
          id: this.$uuid.v1(),
          title: this.form.title,
          isDone: false,
          createdTime: new Date(),
          dueDate: new Date(this.form.date),
        };
        this.$emit("saveTodo", todo);
      } else {
        const todo = { ...this.todo, title: this.form.title };
        this.$emit("editTodo", todo);
      }

      this.closeModal();
    },
  },
  created() {
    this.form.title = this.todo.title;
  },
};
</script>
