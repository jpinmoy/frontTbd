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
                        <th>Tarea estado</th>
                    </tr>
                  </thead>
                  <tbody>
                        <tr v-for="tareas in tareas" :key="tareas.id"> 
                            <td>{{tareas.nombre}}</td>
                            <td v-if="tareas.descrip == 'estado_0'" style= "background-color: yellow;" >{{tareas.descrip}}</td>
                            <td v-if="tareas.descrip == 'estado_1'" style= "background-color: orange;">{{tareas.descrip}}</td>
                            <td v-if="tareas.descrip == 'estado_2'" style= "background-color: gray;">{{tareas.descrip}}</td>
                            <td v-if="tareas.descrip == 'estado_3'" style= "background-color: green;">{{tareas.descrip}}</td>
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
            idEmergencia: this.$route.params.id,
            tareas: [],
            emergencias: []
        }
    },
    created(){
    axios
      .get("http://localhost:8080/tareas/ordenadas/"+ this.idEmergencia)
      .then(result => {
        this.tareas= result.data;
      })
      .catch(e=>{
        console.log("Error :" +e);
      });
    axios
        .get("http://localhost:8080/emergencia/activas/")
        .then(result => {
            this.emergencias = result.data;
        })
        .catch(e=>{
            console.log("Error :"+e);
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