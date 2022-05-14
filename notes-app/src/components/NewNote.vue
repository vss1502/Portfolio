<template>
    <div class="new_note">
          <label for="newNoteTitle">Title</label>
          <input class="title-input" v-model="note.title" type="text" id="newNoteTitle">
          <label for="newNoteDescr">Description</label>
          <textarea v-model="note.descr" name="" id="newNoteDescr" class="descr-input"></textarea>
          <label for="newNotePriority">Priority</label>
          <select v-model="note.priority" name="" id="newNotePriority" class="priority-select">
              <option value="standart">Standart</option>
              <option value="medium">Medium</option>
              <option value="height">Height</option>
          </select>
          <button @click="addNote" class="add-note-btn">Add new note</button>
        </div>
</template>

<script>
export default {
    
    props: {
        note: {
            type: Object,
            required: true
        },
        notes: {
            type: Array,
            required: true
        }
    },
    methods: {
        addNote(){
            this.note.id = this.notes.length + 1;
           this.$emit('addNote', this.note)
        }
    }
}
</script>

<style lang="scss">
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.new_note {
    margin-bottom: 30px;
    input,
    textarea,
    select {
        width: 100%;
        margin-bottom: 30px;
    }
    label {
        display: block;
        font-size: 18px;
        margin-bottom: 10px;
    }
    .title-input {
        height: 40px;
        border: none;
        border-radius: 8px;
        padding: 5px 10px;
        outline: none;
        font-size: 16px;
    }

    .descr-input {
        width: 100%;
        min-height: 100px;
        resize: none;
        border: none;
        border-radius: 8px;
        outline: none;
        padding: 5px 10px;
        font-size: 16px;
    }

    .priority-select {
         width: 100%;
        height: 40px;
         border: none;
        border-radius: 8px;
        outline: none;
        padding: 5px 10px;
        cursor: pointer;
    }

    .add-note-btn {
        margin: 0 auto;
        display: block;
        background: rgb(115, 115, 241);
        padding: 15px 20px;
        border: none;
        outline: none;
        border-radius: 20px;
        cursor: pointer;
        color: #fff;
        text-transform: uppercase;
    }

}
</style>