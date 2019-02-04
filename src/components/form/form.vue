<template>
  <div class="hello">
    <el-form :model="form" :rules="rules" ref="form" label-width="120px">
      <el-form-item label="First Name" prop="firstName" required>
        <el-input placeholder="First Name" v-model="form.firstName"></el-input>
      </el-form-item>

      <el-form-item label="Last Name" prop="lastName">
        <el-input placeholder="Last Name" v-model="form.lastName"></el-input>
      </el-form-item>

      <el-form-item label="Email" prop="email">
        <el-input placeholder="Email" v-model="form.email"></el-input>
      </el-form-item>

      <el-form-item label="Type of Claim" prop="type">
        <el-input placeholder="Type of Claim" v-model="form.type"></el-input>
      </el-form-item>

      <el-form-item label="Claim Details" prop="details">
        <el-input
          type="textarea"
          :rows="2"
          placeholder="Claim Details"
          v-model="form.details">
        </el-input>
      </el-form-item>

      <el-form-item label="Receipt" prop="receipt">
        <el-checkbox v-model="form.receipt">I'd like an e-mail receipt</el-checkbox>
      </el-form-item>

      <el-form-item>
      <el-row>
        <el-button type="success" @click="submitForm('form')">Submit</el-button>
        <el-button type="danger" @click="resetForm('form')">Cancel</el-button>
      </el-row>
      </el-form-item>

      <el-form-item>
        <el-dialog
          title="Confirm"
          :visible.sync="form.dialogVisible"
          width="30%"
          :before-close="handleClose">
          <span>Are you sure???</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="form.dialogVisible = false">Cancel</el-button>
            <el-button type="primary" @click="form.dialogVisible = false">Confirm</el-button>
          </span>
        </el-dialog>
      </el-form-item>
    </el-form>
  </div>
</template>

<script src="./form.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./form.css"></style>
