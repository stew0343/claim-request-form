export default {
    name: 'claimForm',
    data() {
        return {
            form: {
                firstName: '',
                lastName: '',
                email: '',
                subject: '',
                comments: '',
                spam: '',
                dialogVisible: false
            },
            rules: {
                firstName: [
                  { required: true, message: 'Please input first name', trigger: 'blur' }
                ],
                lastName: [
                  { required: true, message: 'Please input last name', trigger: 'change' }
                ],
                email: [
                  { required: true, message: 'Please input email', trigger: 'change' }
                ],
                type: [
                  { required: true, message: 'Please enter the type of claim', trigger: 'change' }
                ],
                details: [
                  { required: true, message: 'Please enter details of your claim', trigger: 'change' }
                ],
                receipt: [
                  { required: false, message: 'You must request a receipt', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        submitForm(form) {
          this.$refs[form].validate((valid) => {
            if (valid) {
                this.form.dialogVisible = true;
            } else {
                // eslint-disable-next-line
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(form) {
          this.$refs[form].resetFields();
        }
      }
}