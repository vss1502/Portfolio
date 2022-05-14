<template>
  <div id="App" class="notes">
    <div class="container">
      <div class="notes_inner">
        <h1 class="title">{{title}}</h1>

        <message v-if="message" :message="message"/>

        <newNote :note="note" @addNote="addNote" :notes="notes"/>

        <div class="tools">
            <search placeholder="Search" :value="search" @search = "search=$event"/>

            <div class="view">
              <svg :class = "{active: grid}" @click="grid=true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
              <svg :class = "{active: !grid}" @click="grid=false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line></svg>
            </div>
        </div>

        
        
        <notes :notes="notesFilter" @remove = "removeNote" :grid="grid"/>

        
       

        
      </div>
    </div>
  </div>
</template>

<script>

import message from '@/components/Message.vue'
import newNote from '@/components/NewNote.vue'
import notes from '@/components/Notes.vue'
import search from '@/components/Search.vue'


export default {
 
  name: 'App',
  components: {
    message, newNote, notes, search
  },
 
  data() {
    return {
      title: "Notes App",
      message: null,
      grid: true,
      search: '',
      note: {
        title: "",
        descr: "",
        id: null,
        priority: "standart",
      },
      notes: [
        {
          id: 1,
          title: "First title",
          descr: "First description",
          priority: "standart",
          date: new Date(Date.now()).toLocaleString()
        },
        {
          id: 2,
          title: "Second title",
          descr: "Second description",
          priority: "standart",
          date: new Date(Date.now()).toLocaleString()
        },
        {
          id: 3,
          title: "Third title",
          descr: "Third description",
          priority: "standart",
          date: new Date(Date.now()).toLocaleString()
        },
      ]
    }
  },
  methods: {
    addNote() {
      if(this.note.title === ''){
        console.log();
        this.message = "title can't be blank";
        return false;
      }

      this.notes.push({
        title: this.note.title,
        descr: this.note.descr,
        id: this.note.id,
        priority: this.note.priority,
        date: new Date(Date.now()).toLocaleString()
      })

      this.message = null;
      this.note.title = '';
      this.note.descr = '';
      this.note.priority = 'standart';
    },
    removeNote(removeId){
      let rem =  this.notes.findIndex(el => el.id === removeId);
      this.notes.splice(rem, 1);
    }
  },
  computed: {
    notesFilter(){
      let array = this.notes;
      search = this.search;
      if(!search) return array;
      search = search.trim().toLowerCase();
      array = array.filter(function(item){
        if(item.title.toLowerCase().indexOf(search) !==-1){
          return item
        }
      })
      return (array)
    }
  }
}
  
</script>

<style lang="scss">

body {
  margin: 0;
  padding: 0;
  background: #f2f2f2;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.container {
  max-width: 900px;
  margin: auto;
  padding: 0 15px;
}

.notes_inner {
  padding: 30px 0;
}

.title {
  text-align: center;
  margin-bottom: 40px;
}

.tools {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  align-items: center;
}



.view {
  svg{
    margin: 0 5px;
    &.active {
      color: rgb(115, 115, 241);
    }
  }
}
</style>