<template>
  <div class="container">
    <div class="row">
        <div class="container" id="cuadroG">
          <table class="tabla">
            <thead>
              <tr>
                <th>Emergencia</th>
                <th>Emergencia ID</th>
              </tr>
            </thead>
            <tbody>
                  <tr v-for="emergencias in emergencias" :key="emergencias.id"> 
                    <td>{{emergencias.nombre}}</td>
                    <td><button v-on:click= "tareas(emergencias.id)">{{emergencias.id}}</button></td>
                  </tr>
            </tbody>
          </table>
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
      emergencias: [],
    }
  },
  created(){
    axios
      .get("http://localhost:8080/emergencia/getAllActivas")
      .then(result => {
        this.emergencias= result.data;
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
  #cuadroG{
        background: #f1faee;
        border-radius: 6px;
        padding: 40px;
        width: 80%;
        margin: 50px auto;
        box-shadow: 15px 15px 10px rgba(0, 0, 0, 0.1);
    }

</style>
