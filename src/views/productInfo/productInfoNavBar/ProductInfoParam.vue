<template>
    <div class="param">
        <table class="param-info">
            <tr v-for="(item,index) in params.rule[0]" :key="index">
                <td v-for="(item2,index1) in item" :key="index1">{{item2}}</td>
            </tr>
        </table>
        <table class="param-rule">
            <tr v-for="(item,index) in params.info" :key>
                <td class="key">{{item.key}}:</td>
                <td class="value">{{item.value}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
  export default {
    name: "ProductInfoParam",
    props:{
      params:{
        type:Object,
        default(){
          return {

          }
        }
      }
    },
    data(){
      return {
        paramsArr:{}
      }
    },

  }
</script>

<style scoped>
    .param{
        padding: 20px 15px;
        font-size: 14px;
        border-bottom: 5px solid rgba(0,0,0,.1);
    }
    .param table{
        width: 100%;

    }
    .param table tr{
        height: 40px;

    }
    .param table td{
        /*text-align: center;*/
        border-bottom: 1px solid rgba(0,0,0,.1);
    }
    .param-rule .key{
        width: 95px;
    }
    .param-rule .value{
        color: #eb4868;
    }
</style>