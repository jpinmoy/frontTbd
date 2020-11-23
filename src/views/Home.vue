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
                  <tr v-for="users in users" :key="users.id"> 
                    <td>{{users.nombre}}</td>
                    <td><button v-on:click= "tareas(users.id)">{{users.id}}</button></td>
                  </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';


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
              }],
    }
  },
  created(){
    axios
      .get("http://localhost:8080/emergencia/getAll")
      .then(result => {
        this.users= result.data;
      })
      .catch(e=>{
        console.log("Error :" +e);
      })
  },
  methods:{
    tareas(emergency) {
      this.$router.push({ name: 'tareas', params: { id: emergency } });
    }
    
  },
  computed:{
  }
  
}
</script>
<style>

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
