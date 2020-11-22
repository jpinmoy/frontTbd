<template>
  <div class="container">
    <div class="row">
      <div class="lista">
        <div>
          <table class="tabla">
            <thead>
              <tr>
                <th>Emergencia</th>
                <th>Emergencia ID</th>
              </tr>
            </thead>
            <tbody>
                  <tr v-for="users in users" :key="users.id" v-on:click ="irAEmergencias"> 
                     <td>{{users.name}}</td>
                      <td>{{users.id}}</td>
                  </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      paginate:['users'],
      users: [{
                  "id": 1,
                  "name": "Leanne Graham",
                  "email": "Sincere@april.biz"
              },
              {
                  "id": 2,
                  "name": "Ervin Howell",
                  "email": "Shanna@melissa.tv"
              },
              {
                  "id": 3,
                  "name": "Clementine Bauch",
                  "email": "Nathan@yesenia.net"
              },
              {
                  "id": 4,
                  "name": "Patricia Lebsack",
                  "email": "Julianne.OConner@kory.org"
              },
              {
                  "id": 5,
                  "name": "Chelsey Dietrich",
                  "email": "Lucio_Hettinger@annie.ca"
              }]
        ,
    }
  },
  methods:{

    get_Emergencias(){
      this.getAllEmergencias;
    },

    irAEmergencias() {
      this.$router.push({ name: 'Tareas', params: { id: 1 } });
    },
  },
  computed:{
  }
  
}
</script>
<style>
  body {
  background-color: #457b9d;
}
  .paginate-links{
    list-style: none;
    text-align: center;
}
  .paginate-links li {
      display: inline;
      text-align: center;
      background-color:#E43A48;
      color:white;
      padding:0.5rem;
      margin-left:0.3rem;
      margin-right: 0.3rem;
      cursor:pointer;
      border-radius: 3px;
  }
  .paginate-result{
      margin-bottom: 1rem;
      text-align: center;
  }
  table,
  th,
  td {
    border: 1px solid black;
    border-collapse: collapse;
    padding: 15px;
    background-color: #ffffff;
    text-align: center;
    width: 100%;
  }

  .lista{
      text-align: center;
      padding:0.5rem;
      margin-left:0.3rem;
      margin-right: 0.3rem;
      background-color: #45899d;
  }

</style>