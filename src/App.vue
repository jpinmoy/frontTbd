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
import axios from 'axios';

export default {
  name: 'app',
  data () {
    return {
      paginate:['users'],
      users: []
        ,
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