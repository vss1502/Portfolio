<template>
    <div class="notes-wrapper">
          <div class="note" :class = "{full: !grid, height: note.priority == 'height', medium: note.priority == 'medium',}"  v-for="(note, index) in notes" :key="index">
            <p @click="removeNote(note)" class="remove">x</p>
            <p @click="editNote(note)" class="note-title">{{note.title}}</p>
            <p class="note-descr">{{note.descr}}</p>
            <p class="note-date">{{note.date}}</p>
          </div>
        </div>
</template>

<script>


export default {
    
    props: {
        notes: {
            type: Array,
            required: true
        },
        grid: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        removeNote(note){
            let removeId = note.id;
            
            this.$emit('remove', removeId);
        },
        editNote(note){
            console.log(note);
        }
    }
    
}
</script>

<style lang="scss" scoped>
.notes-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.note {
    position: relative;
  width: 48%;
  padding: 18px 20px;
  margin-bottom: 20px;
  background-color: #ffffff;
  transition: all .25s cubic-bezier(.02,.01,.47,1);
  box-shadow: 0 30px 30px rgba(0,0,0,.02);
  border-radius: 8px;
  &:hover {
    box-shadow: 0 30px 30px rgba(0,0,0,.04);
    transform: translate(0,-6px);
    transition-delay: 0s !important;
  }

  &.full {
    width: 100%;
  }

  &.medium {
    background: rgb(255, 255, 156);
  }

  &.height {
    background: rgb(255, 134, 134);
  }

  .remove {
      position: absolute;
      right: 10px;
      top: 3px;
      cursor: pointer;
  }

  .note-title {
      font-size: 18px;
      margin-bottom: 15px;
      font-weight: 700;
  }

  .note-descr {
      font-size: 18px;
      margin-bottom: 15px;
  }
  .note-date {
      font-size: 14px;
      color: #909090;
  }
}
</style>