<template>
    <div>
        <div class="container" id= "cuadroG">
            <router-link to="/">
                Home
            </router-link>
            <div id="lista">
                <table class="tabla">
                  <thead>
                    <tr>
                        <th>Tarea</th>
                        <th>Tarea ID</th>
                        <th>Tarea estado</th>
                    </tr>
                  </thead>
                  <tbody>
                        <tr v-for="tareas in tareas" :key="tareas.id"> 
                            <td>{{tareas.nombre}}</td>
                            <td>{{tareas.id}}</td>
                            <td v-if="tareas.estado == 0" style= "background-color: yellow;" ></td>
                            <td v-if="tareas.estado == 1" style= "background-color: orange;"></td>
                            <td v-if="tareas.estado == 2" style= "background-color: gray;"></td>
                            <td v-if="tareas.estado == 3" style= "background-color: green;"></td>
                        </tr>
                  </tbody>
                </table>
              </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios';
export default{
    name: 'tareas',
    data(){
        return{
            prueba: this.$route.params.id,
            tareas: [],
        }
    },
    created(){
    axios
      .get("http://localhost:8080/emergencia/"+ this.prueba)
      .then(result => {
        this.tareas= result.data;
      })
      .catch(e=>{
        console.log("Error :" +e);
      })
  }
}
</script>



<style>
    #cuadroG{
        background: #f1faee;
        border-radius: 6px;
        padding: 40px;
        width: 80%;
        margin: 50px auto;
        box-shadow: 15px 15px 10px rgba(0, 0, 0, 0.1);
    }


</style>