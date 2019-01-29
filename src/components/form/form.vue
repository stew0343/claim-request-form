<template>
  <div class="hello">
    <form>
      <el-input placeholder="First Name" v-model="firstName"></el-input>
      <el-input placeholder="Last Name" v-model="lastName"></el-input>
      <el-input placeholder="Email" v-model="email"></el-input>
      <el-input placeholder="Subject" v-model="subject"></el-input>
      <el-input
        type="textarea"
        :rows="2"
        placeholder="Comments"
        v-model="comments">
      </el-input>
      <el-checkbox v-model="spam">Subscribe me to spam</el-checkbox>
      <el-row>
        <el-button type="success" @click="dialogVisible = true">Submit</el-button>
        <el-button type="danger">Cancel</el-button>
      </el-row>


      <el-dialog
        title="Confirm"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <span>Are you sure???</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
        </span>
      </el-dialog>
    </form>
  </div>
</template>

<script src="./form.js">
// export default {
//   name: 'HelloWorld',
//   props: {
//     msg: String
//   }
// }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./form.css">
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
