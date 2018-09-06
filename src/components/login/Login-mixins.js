export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginFormRules: {
        // 登录名称的验证规则
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入用户名', trigger: 'blur' }]
      }
    }
  },
  methods: {
    login() {
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) return
        const { data: res } = await this.$ajax.post('login', this.loginForm)
        if (res.meta.status !== 200) return this.$message.error('登录失败')
        this.$message.success('登录成功')
        // 把登录成功的token保存到sessionStorage
        window.sessionStorage.setItem('token', res.data.token)
        // 使用编程式导航，跳转到后台主页
        this.$router.push('/home')
      })
    },
    resetForm() {
      this.$refs.loginFormRef.resetFields()
    }
  }
}
